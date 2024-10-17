"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SignInPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const session = useSession()


    return (
        <div>
            <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={async()=>{
                await signIn("credentials",{
                    username,
                    password,
                    redirect:false
                })
                router.push("/")
            }} >
                Login
            </button>
            <br />
            <button type="button" onClick={async()=>{
                await signOut()
                router.push('/auth/signin')
            }
            }>
                Logout
            </button>
            <div>
                {JSON.stringify(session)}
            </div>
            <button type="button" onClick={async()=>{
                router.push('/auth/signup')
            }
            }>
                Dont have account??
            </button>
        </div>
    )
}
