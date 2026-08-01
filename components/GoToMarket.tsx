'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const flow = [
  'Professional Joins',
  'Creates Wedding Project',
  'Invites Team Members',
  'Entire Wedding Team Collaborates',
  'Project Completed',
  'Next Wedding Starts',
  'More Professionals Join',
] as const;

const principles = [
  ['Network Effect', 'Every project introduces new professionals.'],
  ['Low Customer Acquisition', 'Professionals invite other professionals into the same project.'],
  ['Recurring Usage', 'Every new wedding creates another collaborative workspace.'],
] as const;

export default function GoToMarket() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-[42%] top-[58%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[155px]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }}>
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">08 / GO-TO-MARKET</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.7rem,5.3vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.068em]">Every wedding grows<br className="hidden sm:block" /> the network.</h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: 0.16, ease }} className="max-w-sm text-sm leading-[1.7] tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1">
            WedBridge grows through collaboration.<br /><br />
            Every wedding project naturally brings together photographers, videographers, drone operators, editors, designers, planners, and coordinators.<br /><br />
            When one professional joins a project, the rest of the team follows.
          </motion.p>
        </div>

        <div className="my-16 grid gap-16 sm:my-20 lg:my-auto lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-center lg:gap-28 lg:py-10">
          <div className="flex flex-col items-center">
            {flow.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <motion.p
                  initial={{ opacity: 0, y: 16, filter: 'blur(7px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{ duration: 0.68, delay: 0.3 + index * 0.45, ease }}
                  animate={index === flow.length - 1 ? { scale: [1, 1.03, 1], textShadow: ['0 0 16px rgba(147,197,253,0.12)', '0 0 34px rgba(147,197,253,0.42)', '0 0 16px rgba(147,197,253,0.12)'] } : undefined}
                  className={`text-center text-[clamp(1.2rem,2.4vw,2rem)] font-medium tracking-[-0.05em] ${index === flow.length - 1 ? 'text-blue-50' : 'text-white/82'}`}
                >
                  {step}
                </motion.p>
                {index < flow.length - 1 && (
                  <motion.span initial={{ scaleY: 0, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} viewport={{ once: true, amount: 0.65 }} transition={{ duration: 0.65, delay: 0.62 + index * 0.45, ease }} className="my-4 h-9 w-px origin-top bg-blue-200/45 sm:my-5 sm:h-11" />
                )}
              </div>
            ))}
          </div>

          <div className="space-y-8 lg:space-y-10">
            {principles.map(([title, copy], index) => (
              <motion.div key={title} initial={{ opacity: 0, x: 18, filter: 'blur(7px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.7, delay: 0.72 + index * 0.18, ease }}>
                <p className="text-sm font-medium tracking-[-0.03em] text-blue-100/72 sm:text-base">{title}</p>
                <p className="mt-2 max-w-xs text-xs leading-[1.65] tracking-[-0.01em] text-white/42 sm:text-sm">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 3.35, ease }} className="pb-1 text-center text-[clamp(1.35rem,2.7vw,2.35rem)] font-medium tracking-[-0.055em] text-white/95">Every completed wedding becomes the beginning of the next.</motion.p>
      </div>
    </section>
  );
}
