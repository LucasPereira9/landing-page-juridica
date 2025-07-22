import styled from 'styled-components'

export const Button = styled.button`
  color: #fff;
  background-color: #333;
  border-radius: 0.2rem;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  transition: all 0.5s;
  width: 9rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

`
