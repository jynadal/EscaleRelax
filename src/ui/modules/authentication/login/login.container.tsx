import { useState } from "react";
import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { FormsType, LoginFormFieldsType } from "@/types/forms";

interface Props {
    form: FormsType;
}

export const LoginContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<LoginFormFieldsType>();

    const  onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return (
            <LoginView 
              form={{
                    errors,
                    register,
                    handleSubmit,    
                    onSubmit,
                    isLoading,         
                }}
            />)
}