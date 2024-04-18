"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";


export  default function GoogleSignin()
{
    return (
        <Button onClick={()=>signIn("google")} className="mt-2 " variant={"outline"} size={"icon"}>
        <Image src={GoogleIcon} alt="icon google" className="w-6 h-6" priority/>
    </Button>
    )
}