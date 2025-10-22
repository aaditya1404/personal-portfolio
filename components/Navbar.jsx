import Link from "next/link";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="flex w-full backdrop-blur-sm fixed items-center justify-center gap-4 h-20 lg:h-20 border-b border-black/10">
            <Link href={"/#work"} className="cursor-pointer translate-x-4">Work</Link>
            <Link href={"/#skill"} className="cursor-pointer translate-x-4">Skill</Link>
            <div className="translate-x-4">
                <FiHome className="text-2xl cursor-pointer"/>
            </div>
            <p className="cursor-pointer translate-x-4">About</p>
            <p className="cursor-pointer translate-x-4">Contact</p>
        </div>
    )
}

export default Navbar
