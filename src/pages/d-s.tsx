//DESIGN SYSTEM

import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function DesignSystem() {

 return (
 <>
     <Seo title="Design system | DS esthéticienne à domicile"
        description=""
      />
        <Layout>
            <Container className="py-10 space-y-10">
            {/*
            <div className="flex items-center gap-4 p-10">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
            </div>

            <div className="flex items-center gap-4 p-10">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo />
                <Logo size="large" />
            </div>
            <div className="flex items-center gap-2 p-10 border border-gray-400 rounded">
                <Avatar size="small" src="/assets/images/profilWomen.jpg" alt="profil user" />
                <Avatar src="/assets/images/profilWomen.jpg" alt="profil user"  />
                <Avatar size="large" src="/assets/images/profilWomen.jpg" alt="profil user"  />
            </div>


            <div className="flex items-center gap-4 p-10">
                <Button isLoading > Voir plus </Button>
                <Button isLoading size="small" variant="accent"> Voir plus </Button>
                <Button isLoading size="small" variant="secondary"> Voir plus </Button>
                <Button isLoading size="small" variant="outline"> Voir plus </Button>
                <Button isLoading size="small" variant="disabled"> Voir plus </Button>
                <Button isLoading size="small" variant="ico" icon={{icon: BsWhatsapp}} 
                    iconeTheme='secondary'/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button > Voir plus </Button>
                <Button size="small" variant="accent"> Voir plus </Button>
                <Button size="small" variant="secondary"> Voir plus </Button>
                <Button size="small" variant="outline"> Voir plus </Button>
                <Button size="small" variant="disabled"> Voir plus </Button>
                <Button size="small" variant="ico" icon={{icon: BsWhatsapp}} 
                    iconeTheme='secondary'/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button > Voir plus </Button>
                <Button variant="accent"> Voir plus </Button>
                <Button variant="secondary"> Voir plus </Button>
                <Button variant="outline"> Voir plus </Button>
                <Button variant="disabled"> Voir plus </Button>
                <Button size="small" icon={{icon: BsWhatsapp}} iconePosition='left' 
                    iconeTheme='gray'>Button </Button>
                    <Button size="small" icon={{icon: BsWhatsapp}} iconePosition='right' 
                    iconeTheme='gray'>Button </Button>
            </div> */}

                
    {/*
    <Container className="py-10 space-y-10">
     <div className="flex items-center gap-4 p-10">
      <Spinner size="small" />
      <Spinner />
      <Spinner size="large" />
     </div>

     <div className="flex items-center gap-4 p-10">
        <Logo size="very-small" />
        <Logo size="small" />
        <Logo />
        <Logo size="large" />
     </div>
     <div className="flex items-center gap-2 p-10 border border-gray-400 rounded">
        <Avatar size="small" src="/assets/images/profilWomen.jpg" alt="profil user" />
        <Avatar src="/assets/images/profilWomen.jpg" alt="profil user"  />
        <Avatar size="large" src="/assets/images/profilWomen.jpg" alt="profil user"  />
     </div>


    <div className="flex items-center gap-4 p-10">
        <Button isLoading > Voir plus </Button>
        <Button isLoading size="small" variant="accent"> Voir plus </Button>
        <Button isLoading size="small" variant="secondary"> Voir plus </Button>
        <Button isLoading size="small" variant="outline"> Voir plus </Button>
        <Button isLoading size="small" variant="disabled"> Voir plus </Button>
        <Button isLoading size="small" variant="ico" icon={{icon: BsWhatsapp}} 
             iconeTheme='secondary'/>
     </div>

     <div className="flex items-center gap-4 p-10">
        <Button > Voir plus </Button>
        <Button size="small" variant="accent"> Voir plus </Button>
        <Button size="small" variant="secondary"> Voir plus </Button>
        <Button size="small" variant="outline"> Voir plus </Button>
        <Button size="small" variant="disabled"> Voir plus </Button>
        <Button size="small" variant="ico" icon={{icon: BsWhatsapp}} 
             iconeTheme='secondary'/>
     </div>

       <div className="flex items-center gap-4 p-10">
        <Button > Voir plus </Button>
        <Button variant="accent"> Voir plus </Button>
        <Button variant="secondary"> Voir plus </Button>
        <Button variant="outline"> Voir plus </Button>
        <Button variant="disabled"> Voir plus </Button>
        <Button size="small" icon={{icon: BsWhatsapp}} iconePosition='left' 
             iconeTheme='gray'>Button </Button>
               <Button size="small" icon={{icon: BsWhatsapp}} iconePosition='right' 
             iconeTheme='gray'>Button </Button>
     </div> 
      <div className="space-y-5">
     
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
     </div>
    </Container>
     */}
            <div className="space-y-5">
            
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
            </div>
            </Container>
        </Layout>
   </>

 )
};