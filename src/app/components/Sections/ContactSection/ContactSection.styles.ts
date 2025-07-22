import styled from "styled-components";

export const SectionWrapper = styled.section`
  background: linear-gradient(90deg, rgba(66, 66, 66, 0.71) 0%, rgba(14, 13, 13, 0.81) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  flex: 1;
  padding: 4rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 82%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  width: 100%;
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

export const ContactTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
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
  flex-wrap: wrap;
`;
