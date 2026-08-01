'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const workflow = [
  ['01', 'Client Books', 'Wedding'],
  ['02', 'Find', 'Photographer'],
  ['03', 'Find', 'Videographer'],
  ['04', 'Find Drone', 'Operator'],
  ['05', 'Wedding', 'Day'],
  ['06', 'Post', 'Production'],
  ['07', '-', 'Repeat'],
] as const;

const floatingTags = [
  { label: 'WhatsApp', className: 'left-[5%] top-[42%]', delay: 0 },
  { label: 'Phone Calls', className: 'right-[5%] top-[34%]', delay: 0.8 },
  { label: 'Personal Contacts', className: 'left-[13%] bottom-[24%]', delay: 1.4 },
  { label: 'Availability Checks', className: 'right-[12%] bottom-[25%]', delay: 0.4 },
  { label: 'Schedule Conflicts', className: 'left-[30%] top-[64%]', delay: 1.1 },
  { label: 'Manual Calendars', className: 'right-[29%] top-[62%]', delay: 1.9 },
  { label: 'Last-minute Replacements', className: 'right-[7%] bottom-[40%]', delay: 2.4 },
] as const;

export default function Problem() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-[-22rem] h-[46rem] w-[46rem] rounded-full bg-blue-500/14 blur-[150px]"
      />

      {floatingTags.map((tag) => (
        <motion.span
          key={tag.label}
          aria-hidden="true"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 6.5,
            delay: tag.delay,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
          }}
          className={`pointer-events-none absolute hidden rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/20 lg:block ${tag.className}`}
        >
          {tag.label}
        </motion.span>
      ))}

      <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">
              02 / THE PROBLEM
            </p>
            <h2 className="relative -top-7 max-w-[92%] text-balance text-[clamp(2.4rem,4.55vw,4.75rem)] font-semibold leading-[1] tracking-[-0.065em]">
              Every booked wedding starts a race to assemble the right team.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative -top-10 max-w-sm text-sm leading-[1.75] tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1"
          >
            After a wedding is booked, photographers and studios rush to find available professionals, confirm schedules, coordinate everyone, and then repeat the same process again for post-production.
          </motion.p>
        </div>

        <div className="relative my-auto -translate-y-16 w-full py-10 sm:py-14 lg:-translate-y-20 lg:py-16">
          <div className="flex w-full items-center">
            {workflow.map(([number, firstLine, secondLine], index) => {
              const isWeddingDay = number === '05';
              const isCompleted = number === '01';

              return (
                <div
                  key={number}
                  className="flex min-w-0 flex-1 items-center last:pr-3 sm:last:pr-5 lg:last:pr-10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.32 + index * 0.14,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -3 }}
                    className={`group relative flex h-[96px] min-w-0 flex-1 flex-col justify-between rounded-xl border p-3 transition-colors sm:h-[128px] sm:rounded-2xl sm:p-5 lg:h-[154px] ${
                      isCompleted
                        ? 'border-emerald-200/25 bg-emerald-400/[0.035] shadow-[0_0_34px_rgba(52,211,153,0.16)] hover:border-emerald-100/40 hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]'
                        : isWeddingDay
                          ? 'border-blue-200/30 bg-blue-400/[0.06] shadow-[0_0_58px_rgba(59,130,246,0.24)] hover:border-blue-100/45 hover:shadow-[0_0_64px_rgba(59,130,246,0.28)]'
                          : 'border-white/10 bg-white/[0.035] hover:border-blue-200/25 hover:bg-white/[0.06] hover:shadow-[0_0_28px_rgba(59,130,246,0.08)]'
                    }`}
                  >
                    <span className={`text-[9px] font-medium tracking-[0.14em] sm:text-[10px] lg:text-[11px] ${isCompleted ? 'text-emerald-100/55' : 'text-white/40'}`}>
                      {number}
                    </span>
                    <span className={`text-[11px] font-medium leading-[1.1] tracking-[-0.025em] sm:text-[15px] lg:text-base ${isCompleted ? 'text-emerald-50/85' : 'text-white/80'}`}>
                      {firstLine}
                      <br />
                      {secondLine}
                    </span>
                  </motion.div>

                  {index < workflow.length - 1 && (
                    <div className="relative h-px w-3 shrink-0 bg-white/[0.14] sm:w-5 lg:w-10">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.62,
                          delay: 0.72 + index * 0.14,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`absolute inset-0 origin-left ${index === 0 ? 'bg-emerald-200/55' : 'bg-blue-200/60'}`}
                      />
                      <ArrowRight
                        aria-hidden="true"
                        strokeWidth={1.25}
                        className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-blue-100/48 lg:block"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, delay: 1.42, ease: [0.16, 1, 0.3, 1] }}
          className="pb-8 pt-8 text-center text-[clamp(1.5rem,2.7vw,2.35rem)] font-medium tracking-[-0.05em] text-white/90 sm:pt-12"
        >
          Every wedding starts with rebuilding the team.
        </motion.p>
      </div>
    </section>
  );
}
