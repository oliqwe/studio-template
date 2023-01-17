import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Index } from '@/components/Hero'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import Work from '@/components/Work'
import { Contact } from '@/components/Contact'
import TestimonialsCeo from '@/components/TestimonialsCeo'
import People from '@/components/People'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main className="bg-gray-50">
        <Index />
        <Work />
        <SecondaryFeatures />
        <TestimonialsCeo />
        <People />
        {/*<PrimaryFeatures />*/}
        <Contact />
        {/*<CallToAction />*/}
        {/*<Testimonials />*/}
        {/*<Pricing />*/}
        {/*<Faqs />*/}
      </main>
      <Footer />
    </>
  )
}
