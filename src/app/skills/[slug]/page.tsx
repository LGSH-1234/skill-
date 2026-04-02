import { notFound } from 'next/navigation'
import { SkillHero } from '@/components/skills/skill-hero'
import { SkillSections } from '@/components/skills/skill-sections'
import { getAllSkills, getSkillBySlug } from '@/lib/skills'

export function generateStaticParams() {
  return getAllSkills().map((skill) => ({ slug: skill.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const skill = getSkillBySlug(slug)

  if (!skill) {
    return { title: 'Skill not found' }
  }

  return {
    title: `${skill.title} | Skill Archive`,
    description: skill.summary,
  }
}

export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const skill = getSkillBySlug(slug)

  if (!skill) {
    notFound()
  }

  return (
    <>
      <SkillHero skill={skill} />
      <SkillSections skill={skill} />
    </>
  )
}
