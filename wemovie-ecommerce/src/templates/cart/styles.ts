import { Button } from "@/styles/components/button";
import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Tab = styled.h3`
  text-transform: uppercase;
`;

export const Wrapper = styled.section`
  border-radius: 0.4rem;
  display: grid;
  padding: 1.6rem;
  gap: 2.1rem;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.spanishGray};

  @media (min-width: 768px) {
    padding: 2.4rem;
    gap: 2.4rem;
  }
`;

export const BuyWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const Buy = styled(Button)`
  @media (min-width: 768px) {
    max-width: 17.3rem;
  }
`;

export const ItemText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2.4rem;
  font-weight: 700;
`;
