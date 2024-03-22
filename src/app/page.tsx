import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "@/app/components/Hero";
import Tiramisu from "./components/Tiramisu";
import BehindScene from "./components/BehindScene";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tiramisu />
      <BehindScene />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
