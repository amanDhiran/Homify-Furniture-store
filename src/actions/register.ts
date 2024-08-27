"use server"

import { registerSchema } from "../../zod-schemas";

export async function register(values: registerSchema){
    console.log(values);
    
}