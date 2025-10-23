"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SmartPhoneFrame from './SmartPhoneFrame';
import ScrollReveal from './ScrollReveal';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";

const Work = () => {

    const [demoUrl, setDemoUrl] = useState(null);

    const project = [
        {
            title: "College Bucket",
            demo: "https://collegebucket.vercel.app/"
        },
        {
            title: "Mystery Message",
            demo: "https://mysterymessage-lovat.vercel.app/"
        }
    ]

    return (
        <div id='work'>
            <div className='relative z-10 w-full min-h-screen flex items-center justify-center flex-col bg-[#FEFDF8]'>
                <ScrollReveal>
                    <p className='w-xs lg:w-5xl border-b border-black/10 text-black/70 text-3xl mb-8 mt-14 lg:mt-8'>Work</p>
                </ScrollReveal>

                {/* College Bucket */}
                <ScrollReveal>
                    <div className='w-xs p-4 lg:w-5xl lg:flex gap-4 bg-white rounded-md border border-black/10 border-dashed mb-4'>
                        <div className='rounded-md overflow-hidden lg:w-2xl'>
                            <Image src={"/project/collegebucket.png"} width={400} height={400} alt='project' />
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-semibold text-[#312B22] mt-2 mb-2 lg:mt-0'>College Bucket</h1>
                            <p className='text-black/70 max-w-5xl text-sm mb-1'>Anonymous feedback platform enables users to send and receive true feedback and messages. Integrated Gemini AI to generate personalized responses, and verified user onboarding using NextAuth and email verification.</p>
                            <p className='text-black/70 mb-4'>Tech Used: MERN, JWT, Tailwind CSS, Three.js</p>
                            <div className='flex gap-3'>
                                <Link
                                    href={"https://github.com/aaditya1404/collegebucket"}
                                    className='flex items-center justify-center'
                                >
                                    Github
                                    <div className='text-xl'>
                                        <FaArrowTrendUp />
                                    </div>
                                </Link>
                                <button className='cursor-pointer flex items-center justify-center' onClick={() => setDemoUrl("https://collegebucket.vercel.app/")}>
                                    Demo
                                    <div>
                                        <IoPhonePortraitSharp />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Mystery Message */}
                <ScrollReveal>
                    <div className='w-xs p-4 lg:w-5xl lg:flex gap-4 bg-white rounded-md border border-black/10 border-dashed'>
                        <div className='rounded-md overflow-hidden block lg:hidden lg:w-2xl'>
                            <Image src={"/project/mysterymessage.png"} width={400} height={400} alt='project' />
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-semibold text-[#312B22] mt-2 mb-2 lg:mt-0'>Mystery Message</h1>
                            <p className='text-black/70 max-w-5xl text-sm mb-1'>Market place for students to buy, sell, and trade items within their campus network. Designed a RESTful backend along with real-time search and filtering.</p>
                            <p className='text-black/70 mb-4'>Tech Used: Next.js, MongoDB, Zod, Typescript, Nodemailer, React Email, Gemini AI</p>
                            <div className='flex gap-3'>
                                <Link
                                    href={"https://github.com/aaditya1404/mstrymsg"}
                                    className='flex items-center justify-center'
                                >
                                    Github
                                    <div className='text-xl'>
                                        <FaArrowTrendUp />
                                    </div>
                                </Link>
                                <button
                                    className='cursor-pointer flex items-center justify-center'
                                    onClick={() => setDemoUrl("https://mysterymessage-lovat.vercel.app/")}
                                >
                                    Demo
                                    <div>
                                        <IoPhonePortraitSharp />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='rounded-md overflow-hidden hidden lg:block lg:w-2xl'>
                            <Image src={"/project/mysterymessage.png"} width={400} height={400} alt='project' />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            {demoUrl && (
                <SmartPhoneFrame src={demoUrl} onClose={() => setDemoUrl(null)} />
            )}
        </div>
    )
}

export default Work
