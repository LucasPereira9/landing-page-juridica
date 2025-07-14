import React, { useState } from "react";
import * as S from "./SideMenu.styles";
import { FaBars, FaTimes } from "react-icons/fa";

interface SideMenuProps {
  content: React.ReactNode;
}

export const SideMenu = ({ content }: SideMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.MenuButton onClick={() => setOpen(true)}>
        <FaBars size={38} color="#ca9f62ed" />
      </S.MenuButton>

      <S.Overlay open={open} onClick={() => setOpen(false)} />

      <S.Sidebar open={open}>
        <S.CloseButton onClick={() => setOpen(false)}>
         <FaTimes size={28} color="#ca9f62ed" />
        </S.CloseButton>
        <S.Content>{content}</S.Content>
      </S.Sidebar>
    </>
  );
};
