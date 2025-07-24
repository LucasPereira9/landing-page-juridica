import React, { useState } from "react";
import * as S from "./SideMenu.styles";
import { FaBars, FaTimes } from "react-icons/fa";

interface SideMenuProps {
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const SideMenu = ({ content, isOpen, setIsOpen }: SideMenuProps) => {

  return (
    <>
      <S.MenuButton onClick={() => setIsOpen(true)}>
        <FaBars size={38} color="#ca9f62ed" />
      </S.MenuButton>

      <S.Overlay open={isOpen} onClick={() => setIsOpen(false)} />

      <S.Sidebar open={isOpen}>
        <S.CloseButton onClick={() => setIsOpen(false)}>
         <FaTimes size={28} color="#ca9f62ed" />
        </S.CloseButton>
        <S.Content>{content}</S.Content>
      </S.Sidebar>
    </>
  );
};
