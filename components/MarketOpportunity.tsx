'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface MarketFlowStep {
  value: string;
  label: string;
  final: boolean;
}

const flow: MarketFlowStep[] = [
  { value: '10M+', label: 'Weddings Every Year', final: false },
  { value: 'Millions', label: 'Collaborative Projects', final: false },
  { value: 'Millions', label: 'Wedding Professionals', final: false },
  { value: 'Manual Coordination', label: '', final: false },
  { value: 'WedBridge', label: '', final: true },
];

export default function MarketOpportunity() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[64%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[155px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">05 / MARKET OPPORTUNITY</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.7rem,5.3vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.068em]">
              Every wedding creates<br className="hidden sm:block" /> a new project.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="max-w-sm text-sm leading-[1.8] tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1"
          >
            More than 10 million weddings take place across India every year.<br /><br />
            Each wedding creates a temporary production team of photographers, videographers, editors, planners, designers, and coordinators who must work together.<br /><br />
            Yet these collaborative projects are still managed manually.
          </motion.p>
        </div>

        <div className="my-16 flex justify-center sm:my-20 lg:my-auto lg:py-16">
          <div className="flex w-full max-w-[460px] flex-col items-center">
            {flow.map((step, index) => (
              <div key={step.value + index} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{ duration: 0.75, delay: 0.28 + index * 0.72, ease }}
                  animate={step.final ? { scale: [1, 1.03, 1], textShadow: ['0 0 20px rgba(147,197,253,0.18)', '0 0 40px rgba(147,197,253,0.42)', '0 0 20px rgba(147,197,253,0.18)'] } : undefined}
                  className={`text-center ${step.final ? 'text-blue-100' : step.value === 'Manual Coordination' ? 'text-white/72' : 'text-white/90'}`}
                >
                  <p className={`text-[clamp(2rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.075em] ${step.final ? 'text-[1.15em] text-blue-50' : ''}`}>
                    {step.value}
                  </p>
                  {step.label && <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-blue-100/45 sm:text-[11px]">{step.label}</p>}
                </motion.div>

                {index < flow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true, amount: 0.65 }}
                    transition={{ duration: 0.7, delay: 0.72 + index * 0.72, ease }}
                    className="my-7 origin-top text-blue-200/45 sm:my-8"
                  >
                    <ArrowDown aria-hidden="true" strokeWidth={0.9} className="h-7 w-7" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 4.35, ease }}
          className="pb-7 text-center text-[clamp(1.5rem,3vw,2.7rem)] font-medium tracking-[-0.06em] text-white/98 sm:pb-12"
        >
          Millions of projects.<br className="sm:hidden" /> One operating platform.
        </motion.p>
      </div>

      <p className="absolute bottom-5 right-6 max-w-[15rem] text-right text-[8px] leading-relaxed tracking-[-0.01em] text-white/22 sm:bottom-7 sm:right-10 sm:text-[9px] lg:right-12">
        Sources<br />IBEF (India Brand Equity Foundation)<br />WedMeGood Wedding Industry Report
      </p>
    </section>
  );
}
