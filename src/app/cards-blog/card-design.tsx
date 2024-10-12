import Image from "next/image";
import main from "@/app/image/icon.png";
import "@/app/blog1/page";
import "@/app/blog2/page";
import "@/app/blog3/page";
import "@/app/blog4/page";
import "@/app/blog5/page";
import "@/app/blog6/page";
import Link from "next/link";

export default function CardDesign() {
  return (
    <>
      <section className="py-10 bg-[#bfdfef] text-black ">
        <div className=" fade-up fadeUp text-center mb-10">
          <h1 className="text-4xl font-bold uppercase">My Blog</h1>
        </div>

        {/* Card Container */}
        <div className="flex flex-wrap gap-12 justify-items-center">
          {/* Card one */}
          <div className=" transform translate-x-[25%] h-[500px] w-[350px] text-center rounded-[5px]">
            <div className="w-full h-full bg-[#d0bdf4] rounded-[5px] backface-hidden shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              <div className="h-[115px] w-full rounded-t-[5px] bg-[#c0ade4] border-b-2 border-[#a28089]">
                <Image
                  src={main}
                  alt=""
                  className="hover:scale-125 h-[115px] w-[115px] rounded-full p-[5px] absolute bg-[#b49cde] mt-[40px] left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div>
                <h1 className="text-[25px] pt-[75px]">
                  Improving Pronunciation through Singing:
                </h1>
              </div>
              <p className="mt-[10px] px-[35px] text-justify text-[15px]">
                Natural practice of intonation and rhythm in spoken English.The
                opportunity to mimic native speaker accents. Reinforcement of
                sounds that are challenging in English (e.g., vowel shifts, the
                "th" sound).
              </p>

              <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
                <Link href={"blog1"}>
                  <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                    Read More
                  </span>
                </Link>
              </button>
            </div>
          </div>

          {/* card two */}
          <div className="transform translate-x-[25%] h-[500px] w-[350px] text-center rounded-[5px]">
            <div className="w-full h-full bg-[#d0bdf4] rounded-[5px] backface-hidden shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              <div className="h-[115px] w-full rounded-t-[5px] bg-[#c0ade4] border-b-2 border-[#a28089]">
                <Image
                  src={main}
                  alt=""
                  className=" hover:scale-125 h-[115px] w-[115px] rounded-full p-[5px] absolute bg-[#b49cde] mt-[40px] left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div>
                <h1 className="text-[25px] pt-[75px]">
                  Learning Idioms and Phrasal Verbs Through English Songs
                </h1>
              </div>
              <p className="mt-[10px] px-[35px] text-justify text-[15px]">
                English is full of idiomatic expressions and phrasal verbs,
                which can be difficult to learn through traditional methods. In
                this blog, explain how songs often use these expressions,
                helping learners understand them in context.
              </p>
              <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
                <Link href={"blog2"}>
                  <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                    Read More
                  </span>
                </Link>
              </button>
            </div>
          </div>

          {/* card three */}
          <div className="transform translate-x-[25%] h-[500px] w-[350px] text-center rounded-[5px]">
            <div className="w-full h-full bg-[#d0bdf4] rounded-[5px] backface-hidden shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              <div className="h-[115px] w-full rounded-t-[5px] bg-[#c0ade4] border-b-2 border-[#a28089]">
                <Image
                  src={main}
                  alt=""
                  className="hover:scale-125 h-[115px] w-[115px] rounded-full p-[5px] absolute bg-[#b49cde] mt-[40px] left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div>
                <h1 className="text-[25px] pt-[75px]">
                  Using Songs to Build Vocabulary:
                </h1>
              </div>
              <p className="mt-[10px] px-[35px] text-justify text-[15px]">
                How Music Can Expand Your English Word Bank. How catchy lyrics
                introduce new words in context. The importance of repetition in
                songs for reinforcing meaning. Examples of songs that focus on
                specific vocabulary.
              </p>
              <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
                <Link href={"blog3"}>
                  <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                    Read More
                  </span>
                </Link>
              </button>
            </div>
          </div>

          {/* card four */}
          <div className=" transform translate-x-[25%] h-[500px] w-[350px] text-center rounded-[5px]">
            <div className="w-full h-full bg-[#d0bdf4] rounded-[5px] backface-hidden shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              <div className="h-[115px] w-full rounded-t-[5px] bg-[#c0ade4] border-b-2 border-[#a28089]">
                <Image
                  src={main}
                  alt=""
                  className="hover:scale-125 h-[115px] w-[115px] rounded-full p-[5px] absolute bg-[#b49cde] mt-[40px] left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div>
                <h1 className="text-[25px] pt-[75px]">
                  Improving Pronunciation through Singing:
                </h1>
              </div>
              <p className="mt-[10px] px-[35px] text-justify text-[15px]">
                Natural practice of intonation and rhythm in spoken English.The
                opportunity to mimic native speaker accents. Reinforcement of
                sounds that are challenging in English (e.g., vowel shifts, the
                "th" sound).
              </p>

              <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <Link href={"blog4"}>
                <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                  Read More
                </span>
                </Link>
              </button>
            </div>
          </div>

          {/* card five */}
          <div className="transform translate-x-[25%] h-[500px] w-[350px] text-center rounded-[5px]">
            <div className="w-full h-full bg-[#d0bdf4] rounded-[5px] backface-hidden shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              <div className="h-[115px] w-full rounded-t-[5px] bg-[#c0ade4] border-b-2 border-[#a28089]">
                <Image
                  src={main}
                  alt=""
                  className="hover:scale-125 h-[115px] w-[115px] rounded-full p-[5px] absolute bg-[#b49cde] mt-[40px] left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div>
                <h1 className="text-[25px] pt-[75px]">
                  
                Learning Idioms and Phrasal Verbs Through English Songs
                </h1>
              </div>
              <p className="mt-[10px] px-[35px] text-justify text-[15px]">
              English is full of idiomatic expressions and phrasal verbs,
                which can be difficult to learn through traditional methods. In
                this blog, explain how songs often use these expressions,
                helping learners understand them in context.
              </p>
              <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <Link href={"blog5"}>
                <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                  Read More
                </span>
                </Link>
              </button>
            </div>
          </div>

          {/* card six */}
          <div className="transform translate-x-[25%] h-[500px] w-[350px] text-center rounded-[5px]">
            <div className="w-full h-full bg-[#d0bdf4] rounded-[5px] backface-hidden shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              <div className="h-[115px] w-full rounded-t-[5px] bg-[#c0ade4] border-b-2 border-[#a28089]">
                <Image
                  src={main}
                  alt=""
                  className="hover:scale-125 h-[115px] w-[115px] rounded-full p-[5px] absolute bg-[#b49cde] mt-[40px] left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div>
                <h1 className="text-[25px] pt-[75px]">
                  Using Songs to Build Vocabulary:
                </h1>
              </div>
              <p className="mt-[10px] px-[35px] text-justify text-[15px]">
                How Music Can Expand Your English Word Bank. How catchy lyrics
                introduce new words in context. The importance of repetition in
                songs for reinforcing meaning. Examples of songs that focus on
                specific vocabulary.
              </p>
              <button className="my-5 bg-[#a28089] hover:bg-[#aa93d5] hover:text-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
                <Link href={"blog6"}>
                  <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                    Read More
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 