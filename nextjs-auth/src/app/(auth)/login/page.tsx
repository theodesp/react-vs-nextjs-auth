import { Login } from "@/components/Login";
import {auth} from "@/lib/auth";
import { redirect } from 'next/navigation'

export default async function LoginPage() {
    const session = await auth()
    if (!session?.user) return <Login />
    redirect("/profile")
}