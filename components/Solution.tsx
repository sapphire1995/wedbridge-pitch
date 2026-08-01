'use client';

import {
  CalendarDays,
  GitBranch,
  Search,
  UsersRound,
  Waypoints,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    number: '01',
    title: 'Discover',
    description: 'Find trusted professionals by role, location, availability and portfolio.',
    icons: [Search, UsersRound],
  },
  {
    number: '02',
    title: 'Collaborate',
    description:
      'Invite team members, communicate inside project chats, assign work and coordinate every stage together.',
    icons: [Waypoints, GitBranch],
  },
  {
    number: '03',
    title: 'Manage',
    description:
      'Projects, schedules, invitations and team availability stay automatically synchronized.',
    icons: [CalendarDays, GitBranch],
  },
] as const;

export default function Solution() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#050505] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/4 h-[42rem] w-[42rem] rounded-full bg-blue-500/12 blur-[150px]"
      />

      <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 text-[10px] font-medium tracking-[0.18em] text-blue-200/55">
              03 / THE SOLUTION
            </p>
            <h2 className="text-balance text-[clamp(2.6rem,5.3vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              One platform. Every wedding project.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-sm leading-relaxed tracking-[-0.015em] text-white/48 sm:text-base lg:pb-1"
          >
            WedBridge brings everything into one place—finding professionals, building teams, managing projects, and delivering every wedding together.
          </motion.p>
        </div>

        <div className="my-auto flex w-full flex-col items-stretch justify-center py-8 sm:py-10 lg:flex-row lg:items-center lg:py-14">
          {features.map((feature, index) => (
            <div key={feature.number} className="flex min-w-0 flex-1 flex-col lg:flex-row lg:items-center">
              <motion.article
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.75,
                  delay: 0.24 + index * 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group flex min-h-[112px] flex-1 flex-row items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-blue-200/30 hover:bg-white/[0.055] hover:shadow-[0_0_38px_rgba(59,130,246,0.1)] sm:min-h-[132px] sm:p-6 lg:min-h-[230px] lg:flex-col lg:items-start lg:justify-between lg:gap-8 lg:rounded-3xl lg:p-8"
              >
                <div className="flex shrink-0 items-center gap-2.5 lg:w-full lg:justify-between">
                  <span className="text-[10px] font-medium tracking-[0.16em] text-white/40">
                    {feature.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-blue-100/65">
                    {feature.icons.map((Icon, iconIndex) => (
                      <Icon
                        key={iconIndex}
                        aria-hidden="true"
                        strokeWidth={1.3}
                        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.045em] text-white sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[18rem] text-xs leading-relaxed tracking-[-0.01em] text-white/48 sm:text-sm lg:mt-3">
                    {feature.description}
                  </p>
                </div>
              </motion.article>

              {index < features.length - 1 && (
                <div className="relative mx-auto h-5 w-px bg-white/10 lg:mx-0 lg:h-px lg:w-12 xl:w-20">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.66 + index * 0.16,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 origin-top bg-blue-200/55 lg:hidden"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.66 + index * 0.16,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 hidden origin-left bg-blue-200/55 lg:block"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 pb-1 sm:gap-6"
        >
          <span className="h-px w-8 bg-blue-100/35 sm:w-16" />
          <p className="whitespace-nowrap text-center text-[clamp(1.1rem,2vw,1.75rem)] font-medium tracking-[-0.045em] text-white/82">
            One workspace for every wedding project.
          </p>
          <span className="h-px w-8 bg-blue-100/35 sm:w-16" />
        </motion.div>
      </div>
    </section>
  );
}
