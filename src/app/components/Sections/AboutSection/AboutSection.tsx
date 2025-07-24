import React, { useEffect, useState } from "react";
import * as S from "./AboutSection.styles";
import { AboutDescription } from "@/utils/mock/mock";
import { FadeInSection } from "../../FadeInSection/FadeInSection";

interface AboutSectionProps {
  title?: string;
  description?: string;
}

export const AboutSection = ({
  title = "Sobre Nós",
  description = AboutDescription,
}: AboutSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <S.SectionWrapper id="about">
        <FadeInSection>
      <S.Content>
        <div />
          <S.TextSide>
            <S.SmallTitle>{title}</S.SmallTitle>
            <S.MainTitle>
              Soluções Jurídicas que <S.Highlight>Fazem a Diferença</S.Highlight>
            </S.MainTitle>
            <S.Description>{description}</S.Description>
          </S.TextSide>
          <S.ImageSide>
            <S.Image src="/images/about_2.jpg" alt="Sobre nós" />
            {!isMobile && (
              <S.YearsImageWrapper>
                <S.YearsImage src="/images/top_bio.jpg" alt="Sobre nós" />
                <S.YearsOverlay>
                  <S.YearsNumber>15</S.YearsNumber>
                  <S.YearsLabel>Anos de Experiência</S.YearsLabel>
                </S.YearsOverlay>
              </S.YearsImageWrapper>
            )}
          </S.ImageSide>
      </S.Content>
        </FadeInSection>
    </S.SectionWrapper>
  );
};
