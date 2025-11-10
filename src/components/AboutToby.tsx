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
          owner of two hoomans. My hoomans call me a scaredy cat and say
          I&apos;m stubborn, but that&apos;s just because I know what I want. I
          like to start each day with zoomies, chicken treats, and deciding
          where we&apos;re going for our walk. My hoomans think they’re in
          charge, but I’ve got the leash — and the map (in my nose).
        </p>
      </div>

      {/* Toby's Traits */}
      <div className="text-gray-700 mb-8">
        <h3 className="text-2xl font-fredoka text-orange mb-3">
          Toby&apos;s Favorite Things
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

      {/* 🆕 ENHANCED CHAT CALLOUT (CLEANER DESIGN) */}
      <div className="bg-gradient-to-br from-orange/10 to-yellow-50 border-2 border-orange/20 rounded-xl p-6 mb-6 shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-3xl font-fredoka text-orange mb-2">
            Chat Live with Toby the Story Dog!
          </h3>
          <p className="text-gray-700 text-lg">
            The internet&apos;s most charming Chihuahua mix is waiting to share
            adventures with you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-2xl block mb-2">📖</span>
            <strong className="text-orange block mb-1">
              Personalized Stories
            </strong>
            <p className="text-sm text-gray-600">
              Tell Toby your name and ask about his wild adventures!
            </p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-2xl block mb-2">🦴</span>
            <strong className="text-orange block mb-1">Pack Life</strong>
            <p className="text-sm text-gray-600">
              Learn about the real Toby&apos;s pack and daily routines
            </p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-2xl block mb-2">🎭</span>
            <strong className="text-orange block mb-1">
              Meet the Characters
            </strong>
            <p className="text-sm text-gray-600">
              Hear about Cheezy Crow, Finley Cat, and more!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-fredoka text-orange mb-3 text-lg">
            💡 Fun Things to Ask Toby:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Poem about your adventures!&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Tell me about Cheezy Crow!&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;What&apos;s your favorite treat?&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Street life story!&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Tell me about Finley Cat!&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;What&apos;s the real Toby&apos;s daily routine?&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Tell me about the REAL Toby!&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Beach adventure story!&quot;
            </div>
            <div className="bg-orange/10 py-2 px-3 rounded-lg text-sm">
              &quot;Toll bridge crossing!&quot;
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="border border-orange/30 rounded-lg py-2 px-4 bg-orange/5">
            {" "}
            {/* 🆕 BORDER ADDED */}
            <p className="text-sm text-gray-600">
              <strong>🌟 Pro Tip:</strong> Start with &quot;I&apos;m
              [Name]&quot; for personalized stories!
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>📚 Did You Know?</strong> Toby The Story Dog is based on a
            real rescue Chihuahua mix named Toby! His stories come from actual
            adventures.
          </p>
        </div>
      </div>
    </section>
  );
}
