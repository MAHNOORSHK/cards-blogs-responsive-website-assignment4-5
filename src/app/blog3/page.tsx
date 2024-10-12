import Image from "next/image";
import Blog3pic from "@/app/image/blog3.png"

export default function Blog3(){
    return(
        <>
        <section className="w-full h-[500px] bg-[#90c3c1]">
            <div className=" max-w-[1100px] m-auto w-full flex flex-col items-center pt-10 ">
                <h1 className="w-[90%] text-4xl text-[#DCAE1D] text-center mb-6 font-bold underline">Using Songs to Build Vocabulary</h1>

                <Image src={Blog3pic} alt="" className="w-full h-[420px] object-fill object-center"/>
            </div>
        </section>

        <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
            <h2 className="text-3xl font-bold p-2">How Music Can Expand Your English Word Bank</h2>
            <p className="text-lg my-2 mx-0 px-8">In this blog, explore how English learners can use songs to expand their vocabulary. You can discuss:
            <ul>
            <li className="list-disc">How catchy lyrics introduce new words in context.</li>
            <li className="list-disc">The importance of repetition in songs for reinforcing meaning.</li>
            <li className="list-disc">Examples of songs that focus on specific vocabulary (e.g., body parts, emotions, weather).</li>
            <li className="list-disc">How learners can create their own vocabulary playlists based on the level of difficulty or topic.</li>
            </ul>
            This blog could also recommend popular English songs with simple, clear lyrics for beginner and intermediate learners, such as classic pop songs or children's music.
            </p>

            <h2 className="text-3xl font-bold p-2">How Music Can Expand Your English Word Bank</h2>
            <p className="text-lg my-2 mx-0 px-8">In this blog, explore how English learners can use songs to expand their vocabulary. You can discuss:
            <ul>
            <li className="list-disc">How catchy lyrics introduce new words in context.</li>
            <li className="list-disc">The importance of repetition in songs for reinforcing meaning.</li>
            <li className="list-disc">Examples of songs that focus on specific vocabulary (e.g., body parts, emotions, weather).</li>
            <li className="list-disc">How learners can create their own vocabulary playlists based on the level of difficulty or topic.</li>
            </ul>
            This blog could also recommend popular English songs with simple, clear lyrics for beginner and intermediate learners, such as classic pop songs or children's music.
            </p>

            <h2 className="text-3xl font-bold p-2">How Music Can Expand Your English Word Bank</h2>
            <p className="text-lg my-2 mx-0 px-8">In this blog, explore how English learners can use songs to expand their vocabulary. You can discuss:
            <ul>
            <li className="list-disc">How catchy lyrics introduce new words in context.</li>
            <li className="list-disc">The importance of repetition in songs for reinforcing meaning.</li>
            <li className="list-disc">Examples of songs that focus on specific vocabulary (e.g., body parts, emotions, weather).</li>
            <li className="list-disc">How learners can create their own vocabulary playlists based on the level of difficulty or topic.</li>
            </ul>
            This blog could also recommend popular English songs with simple, clear lyrics for beginner and intermediate learners, such as classic pop songs or children's music.
            </p>
        </section>

        </>
    )
}

