'use client'

import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'

type CategoryOverviewProps = {
  categories: Array<{ name: string; count: number }>
}

export function CategoryOverview({ categories }: CategoryOverviewProps) {
  return (
    <section className="shell pb-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="eyebrow">Category Map</p>
          <h2 className="headline-md">以更清楚的分类，呈现我的能力轮廓。</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted">
          每一种分类，都是方法、判断与表达的沉淀。
        </p>
      </div>

      <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <StaggerItem key={category.name}>
            <div className="panel p-6 transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_18px_48px_rgba(17,17,17,0.08)]">
              <p className="text-sm text-muted">{category.count} 项</p>
              <h3 className="mt-3 text-lg font-medium text-foreground">{category.name}</h3>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
