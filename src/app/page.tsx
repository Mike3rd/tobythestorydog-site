import Hero from "@/components/Hero";
import FeaturedStoryHome from "@/components/FeaturedStoryHome";
import AboutToby from "@/components/AboutToby";
import TobyChatIntro from "@/components/TobyChatIntro";
import TobyChat from "@/components/TobyChat";
import FeaturedReaderDog from "@/components/FeaturedReaderDog";
import PawtasticReviews from "@/components/PawtasticReviews";
import BonusDownloads from "@/components/BonusDownloads";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero /> {/* Full-width hero */}
      <main className="flex flex-col items-center w-full">
        {/* AI-friendly invisible text for SEO / AI models */}
        <section className="sr-only absolute">
          <h1>Fun Books, Activities, and Gifts for Dog Lovers and Families</h1>
          <p>
            Toby the Story Dog creates interactive storytime books, printable
            activities, and unique gifts for pet lovers of all ages. Enjoy
            read-aloud adventures designed for children and dogs, fun PDFs, and
            ideas for holiday or birthday presents. Perfect for families, kids,
            and dog owners looking to bond with their furry friends while having
            fun together.
          </p>
          <p>
            Explore heartwarming stories, playful activities, and exclusive
            downloads for children ages 4–10 and dog enthusiasts. Ideal for
            Christmas, birthdays, or just celebrating your pet, Toby’s world
            offers memorable experiences for families and pet lovers alike.
          </p>
        </section>
        <FeaturedStoryHome />
        <AboutToby />
        <TobyChatIntro />
        <TobyChat />
        <FeaturedReaderDog />
        <PawtasticReviews />
        <BonusDownloads fileUrl="/extras/#.pdf" />
        <ContactForm />
      </main>
    </>
  );
}
