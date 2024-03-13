import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HightlightListView = () => {
    return (
    <Container className="py-20 space-y-10">
    <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400" >
        <Image fill src={"/assets/images/1.jpeg"} alt=""
        />
        </div>
        <div className="max-w-md space-y-7">
            <Typography  
                    variant="h3"
                    component="h2">
                    Soins Esthétiques à domicile
                </Typography>
                <div className="space-y-3">
                    <ListPoint>Lonsectetur adipisicing</ListPoint>
                    <ListPoint>Ex harum ipsam</ListPoint>
                    <ListPoint>Ipsumorem ipsum</ListPoint>
                    <ListPoint>Dolor sit amet </ListPoint>
                </div>

                <Typography  
                    variant="body-lg"
                    component="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex harum ipsam atque maxime, at enim!
                </Typography>

                <div className="relative">
                    <Button baseUrl="/contact" icon={{icon:RiArrowRightLine }}
                    iconPosition="right">
                    Réservez                
                    </Button>
                </div>
        </div>
    </div>

    <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400" >
        <Image fill src={"/assets/images/2.webp"} alt=""
        />
        </div>
        <div className="max-w-md space-y-7">
            <Typography  
                    variant="h3"
                    component="h2">
                    Massage et détente à domicile
                </Typography>
                <div className="space-y-3">
                    <ListPoint>Lonsectetur adipisicing</ListPoint>
                    <ListPoint>Ex harum ipsam</ListPoint>
                    <ListPoint>Ipsumorem ipsum</ListPoint>
                    <ListPoint>Dolor sit amet </ListPoint>
                </div>

                <Typography  
                    variant="body-lg"
                    component="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex harum ipsam atque maxime, at enim!
                </Typography>

                <div className="relative">
                    <Button baseUrl="/contact" icon={{icon:RiArrowRightLine }}
                    iconPosition="right">
                    Réservez                
                    </Button>
                </div>
        </div>
    </div>

      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400" >
        <Image fill src={"/assets/images/3.webp"} alt=""
        />
        </div>
        <div className="max-w-md space-y-7">
            <Typography  
                    variant="h3"
                    component="h2">
                    Epilations à domicile
                </Typography>
                <div className="space-y-3">
                    <ListPoint>Lonsectetur adipisicing</ListPoint>
                    <ListPoint>Ex harum ipsam</ListPoint>
                    <ListPoint>Ipsumorem ipsum</ListPoint>
                    <ListPoint>Dolor sit amet </ListPoint>
                </div>

                <Typography  
                    variant="body-lg"
                    component="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex harum ipsam atque maxime, at enim!
                </Typography>

                <div className="relative">
                    <Button baseUrl="/contact" icon={{icon:RiArrowRightLine }}
                    iconPosition="right">
                    Réservez                
                    </Button>
                </div>
        </div>
    </div>
    
    </Container>
    
    )
}

interface Props {
    children: React.ReactNode;
}

const ListPoint = ({children}: Props)=> {

    return (
     <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine
                        size={24}
                        className="mt-1 text-secondary"
                    />
                    <Typography  
                        variant="body-lg"
                        component="span">
                        {children}
                    </Typography>

                </div>

    )
}