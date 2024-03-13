import clsx from "clsx";
import Image from "next/image";

interface Props {
    size?: "small" | "medium" | "large";
    src: string;
    alt: string;
}

export const Avatar = ({size = "medium", src ="/assets/images/profilWomen.jpg", alt="profil user"}: Props) => {

    let sizeStyles: string;

    switch (size) {
        case "small":
            sizeStyles = "w-[24px] h-[24px]"
            break;
        case "medium": //Default
             sizeStyles = "w-[34px] h-[34px]"
            break;
        case "large":
             sizeStyles = "w-[70px] h-[70px]"
            break;
    
    }

    return (
        <div className={clsx(sizeStyles, "relative bg-gray-400 rounded")}>
            <Image 
                fill
                src={src as string}
                alt={alt}
                className="object-cover object-center rounded"
            />

        </div>
    )
}