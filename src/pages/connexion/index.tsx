import Image from 'next/image'
import Head from 'next/head'
import { Seo } from '@/ui/components/seo/seo'
import { Layout } from '@/ui/components/layout/layout'
import { LoginContainer } from '@/ui/modules/authentication/login/login.container'


export default function Connexion() {
  return (
  <>
    <Seo title="Connexion à votre esthéticienne à domicile" 
    description="Page de connexion à votre esthéticienne à domicile"/>

    <Layout>
    <LoginContainer />
    </Layout>
  </>
  )
}
