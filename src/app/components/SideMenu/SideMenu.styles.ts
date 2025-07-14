import styled, { keyframes } from "styled-components";

interface SidebarProps {
  open: boolean;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const MenuButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border: none;
  color: #ca9f62ed;
  cursor: pointer;
`;

export const Overlay = styled.div<SidebarProps>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 150;
`;

export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: #242424;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  padding: 2rem;
  z-index: 200;
  transform: translateX(${({ open }) => (open ? "0" : "100%")});
  animation: ${({ open }) => (open ? slideIn : slideOut)} 0.3s forwards;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: #ca9f62ed;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 2rem;
  color: #fff;
  flex: 1;
  overflow-y: auto;
`;
