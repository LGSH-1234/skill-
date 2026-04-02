'use client'

import { Reveal } from '@/components/motion/reveal'

export function SiteFooter() {
  return (
    <Reveal className="shell pb-8 pt-12">
      <footer className="flex flex-col gap-4 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>一个为长期沉淀 Skill 与方法论而搭建的个人展示网站。</p>
        <p>首版聚焦品牌表达、内容结构与持续更新能力。</p>
      </footer>
    </Reveal>
  )
}
