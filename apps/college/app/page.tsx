import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { getSession } from "next-auth/react";
import authOptions from "./lib/auth";
import { getServerSession } from "next-auth";
import SignInPage from "./auth/signin/page";

export default async function Home() {
  const session=await getServerSession(authOptions)
  if(!session){
    return <SignInPage/>
  }
  return (
    <div>
      
      user page
    </div>
  );
}
