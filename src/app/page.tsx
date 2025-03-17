import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Navbar />
      <HeroSection />

    </div>
  );
}
