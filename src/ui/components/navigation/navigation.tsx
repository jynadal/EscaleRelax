//import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
//import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import { useState } from 'react';


interface Props {

}

export const Navigation = ({}: Props) => {
    const [navbar, setNavbar] = useState(false);

    return (
        <div className="border-bottom-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7
                                    lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex justify-between gap-50">
                    <Link href="/">
                        <div className="flex items-center gap-2.5">
                            {/* <Logo size="small" /> */}
                            <div className="flex flex-col">
                                <div className="text-secondary font-extrabold text-[24px]">
                                Escale relax
                                </div>
                            <Typography
                                variant="caption4"
                                component="span"
                                theme="gray"
                            >
                            Estheticienne à domicile

                            </Typography>
                            </div>
                        </div>
                    </Link>



                    <div className="md:hidden">
                    {/* Hamburger menu */}
                        <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                        >
                        {navbar ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-black"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                            ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                        </button>
                    </div>

                </div>

                <div>
                    <div className={`flex-1 justify-self-center gap-7
                                    md:block md:pb-0 md:mt-0 ${ navbar ? 'block' : 'hidden'}`}>
                        <Typography
                            variant="caption2"
                            component="div"
                            className='flex items-center gap-7
                                        justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'
                            >
                            <ActiveLink href="/about">A propos</ActiveLink>
                            <ActiveLink href="/packages">Packages</ActiveLink>   
                            <ActiveLink href="/services/soins_visage">Prestation</ActiveLink>
                            <ActiveLink href="/services">Services</ActiveLink>
                            {/* <ActiveLink href="shop">Boutique</ActiveLink>                         */}
                        </Typography>
                    
                    </div>
                </div>
            </Container>
        </div>
    )
}