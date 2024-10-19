// uploadResume.ts (Server Action)
"use server";

import { getServerSession } from "next-auth";
import authOptions from "./auth";
import prisma from "@repo/db/client";

export async function uploadResume(base64String: string) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        throw new Error("No active session");
    }

    // Convert base64 string to Buffer
    const buffer = Buffer.from(base64String, 'base64');


    const alreadyThere=await prisma.resume.findFirst({
        where:{
            studentId:session.userid
        }
    })
    console.log(JSON.stringify(session))
    if(alreadyThere){
        const resume = await prisma.resume.update({
            where:{
                id:alreadyThere.id
            },
            data: {
                resume: buffer
            },
        });
        
        return {
            message:"updated sucessfully"
        };
    }
    

    const resume = await prisma.resume.create({
        data: {
            studentId: session.userid, 
            resume: buffer,
        },
    });
    
    return resume;
}
