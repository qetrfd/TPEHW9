import { Heart, MessageCircle, MicVocal, Music2, PenSquare, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const technicalSkills = [
  'Piano performance',
  'Singing',
  'Songwriting',
  'Music composition',
  'Storytelling',
  'Live performance',
  'Creative writing',
]

const softSkills = [
  'Creativity',
  'Authenticity',
  'Adaptability',
  'Critical thinking',
  'Emotional intelligence',
  'Communication',
  'Curiosity',
]

const groups = [
  {
    title: 'Technical Skills',
    icon: Music2,
    accent: 'from-gold/20 to-wine/10',
    items: technicalSkills,
  },
  {
    title: 'Soft Skills',
    icon: Heart,
    accent: 'from-wine/20 to-gold/10',
    items: softSkills,
  },
]

const iconMap = [Music2, MicVocal, PenSquare, Sparkles, MessageCircle, Heart]

export function SkillsSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Craft"
            title="The Tools Behind the Chaos"
            description="The work may feel wild, but it stands on very real abilities: musical skill, writing discipline, performance control, and the human qualities needed to keep growing."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {groups.map(({ title, items, icon: GroupIcon, accent }, groupIndex) => (
            <Reveal key={title} delay={groupIndex * 120}>
              <article className="rounded-[1.8rem] border border-parchment/12 bg-black/25 p-6 shadow-paper">
                <div className="flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gradient-to-br ${accent} text-gold`}>
                    <GroupIcon className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-semibold text-parchment">{title}</h3>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {items.map((item, index) => {
                    const SkillIcon = iconMap[index % iconMap.length]
                    return (
                      <div
                        key={item}
                        className="group flex min-h-16 items-center gap-3 rounded-2xl border border-parchment/10 bg-gradient-to-br from-white/5 to-white/[0.02] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:from-gold/10 hover:to-wine/10"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-ink/80 text-gold">
                          <SkillIcon className="h-4 w-4" />
                        </span>
                        <p className="text-sm font-medium leading-6 text-mist/88">{item}</p>
                      </div>
                    )
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
