import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
import "@/app/blogs/page"
// import "@/app/about-us/page"
// import "@/app/contact/page"

export default function Header(){
    return(
        <>
            <nav className="relative z-10 shadow-lg w-full duration-300 bg-[#b4d5ce]">
                <div className="container py-2 md:py-0">
                    <div className="flex items-center justify-between">
                        <Link href={"/"} className="text-3xl font-bold ml-9">
                            <span>I Memorized </span>
                            <span className="text-[#DCAE1D]">That!</span>
                        </Link>

                        <div className="hidden md:block">
                            <ul className="py-4 flex items-center md:flex-row flex-col md:items-center text-xl font-medium text-black md:gap-[4vh] gap-6 ">
                                <li><Link href={"/"} className="text-lg font-medium  py-2 px-4 rounded-full duration-300 hover:bg-[#DCAE1D]">Home</Link></li>
                                <li><Link href={"blogs"}  className="text-lg font-medium  py-2 px-4 rounded-full duration-300 hover:bg-[#DCAE1D]">Blog</Link></li>
                                <li><Link href={""}  className="text-lg font-medium   py-2 px-4 rounded-full duration-300 hover:bg-[#DCAE1D]">About</Link></li>
                                <li><Link href={""}  className="text-lg font-medium   py-2 px-4 rounded-full duration-300 hover:bg-[#DCAE1D]">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="md:hidden flex items-center gap-4">
                        <button><CiMenuKebab className="cursor-pointer transition-all" size={30}/></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}