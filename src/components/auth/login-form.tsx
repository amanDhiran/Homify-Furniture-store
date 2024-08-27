"use client"

import React from 'react'
import CardWrapper from './card-wrapper'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { LoginSchema } from '../../../zod-schemas'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'

export function LoginForm() {
    
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <CardWrapper
        headerLabel='Welcome back'
        backButtonLabel="Don't have an account?"
        backButtonhref='/auth/register'
        showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() =>{})}
                    className='space-y-4'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='geralt@example.com'
                                            type='email' 
                                        />
                                    </FormControl>
                                </FormItem>
                                )
                            }     
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='********'
                                            type='password' 
                                        />
                                    </FormControl>
                                </FormItem>
                                )
                            }     
                        />
                    </div>
                </form>
            </Form>
        </CardWrapper>
    )
}
