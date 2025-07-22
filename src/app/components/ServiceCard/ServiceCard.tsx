import React from "react";
import * as S from "./ServiceCard.styles";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export interface ServiceCardProps {
  image: string;
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const ServiceCard = ({ image, icon, title, description }: ServiceCardProps) => {
  return (
    <S.CardContainer>
      <S.CardInner>
        <S.CardFront>
          <S.IconWrapper>{icon}</S.IconWrapper>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.CardFront>
        <S.CardBack image={image}>
          <div className="border-left" />
          <div className="border-right" />
          <S.BackContent>
            <S.IconWrapper>{icon}</S.IconWrapper>
            <S.Title>{title}</S.Title>
            <PrimaryButton title="Contato" onClick={() => {}} />
          </S.BackContent>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
};
