import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="shell section-space">
      <div className="soft-grid overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.28fr_0.92fr] lg:items-start">
          <div className="space-y-9">
            <p className="eyebrow">AI · Product · Workflow · Engineering</p>
            <div className="max-w-5xl space-y-7">
              <h1 className="headline-xl max-w-4xl">
                用一个持续更新的 Skill Archive，呈现我对 AI、产品与工程的长期理解。
              </h1>
              <p className="body-lg max-w-2xl">
                这里收纳的不只是工具说明，而是我在需求梳理、Prompt 设计、工作流搭建与工程实践中的方法沉淀。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/skills" className="button-primary">
                浏览全部 Skill
              </Link>
              <Link href="/about" className="button-secondary">
                了解我
              </Link>
            </div>
          </div>

          <div className="panel p-8 lg:mt-1">
            <p className="eyebrow">What this site carries</p>
            <div className="mt-6 space-y-6 text-[0.92rem] leading-8 text-muted">
              <p>从产品方案到工作流配置，从 Prompt 到前端工程，每一项 Skill 都对应真实问题与实际交付。</p>
              <p>它更像一个不断生长的作品集：既展示能力，也沉淀方法，并为后续扩展模板、案例与双语内容留出空间。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
