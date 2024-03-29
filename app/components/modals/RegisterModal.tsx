"use client"
import {FcGoogle} from "react-icons/fc"
import React , {useCallback, useState} from "react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"

import useRegisterModal from '../hooks/useRegisterModal'
import axios from 'axios'
import Modal from './Modal'
import Heading from "../Heading"
import Input from "../inputs/Input"
import {toast} from "react-hot-toast"
import Button from "../Button"
import { signIn } from "next-auth/react"
import { useController } from 'react-hook-form'
import useLoginModal from '../hooks/useLoginModal'



const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)
    const loginModal = useLoginModal()
    const {
        register, handleSubmit, formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const toggle = useCallback(() => {
        loginModal.onClose()
        registerModal.onOpen()
      },[loginModal, registerModal],
    )


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post("/api/register", data)
        .then(() => {
           registerModal.onClose() 
        }).catch((error) => {
           toast.error("Something happened")
        }).finally(() => {
            setIsLoading(false)
        })
    }


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
             title="Welcome to Woodly"
             subtitle="Create an account"
            />
            <Input
             id="email"
             label="Email"
             disabled={isLoading}
             register={register}
             errors={errors}
             required
            />

            <Input
             id="name"
             label="Name"
             disabled={isLoading}
             register={register}
             errors={errors}
             required
            />

            <Input
             id="password"
             label="password"
             type="password"
             disabled={isLoading}
             register={register}
             errors={errors}
             required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button 
            outline
            label = "Continue with Google"
            icon={FcGoogle}
            onClick={() => signIn("google")}
            />

            <div 
             onClick={registerModal.onClose}
            className="text-neutral-500 text-center mt-4 font-light">
                <div className="flex flex-row itesm-center gap-2 justify-center">
                    <div>
                        Already have an account
                    </div>
                    <div>
                       Log In
                    </div>
                </div>
            </div>
        </div>
    )
  return (
     <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
     />
  )
}

export default RegisterModal