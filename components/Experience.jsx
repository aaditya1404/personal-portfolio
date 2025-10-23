"use client";
import React from 'react'
import ScrollReveal from './ScrollReveal'

const Experience = () => {
    return (
        <div id='exp' className='w-full min-h-[70vh] flex items-center justify-center flex-col '>
            <ScrollReveal>
                <p className='w-xs lg:w-5xl border-b border-black/10 text-black/70 text-3xl mb-8 mt-14 lg:mt-8'>Experience</p>
            </ScrollReveal>
            {/* College Bucket */}
            <ScrollReveal>
                <div className='w-xs p-4 lg:w-5xl lg:flex bg-white rounded-md border border-black/10 border-dashed mb-4 flex flex-col'>
                    <h1 className='text-xl font-semibold text-[#312B22] lg:mt-0'>Freelance Web Developer</h1>
                    <p className='text-black/70 max-w-5xl text-xs mb-2'>March 2024 - Feb 2025</p>
                    <ul className='list-disc list-inside -space-y-1'>
                        <li>Designed and developed web applications for startups and individuals.</li>
                        <li>Delivered complete full-stack solutions with clean, efficient, and maintainable code.</li>
                        <li>Collaborated closely with clients to understand goals and requirements.</li>
                        <li>Transformed ideas into modern, functional, and user-friendly digital experiences.</li>
                    </ul>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default Experience
