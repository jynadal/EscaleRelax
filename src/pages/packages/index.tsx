import { Seo } from "@/ui/components/seo/seo";
import {Layout} from "@/ui/components/layout/layout";
import {HeroSubPageView} from "@/ui/modules/sub-page/components/hero-top/hero-subpage.view";
import {PackagesService} from "@/ui/modules/sub-page/components/packages-section/packagesSection.view";
import {Container} from "@/ui/components/container/container";

export default function Services() {
    return (
    <>
        <Seo title="Les services proposé par Escale Relax"
            description="" />

        <Layout>
        {/* <HeroSubPageView /> */}
        <PackagesService />
        </Layout>
    </>
    )
}