"use client "

import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps{
    id: string;
    label: string;
    type?:string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldError
}

const Input: React.FC<InputProps> = () => {
    return ( 
        <div>

        </div>
     );
}
 
export default Input;