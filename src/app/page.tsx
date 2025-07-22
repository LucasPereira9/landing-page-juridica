"use client";

import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ImageSlider } from "./components/Slider/Slider";
import { navItems } from "@/utils/mock/navItems";
import { AboutSection } from "./components/Sections/AboutSection/AboutSection";
import { CarrouselImagesMobile, CarrouselImagesWeb } from "@/utils/mock/images";
import { ServicesSection } from "./components/Sections/ServicesSection/ServicesSection";
import { ContactSection } from "./components/Sections/ContactSection/ContactSection";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1240);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.scrollTo({ top: 0, behavior: "auto" });

    const onLoadComplete = () => setIsPageLoaded(true);

    if (document.readyState === "complete") {
      onLoadComplete();
    } else {
      window.addEventListener("load", onLoadComplete);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("load", onLoadComplete);
    };
  }, []);

  if (!isPageLoaded) return <LoadingScreen />;

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
