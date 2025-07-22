"use client";

import { NavBar } from "./components/NavBar/NavBar";
import { ImageSlider } from "./components/Slider/Slider";
import { navItems } from "@/utils/mock/navItems";
import { AboutSection } from "./components/Sections/AboutSection/AboutSection";
import { useEffect, useState } from "react";
import { CarrouselImagesMobile, CarrouselImagesWeb } from "@/utils/mock/images";
import { ServicesSection } from "./components/Sections/ServicesSection/ServicesSection";
import { ContactSection } from "./components/Sections/ContactSection/ContactSection";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1240);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);
        
  return (
    <>
      <NavBar items={navItems} />
      <section id="home">
        <ImageSlider images={isMobile ? CarrouselImagesMobile : CarrouselImagesWeb} />
      </section>
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
