import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const FeaturedView = () => {

return (
    <Container className="relative pt-16 pb-60">
        <Image src="/assets/images/About.jpg"
        alt="image hero"
        width={600}
        height={400} 
        className="absolute top-0 right-0 z-0"/>

        <div className="w-full max-w-2xl left-0 space-y-5 z-10">
            <Typography 
            variant="h3" 
            component="h5" 
            className="max-w-lg">À propos</Typography>

            <Typography 
            variant="body-lg" 
            component="p" 
            className="max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex impedit, 
            officiis hic suscipit molestiae corporis laboriosam numquam odit
             consequuntur iusto.
             </Typography>
        </div>
        <div className="pt-10">
            <Button 
            //baseUrl="#about"
            size="small" >Lire plus</Button>
        </div>
    
    </Container>
)
}