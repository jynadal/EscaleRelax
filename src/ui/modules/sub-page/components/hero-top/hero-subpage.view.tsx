import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroSubPageView = () => {

return (
    <Container className="relative bg-red-900 overflow-hidden w-10% h-10% mt-10 pt-40 pb-12">
        
        <div className="absolute top-0 bg-red-900 right-0 bottom-0 left-0 h-10% w-full overflow-hidden bg-fixed">
            <div className="flex flex-col h-full items-center justify-center p-10"
            >
                <Typography 
                variant="h1" 
                component="h1" 
                className="max-w-center pb-10 ">
                Services</Typography>
        
            </div>
            <div className="z-10 pt-10 ">
               
            </div>
        </div>
      
    
    </Container>
)
}