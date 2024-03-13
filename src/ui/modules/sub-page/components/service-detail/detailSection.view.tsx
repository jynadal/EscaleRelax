import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { LinkProps } from "next/link"
//import stars from "/assets/images/svg/stars.svg"
import { v4 as uuidv4} from "uuid"


interface cardListInterface {
    rank?:number,
    image?:any,
    service?: any,
    time?:number,
    price?:number,
    link?:string,
}[]

const datacards: cardListInterface[] = [
    {
       rank:1,
       image:"/assets/images/1.jpeg",
        time: 45,
        price:75,
        service:"Massage d'aromathérapie",
        link:""
    },
     {
       rank:2,
       image:"/assets/images/2.webp",
        time: 45,
        price:80,
        service:"Thérapeutique",
        link:""
    },
     {
       rank:3,
       image:"/assets/images/3.webp",
        time: 45,
        price:75,
        service:"Pierres chaudes",
        link:""
    },
        {
       rank:4,
       image:"/assets/images/4.webp",
        time: 45,
        price:75,
        service:"Massage d'aromathérapie",
        link:""
    },
     {
       rank:5,
       image:"/assets/images/5.webp",
        time: 45,
        price:80,
        service:"Thérapeutique",
        link:""
    },
     {
       rank:6,
       image:"/assets/images/6.webp",
        time: 45,
        price:75,
        service:"Pierres chaudes",
        link:""
    },
    
]

export const DetailService = ({}) => {

    const cardList = datacards.map((card) => (
      <div key={uuidv4()}  className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
            
             <div>
              <Image src={card.image as string || "/assets/images/6.webp"}
               width={300}
               height={216}
               alt={card.service as string}
                />
            
              <div className="flex flex-col item-center text-center gap-0.5 text-goldBg-300">
                   <Typography
              component= "h4"
              variant="h5"
              weight="medium"
              theme="gray"
               className="mt-5">{card.service as string }</Typography>

            {/* <Typography
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
              >{card.price} €</Typography> */}

              <div className="mt-6 align-bottom"> 
                <Button 
                
                size="small"
                variant="secondary"
                baseUrl={card.link as string }
                type="submit"
                
                >En savoir + </Button>
                </div>
              </div>
           
              </div>
        
            </div> 
        </div>
    ))


return (
<>
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
            className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
                {/* <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Data to enrich your</span>
                    <span className="block text-indigo-600 xl:inline">online business</span>
                </h1> */}
                <Typography 
                        variant="h2"
                        component="h1" 
                        className="max-w-xl text-gray-700 text-center my-10 mx-auto">
                        Nos épilations à domicile rcytvuyifuytdyufviyvciubiohlikyxcfyjhguigiubuyhf
            </Typography>
                <Typography 
                        variant="body-lg"
                        component="p" 
                        className="max-w-xl text-gray-700 text-center my-10 mx-auto">
                        Toutes les épilations sont réalisées avec des cires à base de miel et vous garantiront une peau lisse et soyeuse.<br/><br/>
                        Sur les zones sensibles (visage, aisselles et maillot), j’utilise une cire traditionnelle sans bande, et à usage unique, et sur les autres zones du corps, une cire tiède avec bandes jetables.
                </Typography>
                {/* <p
                    className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                </p> */}
                {/* <!-- Button Section --> */}
                {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Live demo
                        </a>
                    </div>
                </div> */}
                {/* <!-- End of Button Section --> */}
            </div>

            {/* <!--   Image Section     --> */}
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/assets/images/6.webp" width='600' height='400' alt="" />
            </div>
            {/* <!--   End of Image Section     --> */}
        </div>

    </section>


           <section className="">
            <Container className="mx-auto max-w-screen-xl px-4 py-16 bg-gray-400 sm:px-6 sm:py-24 lg:px-8" >
            <Typography
            className="text-center text-3xl text-gray-700  font-bold tracking-tight sm:text-5xl"    
            >Tous nos </Typography>
                {/* <Typography 
                        variant="body-lg"
                        component="p" 
                        className="max-w-xl text-gray-700 text-center my-10 mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex impedit, 
                        officiis hic suscipit molestiae corporis laboriosam numquam odit
                        consequuntur iusto.
            </Typography> */}


            <div className="mt-12 mx-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

            {cardList}

            </div>
            </Container>
        </section>

       

</>

    
)



}