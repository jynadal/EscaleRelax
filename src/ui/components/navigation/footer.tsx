import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"
import {footerLinks} from "./app-links"
import { v4 as uuidv4} from "uuid"
import { ActiveLink } from "./active-link"
import { FooterLinks } from "@/types/app-links"
import { LinkTypes } from "@/lib/link-type"
import { SocialNetworksButtons } from "./socials-networks-button"

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerNavigationLists = footerLinks.map((columnLinks) => ( 
        <FooterLink key={uuidv4()} data={columnLinks} />
    ));

    return (
        <Container className="bg-gray py-10">
            <div className="flex justify-between p-8">
                <div className="flex flex-col item-center gap-1">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                        >
                    Eskalia du moment                    
                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="gray"
                        weight="medium"
                        >
                        Ile Maurice                    
                    </Typography>
                    <a href="#/" target="_blank">
                        <Image src="/assets/images/escaleIleMo.jpg" 
                        width={229}
                        height={216}
                        alt="Eskalia Ile Maurice"
                    />
                    </a>
                </div>

                <div className="flex gap-7">{footerNavigationLists}</div>
                {/* <div className="">Liste des liens</div> */}
            </div>
            
            <hr className="text-white" />
            <Container className="flex flex-row justify-between pt-4">
            {/* //"flex flex-col justify-between pt-4  lg:flex flex-row " */}
            <div className="flex flex-row gap-1">
                <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                        >
                        Escale Relax                    
                </Typography>
            </div>
            <div className="flex flex-row gap-1">
                <Typography
                        variant="caption4"
                        theme="white"
                        weight="regular"
                        className="hidden lg:block"             
                        >
                        {`Copyrights ©  ${currentYear} | Tous droit réserver Escale Relax `}    
                </Typography>
            </div>
              <div className="">
                <SocialNetworksButtons theme="gray" />
                {/*
                <div className="flex flex-row gap-1">
                 <Typography
                        variant="caption3"
                        theme="white"
                        weight="regular"
                        >
                        <a href="" target="_blank" className="underline">facebook</a>
                        {` | `}
                        <a href="" target="_blank" className="underline">instaaaa</a>
                        {` | `}
                        <a href="" target="_blank" className="underline">google</a>                
                </Typography> */}
            </div>
            </Container>

        </Container>
    )
};

interface footerLinkProps {
    data: FooterLinks;
}

const FooterLink = ({data}: footerLinkProps) => {

    const linkList = data.links.map((link) => (
    
        <div key={uuidv4()} >
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">
                    {link.label}
                </a>            
            )}       
        </div>
    ))


    return (

        <div className="min-w=[200px]">
        
            <Typography
                theme="white"
                variant="caption2"
                weight="medium"
                className="pb-5 hidden sm:block"
            >
            {data.label}
            </Typography>
            <Typography theme="white" variant="caption3" className="space-y-4 hidden sm:block">
                {linkList}
            </Typography>

        </div>

    )
}