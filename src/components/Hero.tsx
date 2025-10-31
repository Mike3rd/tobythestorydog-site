export default function Hero() {
  return (
    <section
      className="w-full py-20 text-center"
      style={{ backgroundColor: "var(--color-hero-bg)" }}
    >
      <h1 className="text-5xl font-fredoka mb-4 text-white">
        Toby Adopts a Hooman 🐾
      </h1>
      <p className="text-white text-lg mb-6">
        A heartwarming tale for kids and dog lovers everywhere.
      </p>
      <button
        className="px-8 py-3 rounded-full text-white font-fredoka shadow"
        style={{ backgroundColor: "var(--color-buttons)" }}
      >
        Get the Book
      </button>
    </section>
  );
}
