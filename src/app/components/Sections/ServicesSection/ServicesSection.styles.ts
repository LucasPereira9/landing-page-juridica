import styled from "styled-components";

export const SectionWrapper = styled.section`
  align-items: center;
  
  background: linear-gradient(90deg, rgba(66, 66, 66, 0.71) 0%, rgba(14, 13, 13, 0.81) 100%);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  color: #ca9f62ed;
  font-size: 2.8rem;
  font-weight: 700;
`;

export const SmallTitle = styled.h3`
  color: #ffffffd7;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const MainTitle = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const Highlight = styled.span`
  font-size: 2.5rem;
  color: #ca9f62ed;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff;
`;
export const CardsGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(250px, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const TestimonialImage = styled.img`
  max-width: 30rem;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

