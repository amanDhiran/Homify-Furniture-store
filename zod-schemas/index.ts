import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email('Email is required'),
    password: z.string().min(1, {
        message: "Password required"
    })
})
export type loginSchema = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
})
export type registerSchema = z.infer<typeof RegisterSchema>