'use client';

import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface Milestone {
  label: string;
  completed: boolean;
  current: boolean;
  next: boolean;
}

const milestones: Milestone[] = [
  { label: 'Product Vision', completed: false, current: true, next: false },
  { label: 'UX & Product Design', completed: true, current: false, next: false },
  { label: 'Design System', completed: true, current: false, next: false },
  { label: 'Professional Discovery', completed: true, current: false, next: false },
  { label: 'Project Workspace', completed: true, current: false, next: false },
  { label: 'Team Collaboration', completed: true, current: false, next: false },
  { label: 'Calendar Synchronization', completed: true, current: false, next: false },
  { label: 'Interactive Investor Experience', completed: true, current: false, next: false },
  { label: 'Public Launch', completed: false, current: false, next: true },
];

export default function Milestones() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[58%] top-[38%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[155px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">06 / MILESTONES</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.7rem,5.3vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.068em]">
              Built. Validated.<br className="hidden sm:block" /> Ready for launch.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="max-w-md text-sm leading-relaxed tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1"
          >
            WedBridge is no longer just an idea. We&apos;ve spent months designing the platform, validating workflows with industry professionals, and building the foundation for launch.
          </motion.p>
        </div>

        <div className="my-16 flex justify-center sm:my-20 lg:my-auto lg:py-14">
          <div className="relative w-full max-w-[440px]">
            <div aria-hidden="true" className="absolute bottom-5 left-[7px] top-5 z-0 w-px bg-white/[0.12]" />
            <motion.div
              aria-hidden="true"
              initial={{ height: 0 }}
              whileInView={{ height: 'calc(100% - 40px)' }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 2.1, delay: 0.35, ease }}
              className="absolute left-[7px] top-5 z-0 w-px origin-top bg-blue-200/55 shadow-[0_0_9px_rgba(147,197,253,0.48)]"
            />

            <div className="relative space-y-3 sm:space-y-3.5">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, x: -14, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.62, delay: 0.42 + index * 0.13, ease }}
                  className="relative flex items-center gap-5"
                >
                  <span className={`relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${milestone.next ? 'border-blue-100/55 bg-[#050505]' : 'border-emerald-300/50 bg-[#050505] shadow-[0_0_14px_rgba(52,211,153,0.28)]'}`}>
                    {milestone.completed && <Check aria-hidden="true" strokeWidth={2.2} className="h-2.5 w-2.5 text-emerald-200/90" />}
                    {milestone.current && <span className="h-1.5 w-1.5 rounded-full bg-blue-100 shadow-[0_0_8px_rgba(191,219,254,0.9)]" />}
                  </span>
                  <p className={`text-sm tracking-[-0.02em] sm:text-[15px] ${milestone.next ? 'text-white/58' : 'text-white/78'}`}>
                    {milestone.label}
                    {milestone.next && <span className="ml-3 text-[10px] uppercase tracking-[0.15em] text-blue-100/42">Next</span>}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(7px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 1.72, ease }}
          className="mx-auto w-full max-w-xl pb-7 text-center sm:pb-3"
        >
          <h3 className="text-[clamp(1.8rem,3.2vw,3rem)] font-medium tracking-[-0.06em] text-white/92">Experience WedBridge</h3>
          <p className="mt-3 text-sm leading-relaxed tracking-[-0.015em] text-white/45 sm:text-base">Don&apos;t just read about the platform.<br className="hidden sm:block" /> Explore the interactive product experience.</p>
          <motion.button
            type="button"
            onClick={() => window.open('/explore', '_self')}
            whileHover={{ y: -2, boxShadow: '0 0 34px rgba(59,130,246,0.24)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.35, ease }}
            className="group mt-7 inline-flex cursor-pointer items-center gap-3 rounded-full border border-blue-100/25 bg-white/[0.06] px-5 py-3 text-sm font-medium tracking-[-0.02em] text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
          >
            Explore WedBridge
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        <p className="pb-1 text-center text-[10px] tracking-[-0.01em] text-blue-100/38 sm:text-[11px]">The journey from concept to launch has already begun.</p>
      </div>
    </section>
  );
}
