import React from 'react';
import { motion } from 'motion/react';
import { GlassEyebrow } from './GlassEyebrow';
import { SectionHeadline } from './SectionHeadline';
import { SectionDescription } from './SectionDescription';

export const SectionIntroduction: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-9 sm:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassEyebrow />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeadline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionDescription />
      </motion.div>
    </div>
  );
};
