"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { data: session } = useSession();

    const handleSignIn = async (e:any) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            username,
            password,
            redirect: false, 
        });

        if (result?.ok) {
            router.push("/"); 
        } else {
            console.error("Login failed:", result?.error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                <form className="space-y-4" onSubmit={handleSignIn}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full p-2.5 mt-1 border rounded-lg focus:ring-gray-500 focus:border-gray-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-2.5 mt-1 border rounded-lg focus:ring-gray-500 focus:border-gray-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white font-medium py-2.5 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300"
                    >
                        Login
                    </button>
                </form>
                <button
                    type="button"
                    onClick={() => router.push("/auth/signup")}
                    className="w-full bg-gray-100 text-gray-800 font-medium py-2.5 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 mt-4"
                >
                    Don't have an account? Sign Up
                </button>
            </div>
        </div>
    );
}
