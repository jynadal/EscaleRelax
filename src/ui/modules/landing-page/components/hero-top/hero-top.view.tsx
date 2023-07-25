import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroTopView = () => {

return (
    <Container className="relative  overflow-hidden bg-cover bg-no-repeat w-90% h-full mt-10 pt-40 pb-52">
      <Image 
        fill
        src="/assets/images/HeroPict.jpg"
        alt="image hero"
        // width={1800}
        // height={700} 
        className="object-cover object-center       
        z-0"
        />
        
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex flex-col h-full items-center justify-center p-10"
            //flex flex-col item-center justify-center h-full text-center text-white gap-2 max-w-2xl space-y-5 z-10"
            >
                <Typography 
                variant="h1" 
                component="h1" 
                className="max-w-center pb-10 ">
                Régénérer, Revitaliser</Typography>
                <Typography 
                variant="h4" 
                component="h4" 
                className=" pb-10">
                MASSOTHÉRAPIE RÉGÉNÉRATRICE</Typography>
                 <Button 
                //baseUrl="#services" 
                size="small" >Nos Services</Button>
            </div>
            <div className="z-10 pt-10 ">
               
            </div>
        </div>
      
    
    </Container>
)
}