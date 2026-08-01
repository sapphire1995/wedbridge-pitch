'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const advantages = [
  {
    number: '01',
    icon: '🎯',
    title: 'Built for the Wedding Industry',
    description: 'Every feature is designed specifically for wedding professionals—not adapted from generic work software.',
    position: 'left-0 top-[5%]',
    connection: [36, 38, 28, 29],
  },
  {
    number: '02',
    icon: '🤝',
    title: 'Project-Based Teams',
    description: 'Every wedding creates a new team. Build, organize and collaborate inside one workspace.',
    position: 'right-0 top-[5%]',
    connection: [64, 38, 72, 29],
  },
  {
    number: '03',
    icon: '📅',
    title: 'Shared Availability',
    description: 'Calendars, invitations and schedules stay synchronized automatically across the project.',
    position: 'bottom-[3%] left-0',
    connection: [36, 62, 28, 71],
  },
  {
    number: '04',
    icon: '📍',
    title: 'Nearby Professional Discovery',
    description: 'Instantly discover trusted professionals nearby based on role, availability and location.',
    position: 'bottom-[3%] right-0',
    connection: [64, 62, 72, 71],
  },
] as const;

export default function WhyWedBridge() {
  return (
    <section className="relative h-[100svh] min-h-[760px] overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[57%] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.11] blur-[175px]"
      />

      <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">04 / WHY WEDBRIDGE</p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.7rem,5.7vw,5.9rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              The Operating Platform for the Wedding Industry.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="max-w-md text-sm leading-relaxed tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1"
          >
            Generic tools weren&apos;t built for wedding work.
            <br />
            WedBridge is purpose-built for discovering professionals, building teams, managing projects, and delivering every wedding inside one connected workspace.
          </motion.p>
        </div>

        <div className="relative mx-auto my-auto h-[430px] w-full max-w-[1060px] sm:h-[480px] lg:h-[500px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            {advantages.map((advantage, index) => {
              const [x1, y1, x2, y2] = advantage.connection;

              return (
                <g key={advantage.number}>
                  <motion.line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, delay: 1.35 + index * 0.14, ease }}
                    stroke="rgba(147, 197, 253, 0.24)"
                    strokeWidth="0.13"
                  />
                  <motion.circle
                    r="0.42"
                    initial={{ opacity: 0, cx: x1, cy: y1 }}
                    whileInView={{ opacity: 0.72 }}
                    animate={{ cx: [x1, x2], cy: [y1, y2] }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      opacity: { duration: 0.4, delay: 2.3 + index * 0.1, ease },
                      cx: { duration: 3.6, delay: 2.55 + index * 0.24, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY, repeatDelay: 2.6 },
                      cy: { duration: 3.6, delay: 2.55 + index * 0.24, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY, repeatDelay: 2.6 },
                    }}
                    fill="rgba(147, 197, 253, 0.85)"
                    style={{ filter: 'drop-shadow(0 0 3px rgba(96, 165, 250, 0.8))' }}
                  />
                </g>
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.82, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.7, ease }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.018, 1],
                  boxShadow: [
                    '0 0 72px rgba(59,130,246,0.34)',
                    '0 0 104px rgba(59,130,246,0.46)',
                    '0 0 72px rgba(59,130,246,0.34)',
                  ],
                }}
                transition={{ duration: 5.2, delay: 1.7, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
                className="flex h-48 w-48 items-center justify-center rounded-full border border-blue-100/50 bg-[radial-gradient(circle_at_35%_30%,rgba(191,219,254,0.2),rgba(59,130,246,0.14)_45%,rgb(8,14,27)_100%)] text-center shadow-[0_0_72px_rgba(59,130,246,0.34)] sm:h-60 sm:w-60"
              >
                <div>
                  <p className="mb-3 text-[9px] font-medium tracking-[0.2em] text-blue-100/60 sm:text-[10px]">WEDBRIDGE</p>
                  <p className="text-xl font-medium leading-[1.02] tracking-[-0.05em] text-blue-50 sm:text-[1.65rem]">
                    The Operating<br />Platform
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {advantages.map((advantage, index) => (
            <div key={advantage.number} className={`absolute ${advantage.position}`}>
              <motion.article
                initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: 1.65 + index * 0.16, ease }}
                whileHover={{ y: -3, borderColor: 'rgba(191, 219, 254, 0.4)', boxShadow: '0 0 34px rgba(59,130,246,0.14)' }}
                className="w-[180px] rounded-2xl border border-blue-100/15 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_0_26px_rgba(59,130,246,0.05)] backdrop-blur-md sm:w-[215px] sm:rounded-[1.15rem] sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base leading-none sm:text-lg" aria-hidden="true">{advantage.icon}</span>
                  <span className="text-[9px] font-medium tracking-[0.16em] text-white/30">{advantage.number}</span>
                </div>
                <h3 className="mt-4 text-sm font-medium leading-[1.1] tracking-[-0.035em] text-white/90 sm:text-[15px]">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-[10px] leading-relaxed tracking-[-0.01em] text-white/43 sm:text-[11px]">
                  {advantage.description}
                </p>
              </motion.article>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 8, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 2.4, ease }}
            className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[9px] tracking-[-0.01em] text-white/45 backdrop-blur-md lg:flex"
          >
            <span aria-hidden="true">🔒</span>
            <span className="font-medium text-white/65">Controlled Contact Access</span>
            <span className="text-white/30">Privacy-first communication</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 3.05, ease }}
          className="pb-1 text-center"
        >
          <p className="text-[clamp(1.35rem,2.45vw,2.2rem)] font-medium tracking-[-0.055em] text-white/92">Not another marketplace.</p>
          <p className="mt-0.5 text-[clamp(1.35rem,2.45vw,2.2rem)] font-medium tracking-[-0.055em] text-white/92">Not another messaging app.</p>
          <p className="mt-2 text-sm tracking-[-0.02em] text-blue-100/60 sm:text-base">Purpose-built for the wedding industry.</p>
        </motion.div>
      </div>
    </section>
  );
}
