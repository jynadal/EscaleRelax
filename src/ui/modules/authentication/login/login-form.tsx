import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const LoginForm = ({form}: Props) => {
const {errors, onSubmit, isLoading,register, handleSubmit} = form;


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input 
            isLoading= {isLoading}
            placeholder="jeandoe@gmail.fr" 
            type="email" 
            register={register}
            errors={errors}
            errorMsg="Tu dois renseiger ce champ"
            id="email"
        />

        <Input 
            isLoading= {isLoading}
            placeholder="Mot de passe" 
            type="password" 
            register={register}
            errors={errors}
            errorMsg="Tu dois renseiger ce champ"
            id="password"
        />
     
        <Button isLoading={isLoading} type="submit" fullWith>
            Connexion
        </Button>

    </form>
    )
}