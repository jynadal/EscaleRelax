import { AppLinks } from "@/types/app-links";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type:"internal",    
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type:"internal",    
    },
    {
        label: "Services",
        baseUrl: "/#",
        type:"internal",    
    },
    {
        label: "Produits",
        baseUrl: "/",
        type:"external",    
    },
];
const footerUsersLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type:"internal",    
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type:"internal",    
    },
    {
        label: "Services",
        baseUrl: "/#",
        type:"internal",    
    },
    {
        label: "Produits",
        baseUrl: "/",
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

const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "Facebook",
        baseUrl: "https://facebook.com",
        type:"external",    
    },
    {
        label: "Instagram",
        baseUrl: "https://instagram.com",
        type:"internal",    
    },
    {
        label: "Google +",
        baseUrl: "https://google.com",
        type:"internal",    
    },
];

export const footerLinks = [
    {
        labels: "App",
        links: footerApplicationLinks,    
    },
     {
        labels: "Utilisateurs",
        links: footerUsersLinks,    
    },
      {
        labels: "Informations",
        links: footerInformationLinks,    
    },
     {
        labels: "Réseaux",
        links: footerSocialNetworkLinks,    
    },
]