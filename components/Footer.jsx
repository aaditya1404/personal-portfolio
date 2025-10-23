"use client";
import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";


const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "aadityakumarvishwakarma31@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2s
    };
    return (
        <div className='fixed min-h-screen bottom-0 w-full z-0 bg-black flex items-center justify-center flex-col text-white'>
            <div className='flex items-start flex-col lg:flex-row lg:justify-between lg:items-center w-xs lg:w-5xl '>
                <div className='flex flex-col lg:flex-row lg:gap-4'>
                    <Link
                        href={"https://github.com/aaditya1404"}
                        className='hover:underline flex items-center justify-center gap-1'
                    >
                        Github
                        <FaArrowTrendUp />
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/aaditya1404/"}
                        className='hover:underline flex items-center justify-center gap-1'
                    >
                        LinkedIn
                        <FaArrowTrendUp />
                    </Link>
                </div>
                <div className='flex flex-col lg:flex-row lg:text-right lg:gap-4 '>
                    <Link
                        href={"/resume/resume.pdf"}
                        download={"Aaditya_Resume.pdf"}
                        className='hover:underline flex items-center justify-center gap-1'
                    >
                        Resume
                        <FaArrowTrendUp />
                    </Link>
                    <Link
                        href="mailto:aadityakumarvishwakarma31@gmail.com?subject=Hello%20Aaditya&body=Hi%20Aaditya,"
                        className="hover:underline flex items-center justify-center gap-1"
                    >
                        Email Me
                        <FaArrowTrendUp />
                    </Link>
                </div>
            </div>
            <button
                onClick={handleCopy}
                className="w-xs lg:w-5xl px-2 py-1 flex flex-col lg:flex-row items-center justify-end gap-4 text-white rounded transition hover:text-white/50 mt-40 mb-20"
            >
                <p className='lg:text-4xl text-right tracking-tighter text-xl'>aadityakumarvishwakarma31<br />@gmail.com</p>
                <div className='border border-white rounded-full px-4 py-2'>
                    {copied ? "Copied!" : "Copy"}
                </div>
            </button>
            <div className='border-t border-white/40 w-xs lg:w-5xl flex items-center justify-between h-20'>
                <div>
                    © 2025 AADITYA
                </div>
                <div>
                    V 0.1 - PORTFOLIO
                </div>
            </div>
        </div>
    )
}

export default Footer
