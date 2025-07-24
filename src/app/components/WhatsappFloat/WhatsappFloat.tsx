"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import * as S from "./WhatsappFloat.styles";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { sectors } from "@/utils/mock/mock";

export const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  const togglePanel = () => setIsOpen((v) => !v);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedOutsidePanel = panelRef.current && !panelRef.current.contains(target);
      const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(target);

      const shouldClose = clickedOutsidePanel && clickedOutsideButton;

      if (shouldClose) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <CSSTransition
        nodeRef={panelRef}
        in={isOpen}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <S.LawyersPanel ref={panelRef}>
          {sectors.map((sector) => (
            <S.VendorItem
              key={sector.id}
              href={`https://wa.me/${sector.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              aria-label={`Conversar com ${sector.name} no WhatsApp`}
            >
              <S.VendorAvatar>{sector.name[0]}</S.VendorAvatar>
              {sector.name}
            </S.VendorItem>
          ))}
        </S.LawyersPanel>
      </CSSTransition>

      <S.FloatButton
        ref={buttonRef}
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fechar menu WhatsApp" : "Abrir menu WhatsApp"}
      >
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isOpen ? "times" : "whatsapp"}
            nodeRef={iconRef}
            timeout={200}
            classNames="icon-fade"
          >
            <span ref={iconRef}>{isOpen ? <FaTimes /> : <FaWhatsapp />}</span>
          </CSSTransition>
        </SwitchTransition>
      </S.FloatButton>
    </>
  );
};
