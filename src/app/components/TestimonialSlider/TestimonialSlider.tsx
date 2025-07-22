import React from "react";
import * as S from "./TestimonialSlider.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    message: "O atendimento foi excepcional e super rápido!",
    name: "Ana Clara",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    message: "Recomendo muito! Resolveram meu problema com agilidade.",
    name: "João Pedro",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    message: "Equipe extremamente profissional e atenciosa.",
    name: "Mariana Souza",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export const TestimonialSlider = () => {
  return (
    <S.TestimonialWrapper>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <S.Quote>“</S.Quote>
            <S.Message>{testimonial.message}</S.Message>
            <S.Avatar src={testimonial.avatar} alt={testimonial.name} />
            <S.Name>{testimonial.name}</S.Name>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.TestimonialWrapper>
  );
};
