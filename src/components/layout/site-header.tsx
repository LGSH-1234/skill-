import Link from 'next/link'

const links = [
  { href: '/', label: '首页' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  return (
    <header className="shell pt-6 sm:pt-8">
      <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/55 px-5 py-4 shadow-[0_10px_30px_rgba(17,17,17,0.04)] backdrop-blur">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
          Skill Archive
        </Link>

        <nav className="flex items-center gap-5 text-sm text-muted sm:gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
