import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Nazih A. Sidhom, CPA",
  url: "https://nazihsidhomcpa.com",
  foundingDate: "1992",
  description:
    "Full-service accounting, tax planning, and consulting firm serving businesses and individuals since 1992. Located in Cypress, California.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cypress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Cypress" },
    { "@type": "AdministrativeArea", name: "Orange County" },
    { "@type": "State", name: "California" },
  ],
  knowsAbout: [
    "Tax Planning",
    "Tax Preparation",
    "Accounting",
    "Estate Planning",
    "Cash Management",
    "Investment Services",
    "Computer Consulting",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}