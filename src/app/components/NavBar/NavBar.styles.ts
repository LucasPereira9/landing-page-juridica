import styled, { css } from 'styled-components';

interface NavWrapperProps {
  $isScrolled: boolean;
}
interface NavWrapperProps {
  $isScrolled: boolean;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  align-items: flex-end;
  background: ${({ $isScrolled }) => 
    $isScrolled 
      ? 'linear-gradient(90deg, rgba(36, 36, 36, 1) 0%, rgba(14, 13, 13, 1) 100%)' 
      : 'linear-gradient(90deg, rgba(36, 36, 36, 0.89) 0%, rgba(14, 13, 13, 0.4) 100%)'};
  display: flex;
  justify-content: space-between;
  padding: ${({ $isScrolled }) => ($isScrolled ? '1.2rem' : '2rem')};
  margin-top: ${({ $isScrolled }) => ($isScrolled ? '0' : '2rem')};
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(12, 12, 12, 0.39);
  z-index: 100;
  overflow-x: hidden;
  transition: all 0.3s ease;
`


export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const LogoTitle = styled.span`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: 0.8rem;
  line-height: 1;
`

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

export const NavItem = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  white-space: nowrap;

  &:hover span {
    width: 100%;
  }
`

export const Underline = styled.span`
  display: block;
  height: 2px;
  width: 0;
  background-color: #ca9f62ed;
  transition: width 0.3s ease;
  margin-top: 4px;
`
