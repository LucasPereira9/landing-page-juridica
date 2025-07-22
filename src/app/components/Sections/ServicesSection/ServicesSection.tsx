import React from "react";
import * as S from './ServicesSection.styles';
import { ServiceCard } from "../../ServiceCard/ServiceCard";
import { servicesMock } from "@/utils/mock/services";
import { TestimonialSlider } from "../../TestimonialSlider/TestimonialSlider"; // 👈 novo import

interface AboutSectionProps {
  title?: string;
}

export const ServicesSection = ({
  title = "Serviços",
}: AboutSectionProps) => {
  return (
    <S.SectionWrapper id="services">
      <S.Content>
        <div />
        <S.TextSide>
          <S.SmallTitle>{title}</S.SmallTitle>
          <S.MainTitle>
            Especialistas em transformar desafios <br /> <S.Highlight>em soluções</S.Highlight>
          </S.MainTitle>
        </S.TextSide>

        <S.CardsGrid>
          {servicesMock.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </S.CardsGrid>
        <TestimonialSlider />
      </S.Content>
    </S.SectionWrapper>
  );
};
