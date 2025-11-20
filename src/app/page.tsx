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
        <AboutToby />
        <FeaturedStoryHome />
        <TobyChatIntro />
        <TobyChat />
        <FeaturedReaderDog />
        <PawtasticReviews />
        <BonusDownloads fileUrl="/extras/#.pdf" />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
