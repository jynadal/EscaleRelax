import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const EscaleView = () =>{
    return (
    <div className="bg-gray-300">
        <Container className="py-24 text-center">
            <Typography variant="h2" component="h2" className="mb-2.5">
            Escale du jour est L'Ile Maurice
            </Typography>
            <Typography variant="lead" component="h3" className="mb-5">
            Escale du jour est L'Ile Maurice
            </Typography>
            <Typography variant="caption3" theme="gray" component="p" className="mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eius.
            </Typography>
            <a href="/escale-boutique" target="_blank">
                <div className="relative bg-gray-400 rounded h-[626px]">
                    <div className="relative z-10 flex flex-col item-center justify-center gap-2 h-full text-white rounded opacity-0 bg-jadea hover:opacity-95 animate">
                        <Typography variant="h2" theme="gray" component="p" weight="regular">
                        Les Produits <br/><br/> <br/> Jadéa
                        </Typography>
                    </div>
                    <Image fill 
                        src="/assets/images/jadea.jpg"
                        alt=""
                        className="object-cover object-center rounded" 
                    />
                </div>
            </a>
        
        </Container>
    </div>
    
    )
}