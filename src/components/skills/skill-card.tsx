import Link from 'next/link'
import type { SkillContent } from '@/types/skill'

type SkillCardProps = {
  skill: SkillContent
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="panel flex h-full flex-col justify-between p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,17,17,0.08)]">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span>{skill.category}</span>
          {skill.featured ? <span className="rounded-full bg-accentSoft px-2 py-1 text-foreground">精选</span> : null}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-snugger text-foreground">{skill.title}</h3>
          <p className="text-sm leading-7 text-muted">{skill.summary}</p>
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {skill.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-white/50 px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/skills/${skill.slug}`} className="text-sm font-medium text-foreground">
          查看详情
        </Link>
      </div>
    </article>
  )
}
