'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Reveal } from '@/components/motion/reveal'
import type { SkillContent } from '@/types/skill'

type SkillSectionsProps = {
  skill: SkillContent
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="panel p-7">
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
        {items.map((item) => (
          <li key={item} className="border-b border-line/70 pb-4 last:border-b-0 last:pb-0">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function SkillSections({ skill }: SkillSectionsProps) {
  return (
    <div className="shell pb-20">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <Reveal><ListBlock title="适用场景" items={skill.scenarios} /></Reveal>
          <Reveal delay={0.04}><ListBlock title="使用方法" items={skill.howToUse} /></Reveal>
          <Reveal delay={0.08}><ListBlock title="输出结果" items={skill.outputs} /></Reveal>
          <Reveal delay={0.12}><ListBlock title="触发方式" items={skill.triggerPhrases} /></Reveal>

          {skill.download ? (
            <Reveal delay={0.16}>
              <section className="panel p-7">
                <p className="eyebrow">下载 Skill</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                  <p>如果你希望把这个 Skill 保存下来、二次整理或继续扩展，可以直接下载整个 Skill 文件夹压缩包。</p>
                  <a href={skill.download.href} download className="button-primary w-full sm:w-auto">
                    {skill.download.label}
                  </a>
                </div>
              </section>
            </Reveal>
          ) : null}
        </div>

        <Reveal>
          <section className="panel p-7 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Detailed Notes</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-snugger text-foreground">更完整的说明与背景</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted">把结构化信息看完后，这一部分更适合深入理解 Skill 的方法、边界与价值。</p>
            </div>
            <div className="prose-skill mt-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{skill.body}</ReactMarkdown>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  )
}
