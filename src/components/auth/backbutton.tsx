"use client"

import Link from "next/link";
import { Button } from "../ui/button";

interface BackBUttonProps{
    href: string;
    label: string
}

export function Backbutton({label, href}: BackBUttonProps) {
  return (
    <Button
        variant="link"
        className="font-normal w-full"
        size="sm"
        asChild
    >
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}
