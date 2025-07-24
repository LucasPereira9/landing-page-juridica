import styled from "styled-components";

export const TestimonialWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 45rem;
  height: 30rem;
  background: linear-gradient(135deg, #1a1a1a, #333333);
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  color: #fff;

    @media (max-width: 768px) {
    max-width: 80%;
    padding: 1rem;
  }

  @media (max-width: 425px) {
    max-width: 20rem;
    padding: 1rem;
  }
  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swiper-wrapper {
    display: flex;
    transition-timing-function: ease-in-out !important;
  }

  .swiper-slide {
    width: 100% !important;
    flex-shrink: 0;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-pagination-bullet {
    background-color: #ca9f62;
  }
`;

export const Quote = styled.span`
  font-size: 14rem;
  color: #ca9f62;
  height: 8rem;
  line-height: 1;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.3rem;
  color: #ddd;
  margin-bottom: 2rem;
  max-height: 180px;
  overflow-y: auto;
  padding: 0 1rem;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid #ca9f62;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ca9f62;
`;
