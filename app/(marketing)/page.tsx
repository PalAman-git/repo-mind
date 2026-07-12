import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Features } from '@/components/site/features'
import { ProductPreview } from '@/components/site/product-preview'
import { Benefits } from '@/components/site/benefits'
import { Testimonials } from '@/components/site/testimonials'
import { Pricing } from '@/components/site/pricing'
import { Faq } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'

export default function Page() {
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
