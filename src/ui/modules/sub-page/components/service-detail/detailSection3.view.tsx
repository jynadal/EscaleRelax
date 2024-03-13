// import {Container} from "@/ui/components/container/container";
// //import { Container } from "@/ui/components/container/container"
// import { Button } from "@/ui/design-system/button/button"
// import { Typography } from "@/ui/design-system/typography/typography"
// import Image from "next/image"
// //import stars from "/assets/images/svg/stars.svg"
// import { v4 as uuidv4} from "uuid"


// interface cardListInterface {
//    image?:string,
//     service?: string,
//     time?:number,
//     price?:number,
//     link?:string,
//     alt?:string,
// }

// const datacards: cardListInterface[] = [
//     {
//        image:"/assets/images/1.jpeg",
//         time: 45,
//         price:75,
//         service:"Massage d'aromathérapie",
//         link:""
//     },
//      {
//        image:"/assets/images/2.webp",
//         time: 45,
//         price:80,
//         service:"Thérapeutique",
//         link:""
//     },
//      {
//        image:"/assets/images/3.webp",
//         time: 45,
//         price:75,
//         service:"Pierres chaudes",
//         link:""
//     },
//         {
//        image:"/assets/images/4.webp",
//         time: 45,
//         price:75,
//         service:"Massage d'aromathérapie",
//         link:""
//     },
//      {
//        image:"/assets/images/5.webp",
//         time: 45,
//         price:80,
//         service:"Thérapeutique",
//         link:""
//     },
//      {
//        image:"/assets/images/6.webp",
//         time: 45,
//         price:75,
//         service:"Pierres chaudes",
//         link:""
//     },
    
// ]

// export const DetailService2 = ({}) => {

//     const cardList = datacards.map((card) => (
//       <div key={uuidv4()}  className="rounded-lg bg-gray-100 p-8">
//             <div className="flex items-center gap-4">
            
//              <div>
//               <Image url={card.image}
//                width={300}
//                height={216}
//                 alt={card.service}
//                 />
            
//               <div className="flex flex-col item-center text-center gap-0.5 text-goldBg-300">
//                    <Typography
//               component= "h4"
//               variant="h5"
//               weight="medium"
//               theme="gray"
//                className="mt-5">{card.service}</Typography>

//             <Typography
//               component= "p"
//               variant="caption1"
//               weight="medium"
//               theme="gray"
//                className="mt-5">{card.time} min</Typography>


//             <Typography   component= "h5"
//               variant="lead"
//               weight="regular"
//               theme="gray"
//               className="mt-5"
//               >{card.price} €</Typography>

//               <div className="mt-6 align-bottom"> 
//                 <Button 
                
//                 size="small"
//                 variant="secondary"
//                 baseUrl={card.link}
//                 type="submit"
                
//                 >Réserver</Button>
//                 </div>
//               </div>
           
//               </div>
        
//             </div> 
//         </div>
//     ))


// return (

// <section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
//   <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
//     <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
//       <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
//       <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
//     </div>
//     <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
//       <Image url="/assets/images/1.jpeg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy">
//       <Image url="/assets/images/1.jpeg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy">
//       <Image src="/assets/images/1.jpeg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy">
//     </div>
//     <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
//       <dt className="sr-only">Reviews</dt>
//       <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
//         <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
//           <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>
//         <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
//       </dd>
//       <dt className="sr-only">Location</dt>
//       <dd className="flex items-center">
//         <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
//           <circle cx="1" cy="1" r="1" />
//         </svg>
//         <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
//           <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
//           <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
//         </svg>
//         Collingwood, Ontario
//       </dd>
//     </dl>
//     <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
//       <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
//     </div>
//     <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
//       This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
//     </p>
//   </div> 
// </section>

// )

// }