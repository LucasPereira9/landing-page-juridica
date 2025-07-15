import React from "react";
import * as S from "./ServiceCard.styles";
import { IconType } from "react-icons";

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
          <S.BackContent>
            <S.IconWrapper>{icon}</S.IconWrapper>
            <S.Title>{title}</S.Title>
            <S.BackButton>Contato</S.BackButton>
          </S.BackContent>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
};
