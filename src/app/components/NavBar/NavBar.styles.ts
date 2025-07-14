import styled from 'styled-components';

export const NavWrapper = styled.div`
  align-items: flex-end;
  background: linear-gradient(90deg, rgba(36, 36, 36, 0.89) 0%, rgba(14, 13, 13, 0.4) 100%);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 2rem;
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(12, 12, 12, 0.93);
  z-index: 100;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
export const LogoTitle = styled.span`
  color: #fff;
  font-size: 2.6rem;
  font-weight: 600;
  margin-left: 0.8rem;
  line-height: 1;
`

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 2rem;
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
`;
