import styled from "styled-components";

export const ImageWrapper = styled.img`
  object-fit: cover;
  max-height: 100vh;
  width: 100%;
`;

export const StyledSwiper = styled.div`
  height: 100vh;

  @media (max-width: 1024px) {
    height: 39rem;
  }

  @media (max-width: 375px) {
    height: 30rem;
  }

  .swiper {
    height: 100%;
  }

  .swiper-pagination {
    margin: 0 !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ca9f62ed;
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,0.4);
    border-radius: 50%;
    padding: 22px;
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(0,0,0,0.7);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
  }

  .swiper-pagination-bullet {
    background: #ca9f62ed;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;



