import Image from 'next/image'
import Head from 'next/head'
import { Seo } from '@/ui/components/seo/seo'

// import { Layout } from '@/ui/components/layout/layout'
// import { LandingPageContainer } from '@/ui/modules/landing-page/landing-page.container'
// import { AboutView } from '@/ui/modules/landing-page/components/about/about.view'
//import { ServicesCarousel } from '@/ui/modules/landing-page/components/carousel/carousel.view'
// import { Testimonial } from '@/ui/modules/landing-page/components/testimonial/testimonial.view'
// import { ServicesLayout1Views } from '@/ui/modules/landing-page/components/services/services-layout1.view'
// import { EscaleView } from '@/ui/modules/landing-page/components/marketing/escale.view'
import { Container } from '@/ui/components/container/container'

export default function Home() {
  return (
  <>
    <Seo title="Escale relax | Votre esthéticienne à domicile" 
            description=""
    />
    <Container>
    <h1>
        Vous êtes hors ligne
    </h1>
    
    </Container>

    {/* <Layout isDisplayBreadcrumbs={false}>
     <LandingPageContainer /> */}
     {/* <AboutView />
     <ServicesCarousel />
     <ServicesLayout1Views />
     <EscaleView />
     <Testimonial /> */}
    {/* </Layout> */}
  </>
  )
}
