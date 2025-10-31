import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-primary to-accent flex flex-col items-center text-center relative overflow-hidden">
      {/* Book Cover Placeholder */}
      <div className="mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
        <Image
          src="/book-cover.webp"
          alt="Toby Adopts a Hooman"
          width={360}
          height={360}
          className="rounded-lg shadow-2xl mx-auto"
        />
      </div>

      {/* Heading */}
      <h1 
      style={{ color: "#122D64" }}
      className="text-4xl sm:text-5xl md:text-6xl font-fredoka mb-4 text-gray-900 leading-tight">
        Toby Adopts a Hooman
      </h1>

      {/* Subtitle */}
      <p 
      className="text-gray-900 text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto px-4">
        A heartwarming tale for kids and dog lovers! <br />
        Join his adventures and follow on social media: <strong>@TobyTheStoryDog</strong>
      </p>

      {/* CTA Button */}
      <a
        href="#get-the-book"
        className="px-8 py-4 bg-buttons text-white rounded-full font-fredoka text-lg sm:text-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
      >
        Get the Book
      </a>
    </section>
  );
}