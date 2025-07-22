import styled, { css } from "styled-components";

const sharedStyles = css`
  width: 100%;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background-color: #1f1f1f79;
  color: #ffffff;
  font-size: 1rem;
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #ca9f62;
    box-shadow: 0 0 8px rgba(202, 159, 98, 0.5), 0 0 3px rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const StyledInput = styled.input`
  ${sharedStyles}
`;

export const TextArea = styled.textarea`
  ${sharedStyles}
  resize: vertical;
  min-height: 150px;
  max-height: 300px;
  line-height: 1.5;
`;
