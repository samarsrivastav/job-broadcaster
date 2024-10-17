import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@repo/db/client"
import bcrypt from "bcrypt";
const authOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username", required: true },
                password: { label: "Password", type: "password", placeholder: "password", required: true }
            },
            async authorize(credentials: any) {
                console.log("Credentials received:", credentials);
                const userExist = await prisma.student.findFirst({
                    where: {
                        username: credentials.username
                    }
                })

                if (!userExist) {
                    return null
                }
                // const validate = await bcrypt.compare(credentials.password, userExist.password)
                if (userExist.password!=credentials.password) {
                    return null
                }
                return {
                    id: userExist.id.toString(),
                    username: userExist.username,
                    cgpa: userExist.cgpa,
                    name: userExist.name,
                    college: userExist.collegeId
                }
            }
        }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.sub = user.id;
                token.username=user.username
            }
            return token;
        }, 
        session: async ({ token, session }: any) => {
            if (token) {
                session.userid = token.sub;
                session.username = token.username; 
            }
            return session
        }
    },
    pages:{
        signIn:'/auth/signin'
    }
}

export default authOptions