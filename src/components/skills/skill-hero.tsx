'use client'

import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'
import type { SkillContent } from '@/types/skill'

type SkillHeroProps = {
  skill: SkillContent
}

export function SkillHero({ skill }: SkillHeroProps) {
  return (
    <section className="shell section-space pb-10">
      <div className="soft-grid relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="hero-glow hero-glow-primary left-[-12%] top-[-14%] h-[15rem] w-[15rem] sm:h-[21rem] sm:w-[21rem]" />
        <div className="hero-glow hero-glow-secondary bottom-[-14%] right-[-8%] h-[13rem] w-[13rem] sm:h-[18rem] sm:w-[18rem]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <Reveal>
              <p className="eyebrow">{skill.category}</p>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={0.08}>
                <h1 className="headline-lg max-w-4xl">{skill.title}</h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="body-lg max-w-3xl">{skill.summary}</p>
              </Reveal>
            </div>
            {skill.heroNote ? (
              <Reveal delay={0.2}>
                <p className="max-w-2xl text-sm leading-7 text-foreground">{skill.heroNote}</p>
              </Reveal>
            ) : null}
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line bg-white/60 px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} distance={18}>
            <div className="panel p-7">
              <p className="eyebrow">Quick access</p>
              <div className="mt-5 flex flex-col gap-3">
                <Link href="/skills" className="button-secondary">
                  返回 Skill 列表
                </Link>
                {skill.download ? (
                  <a href={skill.download.href} className="button-primary">
                    {skill.download.label}
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
