"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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
                })
                router.push("/")
            }} >
                Login
            </button>
            <br />
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
