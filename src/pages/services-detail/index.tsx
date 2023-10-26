import { Seo } from "@/ui/components/seo/seo";
import {Layout} from "@/ui/components/layout/layout";
//import {HeroSubPageView} from "@/ui/modules/sub-page/components/hero-top/hero-subpage.view";
import {DetailService} from "@/ui/modules/sub-page/components/service-detail/detailSection.view";
//import {DetailService2} from "@/ui/modules/sub-page/components/service-detail/detailSection2.view";
import {Container} from "@/ui/components/container/container";

export default function Detail() {
    return (
    <>
        <Seo title="Les services proposé par Escale Relax"
            description="" />

        <Layout>
        {/* <HeroSubPageView /> */}
        <DetailService />
        {/* <DetailService2 /> */}

        </Layout>
    </>
    )
}