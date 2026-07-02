import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { ProfileSection } from './components/ProfileSection'
import { WhySection } from './components/WhySection'
import { TimelineSection } from './components/TimelineSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { DreamJobSection } from './components/DreamJobSection'
import { DifferentSection } from './components/DifferentSection'
import { LessonsSection } from './components/LessonsSection'
import { FinalReflection } from './components/FinalReflection'
import { CursorGlow } from './components/CursorGlow'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  useEffect(() => {
    const updateScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <CursorGlow />
      <Layout>
        <Hero />
        <ProfileSection />
        <WhySection />
        <TimelineSection />
        <EducationSection />
        <SkillsSection />
        <DreamJobSection />
        <DifferentSection />
        <LessonsSection />
        <FinalReflection />
        <MusicPlayer />
      </Layout>
    </>
  )
}

export default App
