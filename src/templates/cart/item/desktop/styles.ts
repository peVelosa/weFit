import { ResetButton } from "@/styles/components/button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ItemLabelDiv = styled.div`
  display: grid;
  align-items: center;
  color: ${({ theme }) => theme.black};
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-weight: 700;
`;

export const Name = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Delete = styled(ResetButton)`
  margin-left: auto;
`;

export const Quantity = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.1rem;
`;

export const QuantityValue = styled.p`
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.lightSilver};
  width: 6.2rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

export const QuantityButton = styled(ResetButton)``;
