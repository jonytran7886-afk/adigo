/**
 * ADIGO Preorder Integration – Google Apps Script (Code.gs)
 * Spreadsheet: ADIGO – QUẢN LÝ ĐẶT TRƯỚC
 * Worksheet:   PREORDERS
 *
 * Script Properties required:
 * - SPREADSHEET_ID (optional if script is bound directly to the target spreadsheet)
 * - WEBHOOK_SECRET (recommended shared secret verified on every POST request)
 */

var CONFIG = {
  SPREADSHEET_NAME: 'ADIGO – QUẢN LÝ ĐẶT TRƯỚC',
  SHEET_NAME: 'PREORDERS',
  IDEMPOTENCY_SHEET_NAME: '_IDEMPOTENCY',
  TIMEZONE: 'Asia/Ho_Chi_Minh',
  DEFAULT_CAMPAIGN_ID: 'CHICKEN-PREORDER',
  DEFAULT_PRODUCT_ID: 'CHICKEN-WHOLE',
  DEFAULT_PRODUCT_NAME: 'Gà nguyên con',
  DEFAULT_PRODUCT_SPEC: 'Nguyên con',
  DEFAULT_UNIT: 'con',
  DEFAULT_SOURCE: 'ADIGO Landing Page',
  DEFAULT_STATUS: 'Chờ xác nhận',
  ORDER_PREFIX: 'ADG',
  ALLOWED_DELIVERY_METHODS: [
    'Giao hàng tận nơi',
    'Nhận tại điểm bán',
    'Liên hệ để xác nhận',
  ],
  ALLOWED_STATUSES: [
    'Chờ xác nhận',
    'Đã liên hệ',
    'Đã xác nhận',
    'Chờ giao hàng',
    'Đã giao hàng',
    'Đã hủy',
  ],
  HEADERS: [
    'Mã đặt trước',              // 01
    'Thời gian đăng ký',         // 02
    'Mã chiến dịch',             // 03
    'Mã sản phẩm',               // 04
    'Tên sản phẩm',              // 05
    'Quy cách',                  // 06
    'Số lượng',                  // 07
    'Đơn vị',                    // 08
    'Họ và tên',                 // 09
    'Số điện thoại',             // 10
    'Địa chỉ nhận hàng',         // 11
    'Hình thức nhận hàng',       // 12
    'Ghi chú khách hàng',        // 13
    'Nguồn khách hàng',          // 14
    'UTM Source',                // 15
    'UTM Medium',                // 16
    'UTM Campaign',              // 17
    'Đồng ý chính sách bảo mật', // 18
    'Trạng thái',                // 19
    'Nhân viên phụ trách',       // 20 (Sales updates directly)
    'Giá bán xác nhận',          // 21 (Sales updates directly)
    'Thời gian giao dự kiến',    // 22 (Sales updates directly)
    'Ghi chú nội bộ',            // 23 (Sales updates directly)
    'Thời gian cập nhật',        // 24
    'Điểm tiếp cận (Entry Point)', // 25
  ],
};

/**
 * Manual setup function — run once from the Apps Script editor
 * to initialize and format the PREORDERS worksheet safely.
 */
function setupPreorderSheet() {
  var ss = getTargetSpreadsheet_();
  var sheet = ensurePreordersSheet_(ss);
  ensureIdempotencySheet_(ss);
  return {
    ok: true,
    spreadsheetName: ss.getName(),
    sheetName: sheet.getName(),
  };
}

/**
 * Health check endpoint (does NOT expose any customer records).
 */
function doGet() {
  return jsonResponse_({
    ok: true,
    service: 'ADIGO Preorder Webhook',
    sheetName: CONFIG.SHEET_NAME,
    timezone: CONFIG.TIMEZONE,
  });
}

/**
 * Receives preorder submissions forwarded by the ADIGO backend (/api/preorders).
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  var hasLock = false;

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'EMPTY_BODY', message: 'Thiếu dữ liệu gửi lên.' });
    }

    var payload = JSON.parse(e.postData.contents);

    // Verify shared secret stored in Script Properties
    var expectedSecret = PropertiesService.getScriptProperties().getProperty('WEBHOOK_SECRET');
    if (expectedSecret && String(payload.webhookSecret || '') !== String(expectedSecret)) {
      return jsonResponse_({ ok: false, error: 'UNAUTHORIZED', message: 'Xác thực webhook không hợp lệ.' });
    }

    var validated = validatePayload_(payload);
    if (!validated.ok) {
      return jsonResponse_({ ok: false, error: 'VALIDATION_ERROR', message: validated.message });
    }

    // Wait up to 15 seconds for concurrent submissions
    lock.waitLock(15000);
    hasLock = true;

    var ss = getTargetSpreadsheet_();
    var sheet = ensurePreordersSheet_(ss);
    var idempSheet = ensureIdempotencySheet_(ss);

    // Idempotency check (CacheService + persistent _IDEMPOTENCY tab)
    var existing = findExistingRequest_(validated.data.requestId, idempSheet);
    if (existing) {
      return jsonResponse_({
        ok: true,
        duplicate: true,
        orderCode: existing.orderCode,
        registeredAt: existing.registeredAt,
        status: CONFIG.DEFAULT_STATUS,
      });
    }

    var now = new Date();
    var registeredAt = Utilities.formatDate(now, CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
    var orderCode = generateNextOrderCode_(sheet, now);

    var d = validated.data;
    var rowValues = [
      orderCode,                                  // 01 Mã đặt trước
      registeredAt,                               // 02 Thời gian đăng ký
      sanitizeFormula_(d.campaignId),             // 03 Mã chiến dịch
      sanitizeFormula_(d.productId),              // 04 Mã sản phẩm
      sanitizeFormula_(d.productName),            // 05 Tên sản phẩm
      sanitizeFormula_(d.productSpec),            // 06 Quy cách
      d.quantity,                                 // 07 Số lượng (number)
      sanitizeFormula_(d.unit),                   // 08 Đơn vị
      sanitizeFormula_(d.customerName),           // 09 Họ và tên
      sanitizeFormula_(d.phone),                  // 10 Số điện thoại (saved as text)
      sanitizeFormula_(d.address),                // 11 Địa chỉ nhận hàng
      sanitizeFormula_(d.deliveryMethod),         // 12 Hình thức nhận hàng
      sanitizeFormula_(d.note),                   // 13 Ghi chú khách hàng
      sanitizeFormula_(d.source),                 // 14 Nguồn khách hàng
      sanitizeFormula_(d.utmSource),              // 15 UTM Source
      sanitizeFormula_(d.utmMedium),              // 16 UTM Medium
      sanitizeFormula_(d.utmCampaign),            // 17 UTM Campaign
      'Đã đồng ý',                                // 18 Đồng ý chính sách bảo mật
      CONFIG.DEFAULT_STATUS,                      // 19 Trạng thái
      '',                                         // 20 Nhân viên phụ trách (do not overwrite)
      '',                                         // 21 Giá bán xác nhận (do not overwrite)
      '',                                         // 22 Thời gian giao dự kiến (do not overwrite)
      '',                                         // 23 Ghi chú nội bộ (do not overwrite)
      registeredAt,                               // 24 Thời gian cập nhật
      sanitizeFormula_(d.entryPoint),             // 25 Điểm tiếp cận (Entry Point)
    ];

    var nextRow = Math.max(sheet.getLastRow() + 1, 2);

    // Format text columns BEFORE writing so leading zeros in Vietnamese phone numbers stay intact
    sheet.getRange(nextRow, 1, 1, 1).setNumberFormat('@');
    sheet.getRange(nextRow, 2, 1, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    sheet.getRange(nextRow, 7, 1, 1).setNumberFormat('#,##0');
    sheet.getRange(nextRow, 10, 1, 1).setNumberFormat('@');
    sheet.getRange(nextRow, 24, 1, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');

    sheet.getRange(nextRow, 1, 1, CONFIG.HEADERS.length).setValues([rowValues]);

    // Apply dropdown validation to the new row's status cell
    var statusRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(CONFIG.ALLOWED_STATUSES, true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(nextRow, 19, 1, 1).setDataValidation(statusRule);

    SpreadsheetApp.flush();

    recordIdempotency_(validated.data.requestId, orderCode, registeredAt, idempSheet);

    return jsonResponse_({
      ok: true,
      duplicate: false,
      orderCode: orderCode,
      registeredAt: registeredAt,
      status: CONFIG.DEFAULT_STATUS,
    });
  } catch (err) {
    return jsonResponse_({
      ok: false,
      error: 'SERVER_ERROR',
      message: 'Không thể ghi dữ liệu đặt trước vào Google Sheets.',
    });
  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

function getTargetSpreadsheet_() {
  var spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  var ss = spreadsheetId
    ? SpreadsheetApp.openById(spreadsheetId)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error('Missing Spreadsheet. Configure SPREADSHEET_ID in Script Properties.');
  }
  return ss;
}

function ensurePreordersSheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  var lastRow = sheet.getLastRow();
  if (lastRow === 0) {
    var headerRange = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length);
    headerRange.setValues([CONFIG.HEADERS]);
    formatPreordersSheet_(sheet);
  } else {
    // Only ensure formatting & header styling if row 1 matches expected structure
    var currentHeaders = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).getValues()[0];
    var headerEmpty = currentHeaders.every(function (cell) {
      return String(cell || '').trim() === '';
    });
    if (headerEmpty) {
      sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).setValues([CONFIG.HEADERS]);
      formatPreordersSheet_(sheet);
    } else if (String(currentHeaders[24] || '').trim() === '') {
      sheet.getRange(1, 25, 1, 1).setValue(CONFIG.HEADERS[24]);
      sheet.setColumnWidth(25, 190);
    }
  }

  return sheet;
}

function formatPreordersSheet_(sheet) {
  var totalCols = CONFIG.HEADERS.length;
  var headerRange = sheet.getRange(1, 1, 1, totalCols);

  headerRange
    .setBackground('#142F63')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('center')
    .setWrap(true);

  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  if (!sheet.getFilter()) {
    sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 100), totalCols).createFilter();
  }

  // Column widths (tuned for readability)
  var widths = [
    170, // 01 Mã đặt trước
    165, // 02 Thời gian đăng ký
    150, // 03 Mã chiến dịch
    145, // 04 Mã sản phẩm
    155, // 05 Tên sản phẩm
    115, // 06 Quy cách
    90,  // 07 Số lượng
    80,  // 08 Đơn vị
    190, // 09 Họ và tên
    135, // 10 Số điện thoại
    280, // 11 Địa chỉ nhận hàng
    170, // 12 Hình thức nhận hàng
    230, // 13 Ghi chú khách hàng
    165, // 14 Nguồn khách hàng
    125, // 15 UTM Source
    125, // 16 UTM Medium
    145, // 17 UTM Campaign
    170, // 18 Đồng ý chính sách bảo mật
    145, // 19 Trạng thái
    175, // 20 Nhân viên phụ trách
    145, // 21 Giá bán xác nhận
    175, // 22 Thời gian giao dự kiến
    240, // 23 Ghi chú nội bộ
    165, // 24 Thời gian cập nhật
    190, // 25 Điểm tiếp cận (Entry Point)
  ];

  for (var i = 0; i < widths.length; i++) {
    sheet.setColumnWidth(i + 1, widths[i]);
  }

  // Format date & text columns across sheet template
  var maxRows = Math.max(sheet.getMaxRows(), 500);
  sheet.getRange(2, 1, maxRows - 1, 1).setNumberFormat('@');
  sheet.getRange(2, 2, maxRows - 1, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
  sheet.getRange(2, 7, maxRows - 1, 1).setNumberFormat('#,##0');
  sheet.getRange(2, 10, maxRows - 1, 1).setNumberFormat('@');
  sheet.getRange(2, 24, maxRows - 1, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');

  // Status dropdown across column 19
  var statusRange = sheet.getRange(2, 19, maxRows - 1, 1);
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(CONFIG.ALLOWED_STATUSES, true)
    .setAllowInvalid(false)
    .build();
  statusRange.setDataValidation(statusRule);

  // Conditional formatting by status
  var rules = [
    buildStatusRule_(statusRange, 'Chờ xác nhận', '#FEF3C7', '#92400E'),
    buildStatusRule_(statusRange, 'Đã liên hệ', '#E0F2FE', '#075985'),
    buildStatusRule_(statusRange, 'Đã xác nhận', '#D1FAE5', '#065F46'),
    buildStatusRule_(statusRange, 'Chờ giao hàng', '#DBEAFE', '#1E40AF'),
    buildStatusRule_(statusRange, 'Đã giao hàng', '#BBF7D0', '#14532D'),
    buildStatusRule_(statusRange, 'Đã hủy', '#FEE2E2', '#991B1B'),
  ];
  sheet.setConditionalFormatRules(rules);
}

function buildStatusRule_(range, statusText, bgHex, fgHex) {
  return SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo(statusText)
    .setBackground(bgHex)
    .setFontColor(fgHex)
    .setBold(true)
    .setRanges([range])
    .build();
}

function ensureIdempotencySheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.IDEMPOTENCY_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.IDEMPOTENCY_SHEET_NAME);
    sheet.getRange(1, 1, 1, 3).setValues([['Request ID', 'Order Code', 'Registered At']]);
    sheet.hideSheet();
  }
  return sheet;
}

function findExistingRequest_(requestId, idempSheet) {
  var cache = CacheService.getScriptCache();
  var cached = cache.get('req_' + requestId);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (ignore) {}
  }

  var lastRow = idempSheet.getLastRow();
  if (lastRow < 2) return null;

  var startRow = Math.max(2, lastRow - 500);
  var values = idempSheet.getRange(startRow, 1, lastRow - startRow + 1, 3).getValues();
  for (var i = values.length - 1; i >= 0; i--) {
    if (String(values[i][0]) === requestId) {
      var found = {
        orderCode: String(values[i][1]),
        registeredAt: String(values[i][2]),
      };
      cache.put('req_' + requestId, JSON.stringify(found), 21600);
      return found;
    }
  }
  return null;
}

function recordIdempotency_(requestId, orderCode, registeredAt, idempSheet) {
  var cache = CacheService.getScriptCache();
  cache.put(
    'req_' + requestId,
    JSON.stringify({ orderCode: orderCode, registeredAt: registeredAt }),
    21600
  );
  idempSheet.appendRow([requestId, orderCode, registeredAt]);
}

function generateNextOrderCode_(sheet, now) {
  var datePart = Utilities.formatDate(now, CONFIG.TIMEZONE, 'yyyyMMdd');
  var prefix = CONFIG.ORDER_PREFIX + '-' + datePart + '-';
  var lastRow = sheet.getLastRow();
  var maxSeq = 0;

  if (lastRow >= 2) {
    var codes = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < codes.length; i++) {
      var code = String(codes[i][0] || '').trim();
      if (code.indexOf(prefix) === 0) {
        var seq = parseInt(code.slice(prefix.length), 10);
        if (!isNaN(seq) && seq > maxSeq) {
          maxSeq = seq;
        }
      }
    }
  }

  var nextSeq = String(maxSeq + 1);
  while (nextSeq.length < 4) {
    nextSeq = '0' + nextSeq;
  }
  return prefix + nextSeq;
}

function validatePayload_(payload) {
  if (!payload || typeof payload !== 'object') {
    return { ok: false, message: 'Dữ liệu đặt trước không hợp lệ.' };
  }

  var requestId = cleanText_(payload.requestId, 80);
  if (!requestId || requestId.length < 10) {
    return { ok: false, message: 'Thiếu mã định danh yêu cầu.' };
  }

  var customerName = cleanText_(payload.customerName, 80);
  if (customerName.length < 2) {
    return { ok: false, message: 'Vui lòng nhập họ và tên hợp lệ.' };
  }

  var rawPhone = cleanText_(payload.phone, 24).replace(/[\s.-]/g, '');
  var normalizedPhone = rawPhone.indexOf('+84') === 0
    ? '0' + rawPhone.slice(3)
    : rawPhone.indexOf('84') === 0 && rawPhone.length === 11
    ? '0' + rawPhone.slice(2)
    : rawPhone;

  if (!/^0(3|5|7|8|9)\d{8}$/.test(normalizedPhone)) {
    return { ok: false, message: 'Số điện thoại Việt Nam chưa đúng định dạng.' };
  }

  var address = cleanText_(payload.address, 240);
  if (address.length < 5) {
    return { ok: false, message: 'Vui lòng nhập địa chỉ hoặc khu vực nhận hàng.' };
  }

  var quantity = Number(payload.quantity);
  if (!isFinite(quantity) || Math.floor(quantity) !== quantity || quantity < 1 || quantity > 50) {
    return { ok: false, message: 'Số lượng phải là số nguyên từ 1 đến 50.' };
  }

  var deliveryMethod = cleanText_(payload.deliveryMethod, 60);
  if (CONFIG.ALLOWED_DELIVERY_METHODS.indexOf(deliveryMethod) === -1) {
    return { ok: false, message: 'Hình thức nhận hàng không hợp lệ.' };
  }

  if (payload.privacyAccepted !== true) {
    return { ok: false, message: 'Vui lòng đồng ý với Chính sách bảo mật trước khi đặt trước.' };
  }

  return {
    ok: true,
    data: {
      requestId: requestId,
      campaignId: cleanText_(payload.campaignId, 40) || CONFIG.DEFAULT_CAMPAIGN_ID,
      productId: cleanText_(payload.productId, 40) || CONFIG.DEFAULT_PRODUCT_ID,
      productName: cleanText_(payload.productName, 80) || CONFIG.DEFAULT_PRODUCT_NAME,
      productSpec: cleanText_(payload.productSpec, 60) || CONFIG.DEFAULT_PRODUCT_SPEC,
      quantity: quantity,
      unit: cleanText_(payload.unit, 20) || CONFIG.DEFAULT_UNIT,
      customerName: customerName,
      phone: normalizedPhone,
      address: address,
      deliveryMethod: deliveryMethod,
      note: cleanText_(payload.note, 300),
      source: cleanText_(payload.source, 60) || CONFIG.DEFAULT_SOURCE,
      entryPoint: cleanText_(payload.entryPoint, 50) || 'direct',
      utmSource: cleanText_(payload.utmSource, 80),
      utmMedium: cleanText_(payload.utmMedium, 80),
      utmCampaign: cleanText_(payload.utmCampaign, 80),
    },
  };
}

function cleanText_(value, maxLen) {
  var str = String(value === undefined || value === null ? '' : value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return maxLen && str.length > maxLen ? str.slice(0, maxLen) : str;
}

/**
 * Prevents spreadsheet formula injection (=, +, -, @, tab, CR).
 */
function sanitizeFormula_(value) {
  var str = String(value === undefined || value === null ? '' : value);
  if (/^[=+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
