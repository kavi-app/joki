import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrackOrder from '@/components/TrackOrder'
import CTASection from '@/components/CTASection'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrackOrder />
        <CTASection />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
