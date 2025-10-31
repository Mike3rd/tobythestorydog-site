import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-hero-bg)" }}
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-accent rounded-full opacity-30 -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow rounded-full opacity-20 translate-x-12 translate-y-12"></div>

      {/* Inner Content Wrapper (aligns with site padding) */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        {/* Book Cover */}
        <div className="mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src="/book-cover.png"
            alt="Toby Adopts a Hooman"
            width={240}
            height={360}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-fredoka mb-4 text-white leading-tight">
          Toby Adopts a Hoomands 🐾
        </h1>

        {/* Subtitle */}
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
          A heartwarming tale for kids and dog lovers! <br />
          Follow Toby’s adventures and join his fans on social media: <strong>@TobyTheStoryDog</strong>.
        </p>

        {/* CTA Button */}
        <button
          className="px-8 py-4 rounded-full text-white font-fredoka shadow-lg text-lg sm:text-xl transition-colors duration-300 hover:brightness-110"
          style={{ backgroundColor: "var(--color-buttons)" }}
        >
          Get the Book
        </button>
      </div>
    </section>
  );
}
