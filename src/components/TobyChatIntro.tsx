export default function TobyChatIntro() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-center">
      {/* 🆕 ENHANCED CHAT CALLOUT (CLEANER DESIGN) */}
      <div className="py-8">
        <div className="text-center mb-4">
          <h3 className="text-3xl font-fredoka text_hero_title mb-2">
            Chat Live with Toby the Story Dog!
          </h3>
          <p className="text-gray-700 text-lg">
            The internet&apos;s most charming Chihuahua mix is waiting to share
            adventures with you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0 p-5">
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
      </div>
    </section>
  );
}
