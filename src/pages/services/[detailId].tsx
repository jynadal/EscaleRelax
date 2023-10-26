import { Seo } from "@/ui/components/seo/seo";
import {Layout} from "@/ui/components/layout/layout";
//import {HeroSubPageView} from "@/ui/modules/sub-page/components/hero-top/hero-subpage.view";
import {DetailService} from "@/ui/modules/sub-page/components/service-detail/detailSection.view";
//import {DetailService2} from "@/ui/modules/sub-page/components/service-detail/detailSection2.view";
import {Container} from "@/ui/components/container/container";
import { useRouter} from "next/router"

export default function ServiceDetails() {

    const router = useRouter(); 
    const {detailId} = router.query;
    console.log(router)

    return (
    <>
        <Seo title="Les services proposé par Escale Relax"
            description="" />

        <Layout>
        <h1>Service Detail Page - {detailId} </h1>
        {/* <HeroSubPageView /> */}
        <DetailService />
        {/* <DetailService2 /> */}

        </Layout>
    </>
    )
}