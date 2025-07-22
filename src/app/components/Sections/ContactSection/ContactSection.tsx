import React from "react";
import * as S from './ContactSection.styles';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Input } from "../../Input/Input";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";

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
        <S.FormWrapper>
          <S.InputsRow>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Assunto" />
          </S.InputsRow>

          <S.MessageWrapper>
            <Input placeholder="Digite sua mensagem..." isMessage />
          </S.MessageWrapper>
        </S.FormWrapper>
      </S.Content>
      <PrimaryButton title="Enviar Mensagem" onClick={() => {}} />
    </S.SectionWrapper>
  );
};
