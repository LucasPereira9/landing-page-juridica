import React from "react";
import * as S from './ContactSection.styles';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <S.SectionWrapper id="contact">
      <S.Content>
        <S.InfoWrapper>
          <S.MainTitle>
            Entre em contato conosco <br /> <S.Highlight>Estamos prontos para ajudar</S.Highlight>
          </S.MainTitle>

          <S.AddressWrapper>
            <S.IconWrapper>
              <FaMapMarkerAlt size={28} />
            </S.IconWrapper>
            <S.ContactTitle>Avenida Amazonas, 1214 - Belo Horizonte - MG</S.ContactTitle>
          </S.AddressWrapper>
        <div>
          <S.ContactGroup>
            <S.IconWrapper>
              <FaPhoneAlt size={28} />
            </S.IconWrapper>
            <S.ContactTitle>(11) 99999-9999</S.ContactTitle>
          </S.ContactGroup>

          <S.ContactGroup>
            <S.IconWrapper>
              <FaEnvelope size={28} />
            </S.IconWrapper>
            <S.ContactTitle>contato@exemplo.com</S.ContactTitle>
          </S.ContactGroup>
        </div>
        </S.InfoWrapper>
      </S.Content>
      <h2>campos de preencher</h2>
    </S.SectionWrapper>
  );
};
