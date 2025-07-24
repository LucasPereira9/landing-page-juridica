import styled from "styled-components";

export const FloatButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25d366;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: background-color 0.3s ease;
  z-index: 99999;

  &:hover {
    background-color: #1ebe57;
  }

  svg {
    pointer-events: none;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .icon-fade-enter {
    opacity: 0;
    transform: scale(0.8);
  }
  .icon-fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 200ms, transform 200ms;
  }
  .icon-fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .icon-fade-exit-active {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 200ms, transform 200ms;
  }
`;


export const LawyersPanel = styled.div.attrs({
  className: "lawyers-panel",
})`
  position: fixed;
  bottom: 6.5rem;
  right: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 280px;
  max-height: 320px;
  overflow-y: auto;
  padding: 1rem;
  z-index: 99999;

  &.slide-enter {
    opacity: 0;
    transform: translateY(15px);
  }
  &.slide-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.slide-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.slide-exit-active {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const VendorItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  color: #222;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const VendorAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #25d366;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  user-select: none;
`;
