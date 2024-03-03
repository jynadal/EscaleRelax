import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/lib/link-type"
import Image from "next/image";

export const CallToActionView = () => {

return (
<div className="relative overflow-hidden bg-secondary-400">
    <Container className="py-20 flex space-between md:flex-col">
        <div className="relative z-10 max-w-3xl space-y-5">
            <Typography
                variant="h3" theme="white" component="h2">
                N'attendez pas pour prendre rendez-vous!            
            </Typography>
            <div>
            <Button variant="accent" baseUrl="#/" linkType={LinkTypes.INTERNAL}>
            Vous faire appeler ...
            </Button>
            </div>
        </div>
        <div>
            <Image 
                width={410}
                height={410}
                src="/assets/svg/rdv-mobile.svg"
                alt="rdv téléphonique..."
                className="absolute -top-[0.1px] -right-[20px] "
            />
            
        </div>
    </Container>

</div>
)
};