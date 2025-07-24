import styled from "styled-components";

export const SectionWrapper = styled.section`
  align-items: center;
  align-content: center;
  background-color: #ffffff9c;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4rem 1rem;
    @media (max-width: 768px) {
      padding-top: 6rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 65%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  justify-content: space-around;
  width: 90%;
   @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const MainTitle = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: #181818d3;
  margin-bottom: 1rem;
`;

export const Highlight = styled.span`
  font-size: 2rem;
  color: #ca9f62ed;
`;

export const ContactTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  color: #181818d3;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  color: #ca9f62;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactGroup = styled.div`
  align-items: center;
  display: flex;
  margin-top: 0.6rem;
  gap: 0.75rem;
`;

export const AddressWrapper = styled(ContactGroup)`
  align-items: flex-start;
  display: flex;
`;
export const FormWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;

  h2 {
    color: #181818a8;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const InputsRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MessageWrapper = styled.div`
  margin-top: 1rem;
`;

