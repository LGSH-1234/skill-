import Link from 'next/link'
import type { SkillContent } from '@/types/skill'

type SkillHeroProps = {
  skill: SkillContent
}

export function SkillHero({ skill }: SkillHeroProps) {
  return (
    <section className="shell section-space pb-10">
      <div className="soft-grid overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">{skill.category}</p>
            <div className="space-y-5">
              <h1 className="headline-lg max-w-4xl">{skill.title}</h1>
              <p className="body-lg max-w-3xl">{skill.summary}</p>
            </div>
            {skill.heroNote ? <p className="max-w-2xl text-sm leading-7 text-foreground">{skill.heroNote}</p> : null}
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-white/60 px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>

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
        </div>
      </div>
    </section>
  )
}
