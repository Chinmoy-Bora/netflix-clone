import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import Link from "next/dist/client/link";
import GithubSignin from "@/app/components/GithubSigninButton";
import GoogleSignin from "@/app/components/GoogleSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Signup() {
    const session=await getServerSession(authOptions);

    if(session)
        {
            return redirect("/home")
        }
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:px-14">

                <form method="post" action="/api/auth/signin">
                    <h1 className="text-3xl font-semibold text-white">Sign up</h1>
                    <div className="space-y-4 mt-5">
                        <Input type="email" name="email" placeholder="email" className="bg-[#333] placeholder:text-xs placeholder:text-grey-400 w-full inline-block" />
                        <Button variant={"destructive"} className="w-full bg-[#e50914]">Sign up</Button>
                    </div>
                </form>
                <div className="text-gray-500 text-sm mt-2">
                    Already have a account?<Link href="/login" className="text-white hover:underline">Log in now!</Link>
                </div>
                <div className="justify-center items-center flex w-full gap-x-3 mat-6">
                    <GithubSignin/>
                    <GoogleSignin/>
                </div>
            </div>
        </div>

    )
}