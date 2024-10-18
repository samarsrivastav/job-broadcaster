import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import authOptions from "./lib/auth";
import {AnimatedPinDemo} from "@repo/ui/animatedPin"
import getCompany from "./lib/getCompany";

export default async function Home() {
  const session=await getServerSession(authOptions)
  const college=await getCompany()
  return (
    <div className="user ">
      user-- 
      <div className="text-red-950">
        {JSON.stringify(session)}
      </div>
      <div className="my-10">

      </div>
      <div className="bg-red-200 w-full h-full">
        {college.map((item)=>{
          return (
            <AnimatedPinDemo companyName={item.companyName} cutoff={item.cutoff} ctc={item.ctc} applyLink={item.link}/>
          )
        })}
      </div>
    </div>
  );
}
