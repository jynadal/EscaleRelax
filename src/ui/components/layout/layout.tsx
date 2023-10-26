import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";

interface Props {
    children: React.ReactNode;
    isDisplayBreadcrumbs?: boolean;
}
export const Layout = ({children, isDisplayBreadcrumbs = true}: Props ) => {

    return (
        <>
            <Navigation />
            {isDisplayBreadcrumbs && <Breadcrumbs />}
                {children}
            <Footer />
        </>
    
    )
}