"use server"

import { getServerSession } from "next-auth"
import authOptions from "./auth"
import prisma from "@repo/db/client"

export default async function getCompany() {
    const session=await getServerSession(authOptions)
    const college=await prisma.company.findMany({
        where:{
            collegeID:session.collegeId,
        }
    })
    const company=college.filter(item=>{
        const cutoff=parseInt(item.cutoff,10)
        return cutoff<session.cgpa
    })
    console.log(company)
    return company
}