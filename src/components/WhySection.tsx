import notebook from '../../assets/notebook.png'
import typewriter from '../../assets/typewriter.png'
import paperTexture from '../../assets/paper_texture.png'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function WhySection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Student Perspective"
            title="Why I Chose Him"
            description="A role model matters most when their work feels truthful, disciplined, and unmistakably their own."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#8b6a3c]/30 bg-[#f0debf] p-7 text-ink shadow-paper sm:p-10">
            <div className="absolute inset-0 bg-[#f0debf]/96" />
            <div
              className="pointer-events-none absolute inset-0 opacity-24"
              style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div
              className="pointer-events-none absolute -right-8 -top-6 h-32 w-32 rotate-6 opacity-20 sm:h-40 sm:w-40"
              style={{ backgroundImage: `url(${notebook})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-40 opacity-14 sm:h-40 sm:w-56"
              style={{ backgroundImage: `url(${typewriter})`, backgroundSize: 'contain', backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat' }}
            />
            <div className="relative max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-wine">Pinned note</p>
              <blockquote className="mt-5 text-xl font-medium leading-9 text-[#4f1a21] sm:text-2xl sm:leading-10">
                “I chose Will Wood because he represents the idea of creating without becoming someone else. His career shows that being different can become a strength when it is transformed into discipline, art, and identity.”
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
