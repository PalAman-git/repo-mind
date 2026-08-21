'use client'

import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { ProductPreview } from './components/product-preview'
import { Benefits } from './components/benefits'
import { Testimonials } from './components/testimonials'
import { Pricing } from './components/pricing'
import { Faq } from './components/faq'
import { Footer } from './components/footer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { useRepoIndexMutation } from './hooks/useRepoIndexMutation'
import { useState } from 'react'

export default function LandingPage() {
  const [repoUrl,setRepoUrl] = useState('')

  const { mutate,isPending } = useRepoIndexMutation();

  const handleAnalyze = () => {
    if(!repoUrl.trim()) return;

    mutate(repoUrl);
    setRepoUrl('');
  }

  return (
    // <div className="relative min-h-screen bg-background">
    //   <Navbar />
    //   <main>
    //     <Hero />
    //     <Features />
    //     <ProductPreview />
    //     <Benefits />
    //     <Testimonials />
    //     <Pricing />
    //     <Faq />
    //   </main>
    //   <Footer />
    // </div>


      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <div className="p-4 md:p-12">

            <h1 className="mb-8 text-center text-5xl font-black tracking-tight md:text-6xl">
              Enter your Repo Url Here
            </h1>

            <Field
              orientation="horizontal"
              className="rounded-2xl border bg-background p-2 shadow-sm"
            >
              <Input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/facebook"
                className="h-14 border-0 bg-transparent px-4 text-base shadow-none focus-visible:ring-0"
              />

              <Button
                size="lg"
                onClick={handleAnalyze}
                disabled={isPending}
                className="h-14 rounded-lg px-8 bg-amber-50 text-gray-800 hover:bg-amber-50 cursor-pointer"
                variant={'secondary'}
              >
                {isPending ? 'Analyzing...' : 'Analyze'}
              </Button>
            </Field>

          </div>
        </div>
      </div>
  
  )
}
