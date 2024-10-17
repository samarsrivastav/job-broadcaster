import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import authOptions from "./lib/auth";

export default function Home() {
  const session=getServerSession(authOptions)
  return (
    <div className="user">
      user-- 
      <div>
        {JSON.stringify(session)}
      </div>
    </div>
  );
}
