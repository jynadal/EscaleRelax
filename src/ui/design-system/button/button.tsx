import { IconProps } from "@/types/IconsProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
    icon?: IconProps;
    iconeTheme?: "accent" | "secondary" | "gray";
    iconePosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
        size="medium", 
        variant="accent",
        icon,
        iconeTheme="accent", 
        iconePosition="right",
        disabled,
        isLoading,
        children
    }: Props) => {

    let variantStyles: string="", 
        sizeStyles: string="", 
        icoSize: number = 0;


    switch (variant) {
        case "accent": //Default
        variantStyles = "bg-gray hover:bg-gray-600 text-white rounded";          
            break;
            
        case "secondary":
        variantStyles = "bg-secondary-400 hover:bg-secondary-400/75 text-white rounded";
            break;

        case "outline":
        variantStyles = "bg-white hover:bg-gray-500 border border-gray-500 text-gray-600 rounded"
            break;

        case "disabled":
        variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed"
            break;

        case  "ico":
                if (iconeTheme === "accent") { //Default
                    variantStyles = "bg-gray hover:bg-gray-600 text-white rounded";
                }
                if (iconeTheme === "secondary") {
                    variantStyles = "bg-secondary-400 hover:bg-secondary-400/75 text-white rounded";                
                }
                if (iconeTheme === "gray") {
                    variantStyles = "bg-white hover:bg-gray-500 border border-gray-500 text-gray-600 rounded";                
                } 
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${
                variant === "ico"
                     ? "flex items-center justify-center w-[45px] h-[40px]"
                     : "px-[14px] py-[12px]"
            }`;
            icoSize=18;
            break;

        case "medium":
            sizeStyles = `text-caption2 font-medium ${
                variant === "ico" 
                ? "flex items-center justify-center  w-[45px] h-[50px]"
                : "px-[28px] py-[26px]"}`;
            icoSize=20;
            break;

        case "large":
            sizeStyles = `text-caption1 font-medium ${
                variant === "ico" 
                ? "flex items-center justify-center  w-[65px] h-[60px]"
                : "px-[32px] py-[36px]"
                }`;
            icoSize=24;
            break;

    }
    return (
    <>
        <button type="button"
            className={clsx(
                variantStyles,
                sizeStyles,
                icoSize,
                isLoading && "cursor-wait", 
                "relative", "animate" ) }
            onClick={()=>console.log('click')}
            disabled={disabled}                      
            >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {
                        variant == "accent" || variant === "secondary" || variant === "ico" ? (<Spinner size="small" variant="white" />) : (<Spinner size="small" />)
                    }
                </div>
            )}
    <div className={clsx(isLoading && "invisible")}>
            {icon && variant ==="ico" ?  (<icon.icon size={icoSize}/> 
            ) : (
            <div className={clsx(icon && "flex items-center gap-1")}> 
            {icon && iconePosition === "left" && (
            <icon.icon size={icoSize} />)}
            {children}
            {icon && iconePosition === "right" && (
            <icon.icon size={icoSize} />)}
            </div>
            )}
    </div>
        
        </button>
    </>
    );
};