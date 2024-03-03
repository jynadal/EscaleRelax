//import { HeroTopView } from "./components/hero-top/hero-top.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"
import { AboutView } from './components/about/about.view'
import ServicesCarousel  from './components/carousel/carousel.view'
import { Testimonial } from './components/testimonial/testimonial.view'
import { ServicesLayout1Views } from './components/services/services-layout1.view'
import { EscaleView } from './components/marketing/escale.view'
import { HightlightListView } from "./components/hightlight-list/hightlight-list.view"


export const LandingPageView = () => {

return (
<>
    <HeroTopView />
    {/* <LandingPageContainer /> */}
     <AboutView />
     <ServicesCarousel />
     {/* <ServicesLayout1Views /> */}
     <EscaleView />
     {/* <HightlightListView /> */}
     <Testimonial />
</>

)
}