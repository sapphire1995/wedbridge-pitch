'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 h-[42rem] w-[42rem] rounded-full bg-blue-500/15 blur-[140px]"
      />

      <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center px-6 sm:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14, delayChildren: 0.12 }}
          className="max-w-5xl"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[1080px] text-balance text-[clamp(3.25rem,8.2vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em]"
          >
            Millions of wedding professionals.
            <br />
            One disconnected workflow.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-14"
          >
            <ArrowDown
              aria-hidden="true"
              strokeWidth={1.25}
              className="h-5 w-5 text-white/50"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 sm:mt-20"
          >
            <p className="text-[clamp(2.25rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.055em]">
              Meet WedBridge.
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed tracking-[-0.02em] text-white/50 sm:text-lg">
              The work management platform for the wedding industry.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-7 left-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40 sm:bottom-10 sm:left-10 lg:left-12"
      >
        <span className="h-px w-8 bg-white/30" />
        Scroll to begin
      </motion.div>
    </section>
  );
}
