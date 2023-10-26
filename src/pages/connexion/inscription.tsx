import Image from 'next/image'
import Head from 'next/head'
import { Seo } from '@/ui/components/seo/seo'
import { Layout } from '@/ui/components/layout/layout'
import {RegisterContainer} from '@/ui/modules/authentication/register/register.container'


export default function Register() {
  return (
  <>
    <Seo title="Inscription à votre esthéticienne à domicile" 
    description="Page d'inscription à votre site internet pour échanger avec votre esthéticienne à domicile"/>

    <Layout>
    <RegisterContainer />
    </Layout>
  </>
  )
}
