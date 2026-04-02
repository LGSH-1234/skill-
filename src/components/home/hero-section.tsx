'use client'

import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'

export function HeroSection() {
  return (
    <section className="shell section-space">
      <div className="soft-grid relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="hero-glow hero-glow-primary left-[-10%] top-[-8%] h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem]" />
        <div className="hero-glow hero-glow-secondary bottom-[-12%] right-[-6%] h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

        <div className="relative grid gap-12 lg:grid-cols-[1.28fr_0.92fr] lg:items-start">
          <div className="space-y-9">
            <Reveal>
              <p className="eyebrow">AI · Product · Workflow · Engineering</p>
            </Reveal>
            <div className="max-w-5xl space-y-7">
              <Reveal delay={0.1}>
                <h1 className="headline-lg max-w-4xl">
                  每一种分类，都是方法、判断与表达的沉淀。
                </h1>
              </Reveal>
              <Reveal delay={0.2} distance={10}>
                <p className="body-lg max-w-2xl">
                  这里收纳的不只是工具说明，而是我在需求梳理、Prompt 设计、工作流搭建与工程实践中的方法沉淀。
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.28} distance={8}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/skills" className="button-primary">
                  浏览全部 Skill
                </Link>
                <Link href="/about" className="button-secondary">
                  了解我
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22} distance={10}>
            <div className="panel relative overflow-hidden p-8 lg:mt-1">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/16 via-transparent to-white/8" />
              <div className="relative">
                <p className="eyebrow">What this site carries</p>
                <div className="mt-6 space-y-6 text-[0.92rem] leading-8 text-muted">
                  <p>从产品方案到工作流配置，从 Prompt 到前端工程，每一项 Skill 都对应真实问题与实际交付。</p>
                  <p>它更像一个不断生长的作品集：既展示能力，也沉淀方法，并为后续扩展模板、案例与双语内容留出空间。</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
