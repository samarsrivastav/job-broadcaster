"use server"

import { getServerSession } from "next-auth"
import authOptions from "./auth"
import prisma from "@repo/db/client"

export default async function getCompany() {
    const session=await getServerSession(authOptions)
    if (!session) {
        throw new Error("No active session");
    }
    const college=await prisma.company.findMany({
        where:{
            collegeID:session.collegeId,
        }
    })
    const company=college.filter(item=>{
        const cutoff=parseInt(item.cutoff,10)
        return cutoff<session.cgpa
    })
    const appliedCompanies = await prisma.apply.findMany({
        where: {
            studentId: session.userid,
        }
    });

    const appliedCompanyIds = new Set(appliedCompanies.map(a => a.companyId));

    const notAppliedCompanies = company.filter(c => {
        return !appliedCompanyIds.has(c.id.toString());
    });

    return notAppliedCompanies;
}