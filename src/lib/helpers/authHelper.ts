import { use } from "react";
import { db } from "../db";

export async function getUserByEmail(email: string){
    try {
        const user = db.user.findUnique({where: {email}})
        return user;
    } catch (error) {
        return null
    }
}