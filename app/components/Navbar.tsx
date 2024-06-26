"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg"
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface linkprops
{
    name : string;
    href : string;
}

const links: linkprops[]=
[
    {name:"Home", href:"/home"},
    {name:"Tv shows",href:"/home/shows"},
    {name:"Movies", href:"/home/movies"},
    {name:"Recently Added",href:"/home/recently"},
    {name:"My List",href:"/home/user/list"},
];

export default function Navbar()
{
    const pathName=usePathname()
    return (
        <div className="w-full mx-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className=" flex item-center">
                <Link href="/home">
                    <Image src={Logo} alt="logo" priority  width={120} height={120}/>
                </Link>
                <ul className="lg:flex gap-4 ml-14 hidden">
                    {links.map((link, idx)=>(
                        <div key={idx}>
                            {pathName===  link.href ? (
                                <Link href={link.href} className="text-white font-semibold underline text-sm">
                                    {link.name}
                                </Link>

                            ):
                            (
                                <li className="font-normal text-gray-300 text-sm">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            )}
                        </div>
                    )
                    )

                    }
                </ul>
            </div>
            <div className="flex item-center gap-x-8">
                    <Search className="w-5 h-5 text-gray-300 cursor-pointer"/>
                    <Bell className="w-5 h-5 text-gray-300 cursor-pointer"/>
                    <UserNav/>
            </div>
        </div>
    )
}