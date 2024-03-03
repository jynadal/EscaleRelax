import { useState } from "react";
import { RegisterView } from "./register.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/forms";
//import { createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from '@/config/firebase-config';
import { firebaseCreateUser } from "@/api/authentication";

export const RegisterContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>();


    const handleCreateUserAuthentication = async ({
        email, 
        password, 
        how_did_hear
    }: RegisterFormFieldsType) => {
        const { error, data } = await firebaseCreateUser(email, password)
        if (error) {
            setIsLoading(false)
            console.log(error)
            return;
        }
        console.log(data)
    
    };

    const  onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData);
        const {password} = formData;

        if (password.length <= 5) {
        setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
        });
        return;
    }

    // handleCreateUserAuthentication(formData)

    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed up 
    //         const user = userCredential.user;
    //         setIsLoading(false);
    //         console.log(user)
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         setIsLoading(false);
    //         console.log(errorCode,errorMessage)
    //         // ..
    //     });
    
    };

    return (
            <RegisterView 
                form={{
                    errors,
                    register,
                    handleSubmit,    
                    onSubmit,
                    isLoading,         
                }}
            />
    );
};