import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { ProductPreview } from './components/product-preview'
import { Benefits } from './components/benefits'
import { Testimonials } from './components/testimonials'
import { Pricing } from './components/pricing'
import { Faq } from './components/faq'
import { Footer } from './components/footer'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductPreview />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
