import styled from "styled-components";

export const CardContainer = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  perspective: 62.5rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: rgba(24, 24, 24, 0.62);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: opacity 0.6s ease, transform 0.6s ease;
  opacity: 1;
  transform: scale(1);
  overflow: hidden;

  ${CardContainer}:hover & {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #fff;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  color: #fff;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  max-width: 80%;
  text-align: center;
`;

export const CardBack = styled.div<{ image: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.8s ease, transform 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${CardContainer}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &::before,
  &::after,
  .border-left,
  .border-right {
    content: '';
    position: absolute;
    background-color: #d4a96e;
    transition: all 0.8s ease;
    z-index: 1;
  }

  &::before {
    top: 0;
    left: 50%;
    width: 0%;
    height: 2px;
    transform: translateX(-50%);
  }

  &::after {
    bottom: 0;
    right: 50%;
    width: 0%;
    height: 2px;
    transform: translateX(50%);
  }

  .border-left {
    left: 0;
    top: 50%;
    width: 2px;
    height: 0%;
    transform: translateY(-50%);
  }

  .border-right {
    right: 0;
    bottom: 50%;
    width: 2px;
    height: 0%;
    transform: translateY(50%);
  }

  ${CardContainer}:hover &::before,
  ${CardContainer}:hover &::after {
    width: 100%;
  }

  ${CardContainer}:hover & .border-left,
  ${CardContainer}:hover & .border-right {
    height: 100%;
  }
`;

export const BackContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
`;

export const BackButton = styled.button`
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 100%;
  max-width: 12rem;
`;
