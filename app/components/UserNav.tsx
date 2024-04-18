"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserNav()
{
     return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="h-10 w-10 relative rounded-sm items-center">
                        <Avatar className="h-10 w-10 rounded-sm">
                            <AvatarImage src="https://aujjiapwmvkzyqlazncb.supabase.co/storage/v1/object/public/netflix-clone/avatar.png"/>
                            <AvatarFallback className="rounded-sm">
                            </AvatarFallback>
                        </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                                    Chinmoy
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                                chinmoyborah100@gmail.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={()=>signOut()}>
                        Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     )
}