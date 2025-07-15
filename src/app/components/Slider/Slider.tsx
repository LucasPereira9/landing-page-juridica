import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import * as S from './Slider.styles';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: string[];
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <S.StyledSwiper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={!isMobile}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <S.ImageWrapper
              src={src}
              alt={`Slide ${idx + 1}`}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.StyledSwiper>
  );
}
