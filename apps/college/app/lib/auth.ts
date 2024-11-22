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
                const userExist = await prisma.college.findFirst({
                    where: {
                        name: credentials.username
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
                    name:userExist.name
                }
            }
        }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.sub = user.id;
                token.name=user.name
            }
            return token;
        }, 
        session: async ({ token, session }: any) => {
            if (token) {
                session.userid = token.sub;
                session.name = token.name; 
            }
            return session
        }
    },
    pages:{
        signIn:'/auth/signin'
    }
}

export default authOptions