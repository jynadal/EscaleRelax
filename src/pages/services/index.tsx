import { Seo } from "@/ui/components/seo/seo";
import {Layout} from "@/ui/components/layout/layout";
import {HeroSubPageView} from "@/ui/modules/sub-page/components/hero-top/hero-subpage.view";
import {CardsService} from "@/ui/modules/sub-page/components/services-section/servicesSection.view";
import {Container} from "@/ui/components/container/container";

export default function Services() {
    return (
    <>
        <Seo title="Les services proposé par Escale Relax"
            description="" />

        <Layout>
        {/* <HeroSubPageView /> */}
        <CardsService />
        </Layout>
    </>
    )
}