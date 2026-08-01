'use client';

import { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const contactDetails = [
  ['Email', 'admin@wedbridge.in'],
  ['Phone', '+91 8921725247'],
  ['Website', 'www.wedbridge.in'],
] as const;

export default function Connect() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-[82%] top-[48%] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[155px]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
        <motion.p initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, ease }} className="text-[10px] font-medium tracking-[0.18em] text-blue-200/55">11 / LET&apos;S CONNECT</motion.p>

        <div className="my-auto grid gap-16 py-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(24rem,0.7fr)] lg:items-center lg:gap-24 lg:py-8">
          <motion.div initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1, delay: 0.08, ease }}>
            <h1 className="max-w-5xl text-balance text-[clamp(2.8rem,6.2vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.078em]">The future of the wedding industry<br className="hidden sm:block" /> won&apos;t be built by another marketplace.<br /><br className="hidden sm:block" />It will be built by the platform that<br className="hidden sm:block" /> connects every professional and every project.</h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.42, ease }} className="mt-10 max-w-md text-sm leading-[1.7] tracking-[-0.015em] text-white/48 sm:mt-14 sm:text-base">WedBridge is building the operating platform for the wedding industry.<br /><br />If our vision resonates with you, let&apos;s start the conversation.</motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28, filter: 'blur(9px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9, delay: 0.3, ease }} className="w-full max-w-md justify-self-center lg:justify-self-end">
            <div className="border-y border-white/[0.11] py-6 sm:py-7">
              <h2 className="text-xl font-medium tracking-[-0.05em] text-white/90 sm:text-2xl">Let&apos;s Connect</h2>
              <p className="mt-4 text-sm tracking-[-0.02em] text-blue-100/58">Founder</p>
              <p className="mt-1 text-lg font-medium tracking-[-0.04em] text-white/82">Amal Jamal</p>
              <div className="mt-6">
                {contactDetails.map(([label, value], index) => (
                  <motion.div key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.68 + index * 0.13, ease }} className={`flex items-center justify-between gap-5 py-3 text-sm ${index > 0 ? 'border-t border-white/[0.08]' : ''}`}>
                    <span className="text-white/32">{label}</span><span className="text-right text-white/68">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.form initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 1.2, ease }} onSubmit={handleSubmit} className="mt-8">
              <h3 className="text-base font-medium tracking-[-0.035em] text-white/82">Interested in connecting?</h3>
              <div className="mt-4 space-y-2.5">
                {['Name', 'Email', 'Phone Number'].map((label) => (
                  <input key={label} aria-label={label} name={label.toLowerCase().replace(' ', '-')} placeholder={label} className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.035] px-4 text-sm tracking-[-0.015em] text-white/80 outline-none placeholder:text-white/30 transition-colors focus:border-blue-200/45 focus:bg-white/[0.055]" />
                ))}
              </div>
              <motion.button type="submit" whileHover={{ y: -2, boxShadow: '0 0 34px rgba(59,130,246,0.25)' }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.35, ease }} className="group mt-4 inline-flex h-11 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-blue-100/25 bg-blue-300/[0.1] text-sm font-medium tracking-[-0.02em] text-blue-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                Connect <ArrowRight aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
