import {Container} from "@/ui/components/container/container";
//import { Container } from "@/ui/components/container/container"
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
        service:"Massage d'aromathérapie",
        link:""
    },
     {
       image:"/assets/images/2.webp",
        time: 45,
        price:80,
        service:"Thérapeutique",
        link:""
    },
     {
       image:"/assets/images/3.webp",
        time: 45,
        price:75,
        service:"Pierres chaudes",
        link:""
    },
        {
       image:"/assets/images/4.webp",
        time: 45,
        price:75,
        service:"Massage d'aromathérapie",
        link:""
    },
     {
       image:"/assets/images/5.webp",
        time: 45,
        price:80,
        service:"Thérapeutique",
        link:""
    },
     {
       image:"/assets/images/6.webp",
        time: 45,
        price:75,
        service:"Pierres chaudes",
        link:""
    },
    
]

export const DetailService2 = ({}) => {

    const cardList = datacards.map((card) => (
      <div key={uuidv4()}  className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
            
             <div>
              <Image url={card.image}
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
<>
<section className="overflow-hidden bg-white py-8 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">An Enterprise API</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">We've built an API that allows you to scale your podcast
            production workflow.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-gray-700">
                  <path
                    d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                  </path>
                  <path
                    d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                  </path>
                  <path
                    d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                  </path>
                </svg>Template driven
              </dt>
              <dd className="inline"> Inspired by Sendgrid, Mailchimp, and Postmark, we allow you to create and apply
                templated content to your media.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-gray-700">
                  <path fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"></path>
                </svg>
                Simple, REST
              </dt>
              <dd className="inline"> A simple REST API that allows you to create, generate, and manage your content.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"></path>
                  <path
                    d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                  </path>
                </svg>Developer friendly </dt>
              <dd className="inline bg-black"> Documented and easy to use, we make it easy to integrate with your existing workflow.
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 flex items-center gap-x-6">
          <a href="#"
            className="rounded-md text-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start
            for free
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Schedule a demo
            <span aria-hidden="true">→</span>
          </a>
        </div>
        
      </div>

      <img url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" 
      alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
    </div>
  </div>
</section>

      

        {/* <!-- https://gist.github.com/goodreds/3d044027175954984fb96c7407a955ab --> */}

        {/* <!-- Container --> */}
        <section className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

            {/* <!-- Image Column --> */}
            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <Image className="h-full w-full object-cover" url="https://fastly.picsum.photos/id/1018/2000/2000.jpg?hmac=Ik4-AuerP80qbHwt-iR4ibTh8xWz_yri7QpvKvEMtnU" alt="Winding mountain road" />
            </div>
            {/* <!-- Close Image Column --> */}

            {/* <!-- Text Column --> */}
            <div
                className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                {/* <!-- Text Wrapper --> */}
                <div className="flex flex-col p-12 md:px-16">
                    <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>
                    {/* <!-- Button Container --> */}
                    <div className="mt-8">
                        <a href="#"
                            className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                            More</a>
                    </div>
                </div>
                {/* <!-- Close Text Wrapper --> */}
            </div>
            {/* <!-- Close Text Column --> */}

        </section>

        <section className="">
            <Container className="mx-auto max-w-screen-xl px-4 py-16 bg-gray-400 sm:px-6 sm:py-24 lg:px-8" >
            <Typography
            className="text-center text-3xl text-gray-700  font-bold tracking-tight sm:text-5xl"    
            >Tous nos Services</Typography>
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
        </section>

    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800">Highlighted Features</h2>
        </div>

        <div className="flex flex-col md:flex-row">
            {/* <!-- can help image --> */}
            <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                <Image className="w-1/2 md:w-full mx-auto" url="https://placeholder.pics/svg/400" alt="can_help_banner"/>
            </div>
            {/* <!-- end can help image --> */}

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                    <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                        <h3 className="text-2xl font-bold text-md mb-6">Dynamic Personalization:</h3>
                        <p className="text-sm">Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                    <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                        <h3 className="text-2xl font-bold text-md mb-6">Mobile-Optimized Interface</h3>
                        <p className="text-sm"> Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.</p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                    <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                        <h3 className="text-2xl font-bold text-md mb-6">24/7 Customer Support</h3>
                        <p className="text-sm">ur U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                    <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                        <h3 className="text-2xl font-bold text-md mb-6">Secure Payment Processing</h3>
                        <p className="text-sm">We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.</p>
                    </div>
                </div>


            </div>
        </div>

    </div>


       
</>
)

}