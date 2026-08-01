'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface BusinessModel {
  title: string;
  items: string[];
  featured: boolean;
}

const models: BusinessModel[] = [
  { title: 'Free Access', items: ['Create Profile', 'Portfolio', 'Search Projects', 'Join Teams'], featured: false },
  { title: 'Premium Subscription', items: ['Smart Discovery', 'Calendar Sync', 'Priority Visibility', 'Advanced Workspace'], featured: true },
  { title: 'Studio / Enterprise', items: ['Team Workspace', 'Multiple Members', 'Project Management', 'Business Dashboard'], featured: false },
];

const revenueFlow = ['Wedding Professionals', 'Free Membership', 'Premium Upgrade', 'Monthly Recurring Revenue'] as const;

export default function BusinessModel() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[57%] h-[42rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[155px]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">07 / BUSINESS MODEL</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.55rem,5.1vw,5.35rem)] font-semibold leading-[0.94] tracking-[-0.068em]">
              Recurring revenue from<br className="hidden sm:block" /> every active wedding professional.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="max-w-sm text-sm leading-[1.7] tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1"
          >
            WedBridge operates as a subscription platform built exclusively for wedding professionals. Professionals can join for free, while advanced workflow and business tools are available through premium subscriptions.
          </motion.p>
        </div>

        <div className="my-16 flex flex-col items-center sm:my-20 lg:my-auto lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="relative z-10 rounded-full border border-blue-100/30 bg-white/[0.06] px-8 py-3 text-base font-medium tracking-[-0.04em] text-blue-50 shadow-[0_0_34px_rgba(59,130,246,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:px-10 sm:py-3.5 sm:text-lg"
          >
            WedBridge
          </motion.div>

          <div className="relative mt-7 w-full max-w-[960px] sm:mt-9">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75, delay: 0.78, ease }}
              className="absolute left-[16.66%] right-[16.66%] top-0 h-px origin-center bg-blue-200/40"
            />
            <div className="grid gap-4 pt-7 sm:grid-cols-3 sm:gap-5 sm:pt-8">
              {models.map((model, modelIndex) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 18, filter: 'blur(7px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.72 + modelIndex * 0.16, ease }}
                  className={`relative border px-5 py-5 sm:min-h-[188px] sm:px-6 sm:py-6 ${model.featured ? 'border-blue-200/30 bg-blue-300/[0.07] shadow-[0_0_34px_rgba(59,130,246,0.13)]' : 'border-white/[0.11] bg-white/[0.025]'}`}
                >
                  <span className="absolute -top-[31px] left-1/2 h-7 w-px -translate-x-1/2 bg-blue-200/40 sm:-top-[33px] sm:h-8" />
                  <p className={`text-sm font-medium tracking-[-0.03em] ${model.featured ? 'text-blue-50' : 'text-white/85'}`}>{model.title}</p>
                  <ul className="mt-5 space-y-2 text-xs tracking-[-0.01em] text-white/46 sm:mt-6 sm:text-[13px]">
                    {model.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center sm:mt-14">
            {revenueFlow.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <motion.p
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 1.32 + index * 0.18, ease }}
                  className={`text-sm tracking-[-0.025em] sm:text-base ${index === revenueFlow.length - 1 ? 'font-medium text-blue-100 [text-shadow:0_0_20px_rgba(147,197,253,0.34)]' : 'text-white/60'}`}
                >
                  {step}
                </motion.p>
                {index < revenueFlow.length - 1 && <motion.span initial={{ scaleY: 0, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.48 + index * 0.18, ease }} className="my-2 h-5 w-px origin-top bg-blue-200/45" />}
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, delay: 2.2, ease }}
          className="pb-1 text-center text-[clamp(1.35rem,2.7vw,2.35rem)] font-medium tracking-[-0.055em] text-white/90"
        >
          Every active professional becomes recurring revenue.
        </motion.p>
      </div>
    </section>
  );
}
