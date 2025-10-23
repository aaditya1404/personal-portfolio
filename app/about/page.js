import Link from "next/link";

export default function About() {

    const p1 = "I'm Aaditya Kumar Vishwakarma from Jharkhand, India.";
    const p2 = "As a kid, I was fascinated by how things worked — from ceiling fans to computers. I used to open gadgets just to see what was inside them (and sometimes failed to put them back together). That curiosity slowly turned into a love for technology, logic, and creation.";
    const p3 = "Today, I am a developer who enjoys turning ideas into living, interactive digital experiences. Writing clean code, designing smooth interfaces, and solving real-world problems gives me the same excitement I once felt taking apart that first gadget.";
    const p4 = "My aim is to become a skilled software developer — someone who not only builds software but creates meaningful projects that have a positive impact on people's lives and make life simpler and smarter. To reach that goal, I’m constantly learning, experimenting with new technologies, and building projects that challenge my skills."
    const p5 = "Outside of tech, I’ve started “chasing hobbies” too — exploring all the things I used to love but left behind. I like listening to music and watching movies and web series; they help me unwind and often inspire new ideas for creativity and storytelling."

    return (
        <div className="relative">
            <div className="relative w-full min-h-screen flex items-center justify-center z-5 bg-[#FEFDF8]">
                <div className="mt-18 lg:mt-20 w-xs lg:w-xl flex flex-col items-center justify-center">
                    <p className="text-center mb-2">Dear reader,</p>
                    <p className="text-center mb-2">{p1}</p>
                    <p className="text-center mb-2">{p2}</p>
                    <p className="text-center mb-2">{p3}</p>
                    <p className="text-center mb-2">{p4}</p>
                    <p className="text-center mb-4">{p5}</p>
                    <div className="mb-4">
                        <Link
                            href={"/"}
                            className="bg-[#fff7ca] text-xl font-bold tracking-tighter px-4 py-2 rounded-md "
                        >Lets Connect :)</Link>
                    </div>
                </div>
            </div>
            <div className="h-[calc(100vh-4.5rem)] bg-transparent -z-50">
            </div>
        </div>
    )
}