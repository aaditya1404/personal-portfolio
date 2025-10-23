import Link from "next/link";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="flex w-full backdrop-blur-sm fixed items-center justify-center gap-4 h-18 lg:h-18 border-b border-black/10 z-10">
            <Link href={"/#work"} className="cursor-pointer py-7">Work</Link>
            <Link href={"/#skill"} className="cursor-pointer py-7">Skill</Link>
            <Link href={"/#main"} className="">
                <FiHome className="text-2xl cursor-pointer"/>
            </Link>
            <Link href={"/about"} className="cursor-pointer py-7">About</Link>
            <Link href={"/#experince"} className="cursor-pointer py-7">Exp</Link>
        </div>
    )
}

export default Navbar
