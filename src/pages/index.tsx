import Image from 'next/image'
import Head from 'next/head'
import { Seo } from '@/ui/components/seo'
import { Typography } from '@/ui/design-system/typography/typography'
import { Button } from '@/ui/design-system/button/button'

export default function Home() {
  return (
    <>
     <Seo title="Escale relax | Votre esthéticienne à domicile" />
     <Button />
     {/* <div className="space-y-5">
     
        <Typography variant='display' component="div">
            Escale Relax
        </Typography> 
         <Typography variant='h1' component="h1">
            Escale Relax
        </Typography>   
         <Typography variant='lead' component="h1">
            Escale Relax
        </Typography>   
         <Typography variant='body-lg' component="h1">
            Escale Relax
        </Typography>      
           
         <Typography variant='body-sm' component="h1">
            Escale Relax
        </Typography>   
        <Typography variant='caption1' component="h1">
            Escale Relax
        </Typography> 
        <Typography variant='caption4' component="h1">
            Escale Relax
        </Typography> 
     </div> */}
    </>
  )
}
