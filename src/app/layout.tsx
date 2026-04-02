import type { ReactNode } from 'react'
import { Manrope, Noto_Sans_SC } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const notoSansSc = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Skill Archive',
  description: '个人 Skill 展示网站，聚焦 AI、产品、Prompt 与工程实践。',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${manrope.variable} ${notoSansSc.variable}`}>
        <div className="relative min-h-screen bg-background">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
