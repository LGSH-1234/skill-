import Link from 'next/link'
import { CategoryOverview } from '@/components/home/category-overview'
import { HeroSection } from '@/components/home/hero-section'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { SkillCard } from '@/components/skills/skill-card'
import { getFeaturedSkills, getSkillCategories } from '@/lib/skills'

export default function HomePage() {
  const featuredSkills = getFeaturedSkills(3)
  const categories = getSkillCategories()

  return (
    <>
      <HeroSection />
      <CategoryOverview categories={categories} />

      <section className="shell section-space pt-14">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Skills</p>
            <h2 className="headline-md mt-3">先看几项最能代表我工作方式的 Skill。</h2>
          </div>
          <Link href="/skills" className="text-sm font-medium text-foreground transition hover:text-accent">
            查看全部 Skill
          </Link>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredSkills.map((skill) => (
            <StaggerItem key={skill.slug}>
              <SkillCard skill={skill} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="shell pb-24 pt-6">
        <Reveal>
          <div className="panel grid gap-10 p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-14">
            <div className="space-y-4">
              <p className="eyebrow">Method & Output</p>
              <h2 className="headline-md">每一个 Skill，都连接着一种方法、一段流程，或一个可复用的交付结果。</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-muted">
              <p>我希望它们既能作为对外展示的能力切片，也能继续被整理成模板、工作流、提示词和工程实践资产。</p>
              <p>网站首版先把结构、内容与气质建立起来，再逐步扩展下载、案例、双语与更完整的知识体系。</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
