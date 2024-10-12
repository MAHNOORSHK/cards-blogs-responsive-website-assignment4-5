import Image from "next/image";
import Blog1pic from "@/app/image/blog1.jpeg"

export default function Blog4(){
    return(
        <>
        <section className=" w-full h-[500px] bg-[#90c3c1]">
            <div className="max-w-[1100px] m-auto w-full flex flex-col items-center pt-10 ">
                <h1 className="w-[90%] text-4xl text-[#DCAE1D] text-center mb-6 font-bold underline">Improving Pronunciation through Singing:</h1>

                <Image src={Blog1pic} alt="" className="w-full h-[420px] object-fill object-center"/>
            </div>
        </section>

        <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
            <h2 className="text-3xl font-bold p-2">The Power of Mimicking Native Speakers</h2>
            <p className="text-lg my-2 mx-0 px-8">Here, discuss how singing along to English songs helps learners improve their pronunciation and fluency. Singing provides:

            <li className="list-disc">Natural practice of intonation and rhythm in spoken English.</li>
            <li className="list-disc">The opportunity to mimic native speaker accents.</li>
            <li className="list-disc">Reinforcement of sounds that are challenging in English (e.g., vowel shifts, the th sound).</li>
            The blog could include exercises where learners listen to specific songs and repeat difficult phrases. You might also explore karaoke apps that can help students sing in English and get real-time pronunciation feedback.

            </p>

            <h2 className="text-3xl font-bold p-2">The Power of Mimicking Native Speakers</h2>
            <p className="text-lg my-2 mx-0 px-8">Here, discuss how singing along to English songs helps learners improve their pronunciation and fluency. Singing provides:

            <li className="list-disc">Natural practice of intonation and rhythm in spoken English.</li>
            <li className="list-disc">The opportunity to mimic native speaker accents.</li>
            <li className="list-disc">Reinforcement of sounds that are challenging in English (e.g., vowel shifts, the th sound).</li>
            The blog could include exercises where learners listen to specific songs and repeat difficult phrases. You might also explore karaoke apps that can help students sing in English and get real-time pronunciation feedback.

            </p>

            <h2 className=" text-3xl font-bold p-2">The Power of Mimicking Native Speakers</h2>
            <p className="text-lg my-2 mx-0 px-8 pb-7">Here, discuss how singing along to English songs helps learners improve their pronunciation and fluency. Singing provides:

            <li className="list-disc">Natural practice of intonation and rhythm in spoken English.</li>
            <li className="list-disc">The opportunity to mimic native speaker accents.</li>
            <li className="list-disc">Reinforcement of sounds that are challenging in English (e.g., vowel shifts, the th sound).</li>
            The blog could include exercises where learners listen to specific songs and repeat difficult phrases. You might also explore karaoke apps that can help students sing in English and get real-time pronunciation feedback.

            </p>
        </section>

        </>
    )
}

