import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import type { SkillContent } from '@/types/skill'

const skillsDirectory = path.join(process.cwd(), 'content/skills/zh')

type SkillFrontmatter = Omit<SkillContent, 'slug' | 'body'>

function parseSkillFile(fileName: string): SkillContent {
  const slug = fileName.replace(/\.md$/, '')
  const fullPath = path.join(skillsDirectory, fileName)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const frontmatter = data as Partial<SkillFrontmatter>

  return {
    slug,
    title: frontmatter.title ?? slug,
    summary: frontmatter.summary ?? '',
    category: frontmatter.category ?? '未分类',
    tags: frontmatter.tags ?? [],
    featured: frontmatter.featured ?? false,
    heroNote: frontmatter.heroNote,
    scenarios: frontmatter.scenarios ?? [],
    howToUse: frontmatter.howToUse ?? [],
    outputs: frontmatter.outputs ?? [],
    triggerPhrases: frontmatter.triggerPhrases ?? [],
    references: frontmatter.references ?? [],
    download: frontmatter.download,
    body: content.trim(),
  }
}

export function getAllSkills(): SkillContent[] {
  const files = fs.readdirSync(skillsDirectory).filter((file) => file.endsWith('.md'))

  return files
    .map(parseSkillFile)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title, 'zh-CN'))
}

export function getFeaturedSkills(limit?: number): SkillContent[] {
  const featured = getAllSkills().filter((skill) => skill.featured)
  return typeof limit === 'number' ? featured.slice(0, limit) : featured
}

export function getSkillBySlug(slug: string): SkillContent | undefined {
  const filePath = path.join(skillsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return undefined
  }

  return parseSkillFile(`${slug}.md`)
}

export function getSkillCategories(): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>()

  for (const skill of getAllSkills()) {
    counts.set(skill.category, (counts.get(skill.category) ?? 0) + 1)
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh-CN'))
}
