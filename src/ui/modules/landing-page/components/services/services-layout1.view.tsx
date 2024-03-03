import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const ServicesLayout1Views = () => {
    return (
            <Container className="flex justify-between">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
            <Typography
                variant="h2"
                component="h2"
            >Services             
            </Typography>
              <Typography
                variant="body-lg"
                component="p"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, id?            
            </Typography>
            <Button baseUrl="/services/épilation" linkType={LinkTypes.internal}>Savoir plus</Button>
            </div>
            <div className="relative w-[500px] h-[500px]">
                <Image fill src={"/assets/images/1.jpeg"} alt="photo service" className="rounded"/>            
            </div>
        </Container>
    
    )
}