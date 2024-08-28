"use server"

import { loginSchema } from "../zod-schemas";

export async function login(values: loginSchema){
    console.log(values);
}