import { useState } from "react";
import { ForgetPasswordView } from "./forget-password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldsType, FormsType } from "@/types/forms";

interface Props {
    form: FormsType;
}

export const ForgetPasswordContainer = () => {
const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<ForgetPasswordFormFieldsType>();

    const  onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return (
        <ForgetPasswordView
            form={{
                    errors,
                    register,
                    handleSubmit,    
                    onSubmit,
                    isLoading,         
                }}
            />
    )
}