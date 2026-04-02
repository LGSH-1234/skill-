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
          先让浏览路径足够轻，再让内容理解足够深。每一类 Skill 都围绕真实问题、具体方法与持续迭代展开。
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <div key={category.name} className="panel p-6 transition duration-200 hover:-translate-y-1">
            <p className="text-sm text-muted">{category.count} 项</p>
            <h3 className="mt-3 text-lg font-medium text-foreground">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
