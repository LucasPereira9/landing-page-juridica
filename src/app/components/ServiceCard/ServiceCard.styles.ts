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
  border: 0.125rem dashed #ca9f62ed;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: opacity 0.6s ease, transform 0.6s ease;
  opacity: 1;
  transform: scale(1);

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
  border-radius: 0.5rem;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.8s ease, transform 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  ${CardContainer}:hover & {
    opacity: 1;
    transform: scale(1);
  }

`;export const BackContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
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
