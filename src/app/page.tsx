import Hero from "@/components/Hero";
import AboutToby from "@/components/AboutToby";
import NewsletterSignup from "@/components/NewsletterSignup";
import BonusDownloads from "@/components/BonusDownloads";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero /> {/* Full-width hero */}
      <main className="flex flex-col items-center w-full">
        <AboutToby />
        <NewsletterSignup />
        <BonusDownloads />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
