import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
// import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";

interface Props {
    children: React.ReactNode;
}
export const Layout = ({children}: Props ) => {

    return (
        <>
            <Navigation />
            {/* <Breadcrumbs /> */}
                {children}
            <Footer />
        </>
    
    )
}