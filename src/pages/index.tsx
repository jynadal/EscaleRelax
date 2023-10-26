import Image from 'next/image'
import Head from 'next/head'
import { Seo } from '@/ui/components/seo/seo'

import { Layout } from '@/ui/components/layout/layout'
import { LandingPageContainer } from '@/ui/modules/landing-page/landing-page.container'
import { AboutView } from '@/ui/modules/landing-page/components/about/about.view'
import { Testimonial } from '@/ui/modules/landing-page/components/testimonial/testimonial.view'

export default function Home() {
  return (
  <>
    <Seo title="Escale relax | Votre esthéticienne à domicile" 
            description=""
    />

    <Layout isDisplayBreadcrumbs={false}>
     <LandingPageContainer />
     <AboutView />
     <Testimonial />
    </Layout>
  </>
  )
}
