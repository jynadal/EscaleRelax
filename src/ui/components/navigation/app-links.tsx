import { AppLinks } from "@/types/app-links";
import {RiFacebookFill, RiYoutubeFill,RiGoogleFill} from 'react-icons/ri';

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type:"internal",    
    },
    {
        label: "A propos",
        baseUrl: "/about",
        type:"internal",    
    },
    {
        label: "Services",
        baseUrl: "/services",
        type:"internal",    
    },
    {
        label: "Packages",
        baseUrl: "/packages",
        type:"internal",    
    },
    // {
    //     label: "Produits",
    //     baseUrl: "/shop",
    //     type:"external",    
    // },
];
const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type:"internal",    
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type:"internal",    
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type:"internal",    
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mots-de-passe-perdu",
        type:"external",    
    },
];

const footerInformationLinks: AppLinks[] = [
    {
        label: "cgu",
        baseUrl: "/cgu",
        type:"internal",    
    },
    {
        label: "mention Légales",
        baseUrl: "/m-legal",
        type:"internal",    
    },
    {
        label: "Politiques de cookies",
        baseUrl: "/cookies",
        type:"internal",    
    },
    {
        label: "Politiques de Confidentialité",
        baseUrl: "/confidentialite",
        type:"internal",    
    },
];

export const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "Facebook",
        baseUrl: "https://facebook.com",
        type:"external",
        icon:RiFacebookFill,    
    },
    {
        label: "Instagram",
        baseUrl: "https://instagram.com",
        type:"internal",
        icon:RiYoutubeFill,    
    },
    {
        label: "Google +",
        baseUrl: "https://google.com",
        type:"internal",
        icon:RiGoogleFill,    
    },
];

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks,    
    },
     {
        label: "Utilisateurs",
        links: footerUsersLinks,    
    },
      {
        label: "Informations",
        links: footerInformationLinks,    
    },
     {
        label: "Réseaux",
        links: footerSocialNetworkLinks,    
    },
]