//Fil d'ariane
import { useRouter } from "next/router";
import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import {RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Container } from "@/ui/components/container/container";


export const Breadcrumbs = () => {

const router = useRouter();
const asPath = router.asPath;
const segments = asPath.split("/");
const lastSegment = segments[segments.length-1];
segments[0]="accueil";

const view = segments.map((path) => (
    <div key={uuidv4()}>
        <Typography
            variant="caption3"
            component="span"
            className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
            )}>
            {path !== "accueil" ? ( path.replace(/-/g," ") ):  <RiHome3Line className="inline -mt-1"/> }
        </Typography>
        <Typography variant="caption2" component="span" className="ml-2 text-gray-600">
        /
        </Typography>
    </div>
));

return (
<Container className="flex items-center gap-2 py-7">{view}</Container>
)
};