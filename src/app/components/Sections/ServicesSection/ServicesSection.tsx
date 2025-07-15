import React from "react";
import * as S from './ServicesSection.styles'

interface AboutSectionProps {
  title?: string;
}

export const ServicesSection = ({
  title = "Serviços",
}: AboutSectionProps) => {
    
  return (
    <S.SectionWrapper id="about">
      <S.Content>
        <div />
        <S.TextSide>
          <S.SmallTitle>{title}</S.SmallTitle>
          <S.MainTitle>
            Especialistas em transformar desafios <br /> <S.Highlight>em soluções</S.Highlight>
          </S.MainTitle>
        </S.TextSide>
      </S.Content>
    </S.SectionWrapper>
  );
};
