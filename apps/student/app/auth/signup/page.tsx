"use client";

import React, { useState } from "react";
import { signup } from "../../lib/signup";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [name, setName] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const router = useRouter();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create Your Account
                </h2>
                <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            await signup(username, password, name, cgpa, Number(collegeId));
                            router.push("/auth/signin");
                        } catch (err) {
                            console.error("Signup error:", err);
                        }
                    }}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-2.5 mt-1 border rounded-lg focus:ring-gray-500 focus:border-gray-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">CGPA</label>
                        <input
                            type="text"
                            placeholder="Enter your CGPA"
                            className="w-full p-2.5 mt-1 border rounded-lg focus:ring-gray-500 focus:border-gray-500"
                            value={cgpa}
                            onChange={(e) => setCgpa(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">College ID</label>
                        <input
                            type="text"
                            placeholder="Enter your College ID"
                            className="w-full p-2.5 mt-1 border rounded-lg focus:ring-gray-500 focus:border-gray-500"
                            value={collegeId}
                            onChange={(e) => setCollegeId(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white font-medium py-2.5 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <a href="/auth/signin" className="text-gray-800 font-medium hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}
