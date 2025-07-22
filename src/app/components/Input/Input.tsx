import React from "react";
import * as S from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isMessage?: boolean;
}

export const Input = ({ isMessage = false, ...rest }: InputProps) => {
  return isMessage ? (
    <S.TextArea {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
  ) : (
    <S.StyledInput {...rest} />
  );
};
