import { FaPaw } from "react-icons/fa";
import Image from "next/image";

export default function AboutToby() {
  return (
    <section className="max-w-3xl mx-auto text-center py-16 px-4">
      <h2 className="text-3xl font-fredoka text-orange mb-8">
        Meet Toby the Story Dog!
      </h2>

      {/* Intro with image and text side-by-side */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:text-left text-gray-700 leading-relaxed mb-8">
        <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6 flex justify-center">
          <Image
            src="/headshot_1.png"
            alt="Toby the Story Dog"
            width={160}
            height={160}
            className="rounded-full shadow-md object-cover"
          />
        </div>
        <p className="md:w-2/3 text-lg">
          Hi, I’m Toby — full-time napper, part-time cat impersonator, and proud
          owner of two hoomans. My hoomans call me a scaredy cat and a little
          stubborn sometimes, but that’s just because I know what I want. I like
          to start each day with zoomies, chicken treats, and deciding where
          we’re going for our walk. My hoomans thinks they’re in charge, but
          I’ve got the leash — and the map (in my nose).
        </p>
      </div>

      {/* Toby's Traits */}
      <div className="text-gray-700 mb-8">
        <h3 className="text-2xl font-fredoka text-orange mb-3">
          Toby’s Favorite Things
        </h3>
        <ul className="space-y-2 text-left inline-block">
          <li className="flex items-start">
            <FaPaw className="text-orange mt-1 mr-2 flex-shrink-0" />
            <span>
              I love car rides to the beach almost as much as I love the beach.
            </span>
          </li>
          <li className="flex items-start">
            <FaPaw className="text-orange mt-1 mr-2 flex-shrink-0" />
            <span>
              Chicken, cabbage, and cheese — my holy trinity of treats.
            </span>
          </li>
          <li className="flex items-start">
            <FaPaw className="text-orange mt-1 mr-2 flex-shrink-0" />
            <span>
              Every night, my hooman hides Crunchy O’s around the living room so
              I can play scavenger hunt. (I always win.)
            </span>
          </li>
          <li className="flex items-start">
            <FaPaw className="text-orange mt-1 mr-2 flex-shrink-0" />
            <span>
              Sometimes I act like a cat — probably because I like them more
              than I’m supposed to.
            </span>
          </li>
        </ul>
      </div>

      {/* Chat callout box at the end, before chatbox */}
      <div className="bg-accent border border-gray-300 rounded-lg p-6 mb-4 text-gray-800 shadow-sm text-lg">
        <p>
          🐶 <strong>Chat with Toby!</strong> Ask him fun questions like{" "}
          <em>“What’s your favorite treat?”, “Who’s your best friend?”</em> or{" "}
          <em>“Can you tell me a funny dog story?”</em> and see his playful
          answers.
        </p>
      </div>
      {/* Disclaimer */}
      <p className="text-gray-500 text-sm mt-3">
        *Toby’s replies are powered by AI for entertainment and educational fun
        — not every answer is guaranteed to be factual.*
      </p>
    </section>
  );
}
