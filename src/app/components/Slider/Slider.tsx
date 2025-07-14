import React from "react";
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
  return (
    <S.StyledSwiper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        style={{ width: "100%", maxHeight: "100vh" }}
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
