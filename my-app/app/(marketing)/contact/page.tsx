import ContactHero from "@/components/sections/contact/ContactHero";
import ContactGrid from "@/components/sections/contact/ContactGrid";
import GlobalLocations from "@/components/sections/contact/GlobalLocations";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactGrid />
      <GlobalLocations />
      <ContactForm />
    </>
  );
}

