'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const journey = ['Wedding Studio', 'Wedding Professional', 'Film Industry', 'Technology Founder', 'WedBridge'] as const;

const metrics = [
  ['13+ Years', 'Wedding Industry Experience'],
  ['2 Hit Malayalam Films', 'Romancham • NeyMAR'],
  ['Founder', 'Technology & Product Builder'],
] as const;

export default function FounderStory() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-[67%] top-[56%] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[155px]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-start lg:gap-28">
          <motion.div initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }}>
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">10 / WHY ME</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.45rem,4.6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.068em]">Built by someone<br className="hidden sm:block" /> who lived the problem.</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: 0.16, ease }} className="max-w-[28rem] text-sm leading-[1.82] tracking-[-0.015em] text-white/48 sm:text-base lg:pt-1">
            <p>At 18, I started working part-time in a wedding studio.</p>
            <p className="mt-5">Over the next 13 years, I worked across multiple roles including lighting assistant, album designer, freelance photographer, colour grader and creative designer.</p>
            <p className="mt-5">While working in the industry, I experienced firsthand the operational challenges wedding professionals face every day.</p>
            <p className="mt-5">Later, I became Design Head for the Malayalam films Romancham and NeyMAR.</p>
            <p className="mt-5">Alongside my creative career, I learned software development, product management, startup operations and built technology products with a lean approach.</p>
            <p className="mt-5 text-white/65">Today, WedBridge is the result of combining deep wedding industry experience with technology to solve a problem I&apos;ve personally lived.</p>
          </motion.div>
        </div>

        <div className="my-16 sm:my-20 lg:my-auto lg:py-14">
          <div className="mx-auto flex max-w-[1180px] flex-col items-stretch lg:flex-row lg:items-center">
            {journey.map((stage, index) => (
              <div key={stage} className="flex min-w-0 flex-1 flex-col items-center lg:flex-row">
                <motion.div initial={{ opacity: 0, y: 16, filter: 'blur(7px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.7, delay: 0.3 + index * 0.28, ease }} className={`w-full text-center ${index === journey.length - 1 ? 'text-blue-50 [text-shadow:0_0_28px_rgba(147,197,253,0.4)]' : 'text-white/78'}`}>
                  <p className={`mx-auto max-w-[11rem] font-medium leading-[1.05] tracking-[-0.05em] ${index === journey.length - 1 ? 'text-[clamp(1.35rem,2.5vw,2.2rem)]' : 'text-[clamp(1.1rem,2vw,1.7rem)]'}`}>{stage}</p>
                </motion.div>
                {index < journey.length - 1 && <motion.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.65, delay: 0.64 + index * 0.28, ease }} className="relative my-5 h-px w-10 origin-left bg-blue-200/42 lg:mx-6 lg:my-0 lg:flex-1"><span className="absolute -right-1 -top-[2px] h-[5px] w-[5px] rounded-full bg-blue-100/70 shadow-[0_0_7px_rgba(147,197,253,0.75)]" /></motion.div>}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[900px] grid-cols-3 border-y border-white/[0.1] py-7 sm:py-9">
          {metrics.map(([value, label], index) => (
            <motion.div key={value} initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.65 }} transition={{ duration: 0.7, delay: 1.8 + index * 0.16, ease }} className={`px-3 text-center ${index > 0 ? 'border-l border-white/[0.1]' : ''}`}>
              <p className="text-[clamp(1.2rem,2.5vw,2.2rem)] font-medium leading-none tracking-[-0.06em] text-white/90">{value}</p>
              <p className="mx-auto mt-3 max-w-[10rem] text-[9px] leading-[1.35] tracking-[0.02em] text-blue-100/42 sm:text-[10px]">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 2.35, ease }} className="pb-1 pt-14 text-center sm:pt-16 lg:pt-20">
          <p className="text-[clamp(1.55rem,3.2vw,2.9rem)] font-medium leading-[1.04] tracking-[-0.06em] text-white/95">I didn&apos;t discover this problem.</p>
          <p className="mt-1 text-[clamp(1.55rem,3.2vw,2.9rem)] font-medium leading-[1.04] tracking-[-0.06em] text-blue-100/72">I lived it.</p>
        </motion.div>
      </div>
    </section>
  );
}
