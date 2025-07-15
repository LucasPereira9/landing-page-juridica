import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #fff;
  width: 100%;
`;

export const Content = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 3rem;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 6rem;
  flex: 1 1 40%;
  gap: 2rem;
`;

export const Title = styled.h2`
  color: #ca9f62ed;
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`;

export const ImageSide = styled.div`
  flex: 1 1 40%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const YearsImageWrapper = styled.div`
  position: absolute;
  top: 62%;
  left: 30%;
  transform: translate(-50%, -50%);
  border: 0.2rem solid #ca9f62ed;
  width: 18rem;
  height: 40rem;
  z-index: 10;
  overflow: hidden;
  background: transparent;
`;

export const YearsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const YearsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0.8rem;
  right: 0.8rem;
  background: rgba(255, 255, 255, 0.83);
  padding: 0.2rem 0;
  margin: 0.2rem 0;
  text-align: flex-start;
  height: 39rem;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const YearsNumber = styled.h1`
  font-size: 10rem;
  color: #000000ed;
  font-weight: 700;
`;

export const YearsLabel = styled.span`
  font-size: 2rem;
  color: #000000ed;
`;
export const SmallTitle = styled.h3`
  color: #666;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const MainTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
`;

export const Highlight = styled.span`
  font-size: 2.5rem;
  color: #ca9f62ed; 
`;

