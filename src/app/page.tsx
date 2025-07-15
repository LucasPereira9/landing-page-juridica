"use client";

import { CarrouselImages } from "@/utils/mock/options";
import { NavBar } from "./components/NavBar/NavBar";
import { ImageSlider } from "./components/Slider/Slider";
import { navItems } from "@/utils/mock/navItems";
import { AboutSection } from "./components/Sections/AboutSection/AboutSection";

export default function Home() {
  return (
    <>
      <NavBar items={navItems} />

      <div id="home" style={{ height: "100vh" }}>
        <ImageSlider images={CarrouselImages} />
      </div>

      <AboutSection />

      <section id="services" style={{ height: "100vh" }}>
        <h1>Serviços</h1>
      </section>

      <section id="contact" style={{ height: "100vh" }}>
        <h1>Contato</h1>
      </section>
    </>
  );
}
