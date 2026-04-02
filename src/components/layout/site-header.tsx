'use client'

import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'

const links = [
  { href: '/', label: '首页' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  return (
    <Reveal className="shell pt-6 sm:pt-8" amount={0.65} distance={8}>
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/55 px-5 py-4 shadow-[0_10px_30px_rgba(17,17,17,0.035)] backdrop-blur transition duration-500 hover:border-white/90 hover:shadow-[0_16px_34px_rgba(17,17,17,0.05)]">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground transition duration-500 hover:text-accent">
          Skill Archive
        </Link>

        <nav className="flex items-center gap-5 text-sm text-muted sm:gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition duration-500 hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </Reveal>
  )
}
