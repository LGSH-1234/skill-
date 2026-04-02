export const metadata = {
  title: 'About | Skill Archive',
}

const focuses = ['AI 产品设计', 'Prompt 与工作流', '需求文档与方法论', 'Next.js 与工程实践']

export default function AboutPage() {
  return (
    <section className="shell section-space">
      <div className="soft-grid overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="eyebrow">About</p>
            <h1 className="headline-lg max-w-4xl">我把产品理解、AI 能力与工程落地，整理成一套长期可复用的表达系统。</h1>
            <p className="body-lg max-w-3xl">
              这个网站承载的不只是工具条目，而是我在产品规划、Prompt 设计、工作流搭建与开发实践中的持续沉淀。
            </p>
          </div>

          <div className="panel p-8 text-sm leading-7 text-muted">
            <p>我更关心的是：如何把复杂的需求拆清楚，把抽象的想法变成结构化输出，再把可执行的方法沉淀为可复用资产。</p>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <section className="panel p-8">
          <p className="eyebrow">Focus</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {focuses.map((focus) => (
              <span key={focus} className="rounded-full border border-line bg-white/50 px-4 py-2 text-sm text-foreground">
                {focus}
              </span>
            ))}
          </div>
        </section>

        <section className="panel p-8 text-sm leading-7 text-muted">
          <p className="eyebrow">Approach</p>
          <div className="mt-5 space-y-4">
            <p>先理解业务，再抽象结构；先定义内容，再进入实现。</p>
            <p>对于 AI 与数字产品，我更偏好用清晰的文档、流程和组件化方式去组织复杂度。</p>
            <p>这也是这个 Skill 网站的出发点：让能力可见，也让方法可被复用。</p>
          </div>
        </section>
      </div>
    </section>
  )
}
