import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"

interface Props {

}

export const Navigation = ({}: Props) => {
    return (
        <div className="border-bottom-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
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

                <div className="flex items-center gap-7">
                    <Typography
                        variant="caption3"
                        component="div"
                        className='flex items-center gap-7'
                        >
                        <ActiveLink href="/d-s">Design System</ActiveLink>
                        <Link href="about">A propos</Link>
                        <Link href="services">Services</Link>
                        <Link href="shop">Boutique</Link>                        
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small">Connexion</Button>
                        <Button size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}