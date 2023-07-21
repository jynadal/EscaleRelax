import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroTopView = () => {

return (
    <Container className="relative pt-40 pb-52">
        
          {/* top-0 left-0  */}
        <div className="relative flex flex-col item-center justify-center h-full text-center text-white gap-2 max-w-2xl space-y-5 z-10">
            <Typography 
            variant="h1" 
            component="h1" 
            className="max-w-center">
            Régénérer, Revitaliser</Typography>
            <Typography 
            variant="h4" 
            component="h4" 
            className="">
            MASSOTHÉRAPIE RÉGÉNÉRATRICE</Typography>
        </div>
        <div className="z-10 pt-10 ">
            <Button 
            //baseUrl="#services" 
            size="small" >Nos Services</Button>
        </div>
        <Image 
        fill
        src="/assets/images/HeroPict.jpg"
        alt="image hero"
        // width={1800}
        // height={700} 
        className="object-cover object-center       
        z-0"
        />
    
    </Container>
)
}