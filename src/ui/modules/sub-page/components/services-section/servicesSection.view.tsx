import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
//import stars from "/assets/images/svg/stars.svg"
import { v4 as uuidv4} from "uuid"


interface cardListInterface {
   image?:string,
    service?: string,
    time?:number,
    price?:number,
    link?:string,
}

const datacards: cardListInterface[] = [
    {
       image:"/assets/images/1.jpeg",
        time: 45,
        price:75,
        service:"Epilations",
        link:"/services/épilation"
    },
     {
       image:"/assets/images/2.webp",
        time: 45,
        price:80,
        service:"Soins du Visage",
        link:"/services/soins_visage"
    },
     {
       image:"/assets/images/3.webp",
        time: 45,
        price:75,
        service:"Modelage Corps",
        link:"/services/modelage_corps"
    },
        {
       image:"/assets/images/4.webp",
        time: 45,
        price:75,
        service:"Eskalia",
        link:"/services/eskalia"
    },
     {
       image:"/assets/images/5.webp",
        time: 45,
        price:80,
        service:"Soins du Corps",
        link:"/services/soins_corps"
    },
     {
       image:"/assets/images/6.webp",
        time: 45,
        price:75,
        service:"Beauté des mains et des pieds",
        link:"/services/beaute_mains_pieds"
    },
    
]

export const CardsService = ({}) => {

    const cardList = datacards.map((card) => (
      <div key={uuidv4()}  className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
            
             <div>
              <Image src={card.image}
               width={300}
               height={216}
               alt={card.service}
                />
            
              <div className="flex flex-col item-center text-center gap-0.5 text-goldBg-300">
                   <Typography
              component= "h4"
              variant="h5"
              weight="medium"
              theme="gray"
               className="mt-5">{card.service}</Typography>

            <Typography
              component= "p"
              variant="caption1"
              weight="medium"
              theme="gray"
               className="mt-5">{card.time} min</Typography>


            <Typography   component= "h5"
              variant="lead"
              weight="regular"
              theme="gray"
              className="mt-5"
              >{card.price} €</Typography>

              <div className="mt-6 align-bottom"> 
                <Button 
                
                size="small"
                variant="secondary"
                baseUrl={card.link}
                type="submit"
                
                >Réserver</Button>
                </div>
              </div>
           
              </div>
        
            </div> 
        </div>
    ))


return (
<div className="">
    <Container className="mx-auto max-w-screen-xl px-4 py-16 bg-gray-400 sm:px-6 sm:py-24 lg:px-8" >
    <Typography
    className="text-center text-3xl text-gray-700  font-bold tracking-tight sm:text-5xl"    
    >Nos autres Services</Typography>
           <Typography 
                variant="body-lg"
                component="p" 
                className="max-w-xl text-gray-700 text-center my-10 mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex impedit, 
                officiis hic suscipit molestiae corporis laboriosam numquam odit
                consequuntur iusto.
    </Typography>


     <div className="mt-12 mx-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

      {cardList}

     </div>
    </Container>
</div>
)

}