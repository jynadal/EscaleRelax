import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const AboutView = () => {

return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
        <div className="flex items-center">
            <div className="relative w-full h-[500px]">
                <Image fill src="/assets/images/About.jpg" 
                alt="image hero"
                className="object-scale-down" />
            </div>
        </div>

        <div className="flex-col pt-10 pb-5 space-y-4">
            
                <Typography 
                variant="h3" 
                component="h5" 
                className="max-w-lg text-secondary">À propos</Typography>

                <Typography 
                variant="body-lg" 
                component="p" 
                className="max-w-xl">
                Marjorie, esthéticienne diplômée et expérimentée met son savoir-faire et son expérience au service de votre bien-être.
                    <br/><br/>
                <span className="text-gray-700">Simplifiez-vous la vie !</span>
                 <br/>
                En faisant appel à moi, c’est l’institut qui vient à vous. Nul besoin de faire garder vos enfants et fini le stress des embouteillages. Je me déplace à votre domicile, équipée de tout le matériel professionnel nécessaire, et vous propose une large gamme de soins esthétiques :
                </Typography>            

            <div className="pt-2">
                <Button baseUrl="/about"
                size="small" >Lire plus</Button>
            </div>          
        </div>

    </Container>
)
}