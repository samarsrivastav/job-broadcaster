// ResumeUpload.tsx (Client Component)
"use client";

import React, { useState } from 'react';
import { uploadResume } from '../lib/uploadResume';
import { signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";
export function ResumeUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router=useRouter()
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile && selectedFile.type !== "application/pdf") {
            setError("Please upload a PDF file.");
            setFile(null);
        } else {
            setFile(selectedFile || null);
            setError(null);
        }
    };

    const handleUpload = async () => {
        try {
            if (!file) {
                setError("No file selected");
                return;
            }

            // Convert the file to a base64 string
            const reader = new FileReader();
            reader.readAsDataURL(file); // Read the file as a data URL
            reader.onload = async () => {
                const base64String = reader.result?.toString().split(',')[1]; // Get the base64 part
                if (base64String) {
                    await uploadResume(base64String); // Pass base64 string to the server action
                    setSuccess("Resume uploaded successfully!");
                    setError(null);
                }
            };
            reader.onerror = () => {
                setError("Error reading file");
            };
        } catch (error) {
            setError((error as Error).message);
            setSuccess(null);
        }
    };

    return (
        <div>
            <div className="resume-upload-container">
                <h2>Upload Your Resume</h2>
                <form>
                    <input type="file" accept="application/pdf" onChange={handleFileChange} />
                    <button type="button" onClick={handleUpload}>Upload</button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
            <button type="button" className="bg-green-100" onClick={async()=>{
                await signOut()
                router.push("/auth/signin")
            }}>Logout</button>
        </div>
    );
}
