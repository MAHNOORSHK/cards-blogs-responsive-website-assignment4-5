import Image from "next/image";
import Blog2pic from "@/app/image/blog2.jpeg";

export default function Blog5() {
  return (
    <>
      <section className="w-full h-[500px] bg-[#90c3c1]">
        <div className="max-w-[1100px] m-auto w-full flex flex-col items-center pt-10 ">
          <h1 className="w-[90%] text-4xl text-[#DCAE1D] text-center mb-6 font-bold underline">
            Learning Idioms and Phrasal Verbs Through English Songs
          </h1>

          <Image
            src={Blog2pic}
            alt=""
            className="w-full h-[420px] object-fill object-center"
          />
        </div>
      </section>

      <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl font-bold p-2">
          Learning Idioms and Phrasal Verbs
        </h2>
        <p className="text-lg my-2 mx-0 px-8">
          English is full of idiomatic expressions and phrasal verbs, which can
          be difficult to learn through traditional methods. In this blog,
          explain how songs often use these expressions, helping learners
          understand them in context:
          <li className="list-disc">
            Examples of popular songs that feature common idioms (e.g., "Let it
            Be" by The Beatles for the idiom "let it be").
          </li>
          <li className="list-disc">
            How to break down the meanings of phrasal verbs in song lyrics.
          </li>
          <li className="list-disc">
            A list of songs rich in idioms and how learners can use them for
            practice.
          </li>
        </p>

        <h2 className="text-3xl font-bold p-2">
          Learning Idioms and Phrasal Verbs
        </h2>
        <p className="text-lg my-2 mx-0 px-8">
          English is full of idiomatic expressions and phrasal verbs, which can
          be difficult to learn through traditional methods. In this blog,
          explain how songs often use these expressions, helping learners
          understand them in context:
          <ul>
            <li className="list-disc">
              Examples of popular songs that feature common idioms (e.g., "Let
              it Be" by The Beatles for the idiom "let it be").
            </li>
            <li className="list-disc">
              How to break down the meanings of phrasal verbs in song lyrics.
            </li>
            <li className="list-disc">
              A list of songs rich in idioms and how learners can use them for
              practice.
            </li>
          </ul>
        </p>

        <h2 className="text-3xl font-bold p-2">
          Learning Idioms and Phrasal Verbs
        </h2>
        <p className="text-lg my-2 mx-0 px-8">
          English is full of idiomatic expressions and phrasal verbs, which can
          be difficult to learn through traditional methods. In this blog,
          explain how songs often use these expressions, helping learners
          understand them in context:
          <li className="list-disc">
            Examples of popular songs that feature common idioms (e.g., "Let it
            Be" by The Beatles for the idiom "let it be").
          </li>
          <li className="list-disc">
            How to break down the meanings of phrasal verbs in song lyrics.
          </li>
          <li className="list-disc">
            A list of songs rich in idioms and how learners can use them for
            practice.
          </li>
        </p>
      </section>
    </>
  );
}
