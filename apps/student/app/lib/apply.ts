"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import authOptions from "./auth";

export default async function apply(companyId:string) {
    const session=await getServerSession(authOptions)
    const resumeNotThere=await prisma.resume.findFirst({
        where:{
            studentId:session.userId
        }
    })
    if(!resumeNotThere){
        return {
            error:"Upload your resume first"
        }
    }
    const apply=prisma.apply.create({
        data:{
            studentId:session.userid,
            collegeId:String(session.collegeId),
            companyId:String(companyId)
        }
    })
    return {
        apply
    }
}