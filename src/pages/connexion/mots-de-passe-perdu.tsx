import Image from 'next/image'
import Head from 'next/head'
import { Seo } from '@/ui/components/seo/seo'
import { Layout } from '@/ui/components/layout/layout'
import { ForgetPasswordContainer } from '@/ui/modules/authentication/forget-password/forget-password.container'


export default function ForgetPassword() {
  return (
  <>
    <Seo title="Mots de passe perdu à votre esthéticienne à domicile" 
    description="Page de Mots de passe perdu à votre esthéticienne à domicile"/>

    <Layout isDisplayBreadcrumbs={false}>
        <ForgetPasswordContainer />
    </Layout>
  </>
  )
}
