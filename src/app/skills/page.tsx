import { SkillCard } from '@/components/skills/skill-card'
import { getAllSkills } from '@/lib/skills'

export const metadata = {
  title: 'Skills | Skill Archive',
}

export default function SkillsPage() {
  const skills = getAllSkills()

  return (
    <section className="shell section-space">
      <div className="max-w-[52rem] space-y-5">
        <p className="eyebrow">All Skills</p>
        <h1 className="headline-lg max-w-4xl">把产品、Prompt、工作流与工程方法，整理成可持续更新的能力地图。</h1>
        <p className="body-lg max-w-2xl">
          当前首版接入 6 个代表性 Skill。后续会继续扩展更多内容、案例与下载资产。
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.slug} skill={skill} />
        ))}
      </div>
    </section>
  )
}
