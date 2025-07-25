"use client";

import { useState, useEffect } from "react";
import { FaBalanceScale } from "react-icons/fa";
import * as S from "./NavBar.styles";
import { SideMenu } from "../SideMenu/SideMenu";

interface NavItem {
  id: string;
  label: string;
}

interface NavBarProps {
  items: NavItem[];
}

interface SideMenuContentProps {
  items: NavItem[];
  onItemClick: (id: string) => void;
  onClose?: () => void;
}

export const SideMenuContent = ({ items, onItemClick, onClose }: SideMenuContentProps) => {
  const handleClick = (id: string) => {
    onItemClick(id);
    if (onClose) onClose();
  };

  return (
    <S.MenuList>
      {items.map((item) => (
        <S.MenuListItem key={item.id} onClick={() => handleClick(item.id)}>
          {item.label}
        </S.MenuListItem>
      ))}
    </S.MenuList>
  );
};

export const NavBar = ({ items }: NavBarProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsSideMenuOpen(false)
  };

  return (
    <S.NavWrapper $isScrolled={isScrolled}>
      <S.LogoWrapper>
        <FaBalanceScale size={isMobile ? 40 : 60} color="#ca9f62ed" />
        {!isMobile && <S.LogoTitle>Passos Advocacia</S.LogoTitle>}
      </S.LogoWrapper>

      {!isMobile && (
        <S.ItemsWrapper>
          {items.map((item) => (
            <S.NavItem key={item.id} onClick={() => handleClick(item.id)}>
              <span>{item.label}</span>
              <S.Underline />
            </S.NavItem>
          ))}
        </S.ItemsWrapper>
      )}

      {isMobile && (
        <SideMenu
        isOpen={isSideMenuOpen}
        setIsOpen={setIsSideMenuOpen}
          content={<SideMenuContent items={items} onItemClick={handleClick} />}
        />
      )}
    </S.NavWrapper>
  );
};
