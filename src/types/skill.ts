export type SkillReference = {
  title: string
  path: string
}

export type SkillDownload = {
  label: string
  href: string
}

export type SkillContent = {
  slug: string
  title: string
  summary: string
  category: string
  tags: string[]
  featured: boolean
  heroNote?: string
  scenarios: string[]
  howToUse: string[]
  outputs: string[]
  triggerPhrases: string[]
  references: SkillReference[]
  download?: SkillDownload
  body: string
}
