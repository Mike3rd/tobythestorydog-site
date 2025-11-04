export default function AboutToby() {
  return (
    <section className="max-w-3xl text-center py-16 px-4">
      <h2 className="text-3xl font-fredoka text-orange-600 mb-6">
        Meet Toby the Story Dog!
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Toby is a lovable rescue pup who thinks he adopted his hooman! 🐾 Full
        of curiosity, mischief, and endless tail wags, he loves adventures big
        and small.
      </p>

      {/* Condensed traits paragraph */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Toby loves the beach and sleeping • Chicken and cabbage are his
        favorites • He enjoys playing scavenger hunt for treats every night •
        Sometimes he acts like a cat 🐈
      </p>

      {/* Chat callout box at the end, before chatbox */}
      <div className="bg-accent border border-gray-300 rounded-lg p-6 mb-4 text-gray-800 shadow-sm">
        🐶 <strong>Chat with Toby!</strong> Ask him fun questions like{" "}
        <em>“What’s your favorite treat?”</em> or{" "}
        <em>“Can you tell me a silly dog story?”</em> and see his playful
        answers.
      </div>
    </section>
  );
}
