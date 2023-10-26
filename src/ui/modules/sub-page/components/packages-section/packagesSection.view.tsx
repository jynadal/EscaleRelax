import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
//import stars from "/assets/images/svg/stars.svg"
import { v4 as uuidv4} from "uuid"


interface PcardListInterface {
   title?:string,
    services?: any,
    desc?: string,
    price?: number,
    link?:string,
}

const datacards: PcardListInterface[] = [
    {
        title:"Bronze",
        desc: "The most popular choice. Product details for Product Type 2",
        price:75,
        services: {
        service1:"service 1",
        service2:"service 1",
        service3:"service 1",
        service4:"service 1",
        },
        link:""
    },
     {
        title:"Argent",
        desc: "The most popular choice. Product details for Product Type 2",
        price:80,
          services: {
        service1:"service 1",
        service2:"service 1",
        service3:"service 1",
        service4:"service 1",
        },
        link:""
    },
     {
        title:"Or",
        desc: "The most popular choice. Product details for Product chaudes",
        price:75,
        services: {
        service1:"service 1",
        service2:"service 1",
        service3:"service 1",
        service4:"service 1",
        },
        link:""
    },    
]

export const PackagesService = ({}) => {

    const packageCardList = datacards.map((pCard, index) => (
    <>
        {/* <!-- Card Package --> */}
        
        
      <div key={uuidv4()} className="bg-white/5 ring-2  rounded-xl mt-10 p-8 xl:p-10" >
        
          {/* <p className="flex flex-row items-end rounded-full pr-0 py-0 text-xs font-semibold leading-5 text-secondary">Populaire</p> */}
        <div className="flex items-baseline justify-center gap-x-4">
         <Typography
              component= "h3"
              variant="h4"
              weight="medium"
              theme="gray"
               className="mt-5">{pCard.title}</Typography>

          {/* <h2 id="product2" className="text-lg font-semibold leading-8 text-black">Product Type 2</h2> */}
        </div>

        <Typography
              component= "p"
              variant="caption1"
              weight="medium"
              theme="gray"
               className="mt-4 text-gray-700">{pCard.desc} {index}</Typography>

        {/* <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-black">€ 20 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p> */}
         <Typography   component= "h5"
              variant="h1"
              weight="regular"
              theme="gray"
              className="mt-5"
              >{pCard.price} €</Typography>

              <div className="flex mt-5 flex-row justify-center" >
               <Button 
                
                size="small"
                variant="secondary"
                baseUrl={pCard.link}
                type="submit"
                >Réserver</Button>
                </div>

        {/* <a href="/order" aria-describedby="product2"
          className="bg-indigo-500 text-black shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
          Now</a> */}
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-700 xl:mt-10">
           
           {/* { const packageCardList = datacards.services.map((service) => (

            ))} */}  


          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="secondary"
              aria-hidden="true" className="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>120 units</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="secondary"
              aria-hidden="true" className="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>3 different features</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="secondary"
              aria-hidden="true" className="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Fast delivery</li>
        </ul>
      </div>

    </>
    ))


return (
<div className="">
    <Container className="mx-auto max-w-screen-xl px-4 py-16 bg-gray-400 sm:px-6 sm:py-24 lg:px-8" >
    <Typography
    className="text-center text-3xl text-gray-700  font-bold tracking-tight sm:text-5xl"    
    >Nos Packages à votre service</Typography>
           <Typography 
                variant="body-lg"
                component="p" 
                className="max-w-xl text-gray-700 text-center my-10 mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex impedit, 
                officiis hic suscipit molestiae corporis laboriosam numquam odit
                consequuntur iusto.
    </Typography>


     <div className="mt-12 mx-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

      {packageCardList}

     </div>
    </Container>
</div>

)

}