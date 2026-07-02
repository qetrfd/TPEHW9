import { BookOpen, Compass, GraduationCap, Lightbulb, PenTool, Users } from 'lucide-react'
import moon from '../../assets/moon.png'
import paperDark from '../../assets/paper_dark.png'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const educationItems = [
  { title: 'Self-learning', icon: GraduationCap, text: 'Building artistic language through independent study, listening, and practice.' },
  { title: 'Performance experience', icon: Compass, text: 'Learning by facing real audiences, real rooms, and real stage pressure.' },
  { title: 'Writing', icon: PenTool, text: 'Refining ideas through lyrics, concepts, and narrative voice.' },
  { title: 'Collaboration', icon: Users, text: 'Growing through projects, ensembles, and shared creative exchange.' },
  { title: 'Experimentation', icon: Lightbulb, text: 'Testing styles, moods, and structures until something becomes truly personal.' },
  { title: 'Constant creative practice', icon: BookOpen, text: 'Treating art as an ongoing process rather than one finished identity.' },
]

export function EducationSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute right-[-3rem] top-16 h-44 w-44 opacity-35 sm:h-60 sm:w-60"
        style={{ backgroundImage: `url(${moon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${paperDark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Learning Path"
            title="A Non-Traditional Education"
            description="His growth reads less like a formal degree path and more like a workshop built in public: self-learning, practice, collaboration, and experimentation over time."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {educationItems.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="group h-full rounded-[1.35rem] border border-parchment/12 bg-black/25 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/35">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:scale-105 group-hover:bg-gold/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-parchment">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist/76">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
