import { Typography } from "@/ui/design-system/typography/typography";

import { servicesImages } from "./servicesData";
import { Button } from "@/ui/design-system/button/button";
import left from "../../../../../../public/assets/svg/left.svg";
import right from "../../../../../../public/assets/svg/right.svg";
import Image from "next/image";

type Props = {
    activeImage: any,
    clickNext: any,
    clickPrev: any,
};

const Description = ({activeImage, clickNext, clickPrev}: Props) => {
    
    return (
        <div className="grid place-items-start w-full relative md:rounded-tr-3xl md:rounded-br-3xl bg-primary-400">
            {/* <div className="uppercase text-xl absolute center underline-offset-4 underline">
            Titre 1
            </div> */}
            <Typography
                variant="h2"
                component="h3"
                className="uppercase text-sm absolute center top mb-10"
            >
           Nos services
            </Typography>

             {/* <Typography
                variant="h2"
                component="h3"
                className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline"
            >
           Nos services
            </Typography> */}

            {servicesImages.map((elem, idx) => (

            <div     key={idx}  
                className={`${
                    idx === activeImage
                        ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
                        : "hidden"
                    }`}>
                    {/* CSS to modify */}
              
              <Typography
                variant="h3"
                component="h3"
                className="py-16"
            >
             {elem.title}
            </Typography>

            <Typography
                variant="body-lg"
                component="p"
                className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600"
            >

            {" "}
           {elem.desc}
            </Typography>

            {/* <Typography
                variant="h3"
                component="h3"
                className=""
            >
            Service1 1 
            </Typography> */}

            <Button>
                Savoir plus
            </Button>

                <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
                    <div
                    className="absolute bottom-2 right-10 cursor-pointer"
                    onClick={clickPrev}>
                    <Image src={left as string } alt="" width={30} height={30} />
                    </div>

                    <div
                    className="absolute bottom-2 right-2 cursor-pointer"
                    onClick={clickNext}>
                    <Image src={right as string } alt="" width={30} height={30} className=""/>
                    </div>
                </div>

            
            </div>

            
            ))}

            

        </div>

    )
}

export default Description;