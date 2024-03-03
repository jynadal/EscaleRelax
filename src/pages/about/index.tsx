import { Seo } from "@/ui/components/seo/seo";
import {Layout} from "@/ui/components/layout/layout";
import {AboutView} from "@/ui/modules/landing-page/components/about/about.view"
import { HightlightListView } from "@/ui/modules/landing-page/components/hightlight-list/hightlight-list.view";
import { CallToActionView } from "@/ui/design-system/call-to-action.view.tsx/call-to-action.views";
import {LocationAnimation } from "@/ui/components/location-animation/locationAnimation";




export default function Apropos() {
    return (
    <>
        <Seo title=""
        description="" />

        <Layout>
        <AboutView />
        <CallToActionView />
        <HightlightListView />
        <LocationAnimation />

        
        </Layout>

    </>
    )
}