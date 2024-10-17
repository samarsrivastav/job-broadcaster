"use client"
import React, { useState } from 'react'
import { signup } from '../../lib/signup';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [name, setName] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const  router=useRouter()
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <input onChange={(e) => {
                            setUsername(e.target.value);
                        }}  placeholder="email" />
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }}  type="password" placeholder="123456" />
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }}  type="text" placeholder="name" />
                        <input onChange={(e) => {
                            setCgpa(e.target.value)
                        }}  type="text" placeholder="cgpa" />
                        <input onChange={(e) => {
                            setCollegeId(e.target.value)
                        }}  type="text" placeholder="collegeid" />
                        <button onClick={async () => {
                            try{
                               JSON.stringify( await signup(username,password,name,cgpa,Number(collegeId)));
                               router.push("/auth/signin")
                            }catch{
                                console.log("\n\nerror---------")
                            }
                        }} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}
