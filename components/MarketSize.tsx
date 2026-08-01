'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const journey = ['India\'s Wedding Industry', 'Wedding Professionals', 'Freelancers & Studios', 'Subscription Opportunity', 'WedBridge'] as const;

const marketLayers = [
  ['TAM', 'All wedding professionals\nacross India'],
  ['SAM', 'Professionals adopting\ndigital workflow software'],
  ['SOM', 'Initial market: Kerala\n\nExpansion: South India\n\nScale: Pan-India'],
] as const;

export default function MarketSize() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-[42%] top-[60%] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[155px]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }}>
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">09 / MARKET SIZE</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.55rem,5.1vw,5.35rem)] font-semibold leading-[0.94] tracking-[-0.068em]">A recurring software opportunity<br className="hidden sm:block" /> built on a recurring industry.</h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: 0.16, ease }} className="max-w-sm text-sm leading-[1.7] tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1">
            WedBridge serves the professionals behind every wedding.<br /><br />
            As weddings happen every day across India, every new project creates another opportunity for recurring software adoption.
          </motion.p>
        </div>

        <div className="my-16 grid gap-16 sm:my-20 lg:my-auto lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.52fr)] lg:items-center lg:gap-28 lg:py-12">
          <div className="flex flex-col items-center">
            {journey.map((stage, index) => (
              <div key={stage} className="flex flex-col items-center">
                <motion.p
                  initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{ duration: 0.72, delay: 0.3 + index * 0.46, ease }}
                  animate={index === journey.length - 1 ? { scale: [1, 1.03, 1], textShadow: ['0 0 16px rgba(147,197,253,0.12)', '0 0 36px rgba(147,197,253,0.42)', '0 0 16px rgba(147,197,253,0.12)'] } : undefined}
                  className={`text-center text-[clamp(1.45rem,2.8vw,2.4rem)] font-medium tracking-[-0.06em] ${index === journey.length - 1 ? 'text-blue-50' : 'text-white/84'}`}
                >
                  {stage}
                </motion.p>
                {index < journey.length - 1 && <motion.div initial={{ opacity: 0, scaleY: 0 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true, amount: 0.65 }} transition={{ duration: 0.65, delay: 0.64 + index * 0.46, ease }} className="my-5 origin-top text-blue-200/45 sm:my-6"><ArrowDown aria-hidden="true" strokeWidth={0.9} className="h-6 w-6" /></motion.div>}
              </div>
            ))}
          </div>

          <div className="space-y-8 lg:space-y-10">
            {marketLayers.map(([label, copy], index) => (
              <motion.div key={label} initial={{ opacity: 0, x: 18, filter: 'blur(7px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 2.75 + index * 0.18, ease }}>
                <p className="text-[10px] font-medium tracking-[0.18em] text-blue-100/65">{label}</p>
                <p className="mt-3 whitespace-pre-line text-sm leading-[1.65] tracking-[-0.015em] text-white/48 sm:text-base">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 3.5, ease }} className="pb-1 text-center text-[clamp(1.35rem,2.7vw,2.35rem)] font-medium tracking-[-0.055em] text-white/95">Every wedding creates another opportunity for recurring revenue.</motion.p>
      </div>
    </section>
  );
}
