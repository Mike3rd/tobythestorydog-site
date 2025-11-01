import Hero from "@/components/Hero";
import AboutToby from "@/components/AboutToby";
import TobyChat from "@/components/TobyChat";
import Reviews from "@/components/Reviews";
import BonusDownloads from "@/components/BonusDownloads";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero /> {/* Full-width hero */}
      <main className="flex flex-col items-center w-full">
        <AboutToby />
 <TobyChat />
        <Reviews />
        
         <BonusDownloads />
         <ContactForm />
        <Footer />
      </main>
    </>
  );
}
