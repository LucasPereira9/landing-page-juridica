import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const wave = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-15px);
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 40px;
  background-color: #ca9f62;
  margin: 0 6px;
  border-radius: 4px;
  animation: ${wave} 1.2s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const LoadingScreen = () => {
  return (
    <LoadingWrapper>
      <Dot />
      <Dot />
      <Dot />
    </LoadingWrapper>
  );
};
