"use client"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"
import { Button } from "../ui/button";


export function Social(){
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                variant="outline"
                className="w-full"
            >
                <FcGoogle className="size-5" />
            </Button>
            <Button 
                variant="outline"
                className="w-full"
            >
                <FaGithub className="size-5 text-black" />
            </Button>
        </div>
    )
}