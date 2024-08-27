"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "./social";
import { Backbutton } from "./backbutton";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonhref: string;
    showSocial?: boolean
}

function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonhref,
    showSocial
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
        )}
        <CardFooter>
            <Backbutton label={backButtonLabel} href={backButtonhref} />
        </CardFooter>
    </Card>
  )
}

export default CardWrapper