import bground from "@/app/image/background.png";
import main from "@/app/image/mainpic.png";
import Image from "next/image";
import Link from "next/link";
import "@/app/blogs/page"

const bg = {
    backgroundImage: `url(${bground.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
    width: "100%",
};
export default function Main(){
    return(
        <>
        <div style={bg}>
            <div className="bg-white/30 backdrop-blur-sm duration-300 h-[520px] flex">
                <div className="container grid grid-cols-1 place-content-center">
                    <div className="text-start space-y-5 pl-20">
                        <h1 className="text-[#DCAE1D] text-4xl md:text-5xl font-bold uppercase fade-up fadeUp">memorize all <br></br>the things <br></br> with a song!</h1>
                        <p className="text-md md:text-lg font-normal justify-between w-[300px] md:w-[500px] sm:w-[400px] lg:w-[600px] fade-ups fadeUp">This line highlights how using songs and melodies can make information easier to remember, whether it is for students, professionals, or anyone looking to boost their memory skills. Perfect for educational websites or apps, it encourages users to engage in fun, effective learning methods that enhance retention through rhythm and repetition.</p>
                        <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden fade-ups fadeUp">
                <Link href={"blogs"}>
                  <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                    Read More Blogs
                  </span>
                </Link>
              </button>
                    </div>
                    <div className="zoomInCenter zoom-in-center">
                        <Image src={main} alt="blub" className="w-[250px] h-[250px] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:scale-125 sm:translate-y-0 top-28 lg:top-2 md:top-[15px]"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#bfdfef] h-[180px]">

        </div>
        </>
    ) 

}