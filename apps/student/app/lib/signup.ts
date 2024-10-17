"use server"

import prisma from "@repo/db/client"

export async function signup(username:string,password:string,name: string,cgpa :string,collegeId :number) {
    const userExist=await prisma.student.findFirst({
        where:{
            username
        }
    })
    if(userExist){
        return {
            msg:"user already exists"
        }
    }
    const user=await prisma.student.create({
        data:{
            username,
            password,
            name,
            cgpa,
            collegeId
        }
    })
    return {
        user
    }

}