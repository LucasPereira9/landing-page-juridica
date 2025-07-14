"use client"
import { CarrouselImages } from "@/utils/mock/options";
import { NavBar } from "./components/NavBar/NavBar";
import { ImageSlider } from "./components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <ImageSlider images={CarrouselImages} />
      <NavBar />
    </div>
  );
}
