import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Essence } from "@/components/sections/Essence";
import { Accommodations } from "@/components/sections/Accommodations";
import { Dining } from "@/components/sections/Dining";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Essence />
        <Accommodations />
        <Dining />
        {/* <Testimonials /> */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
