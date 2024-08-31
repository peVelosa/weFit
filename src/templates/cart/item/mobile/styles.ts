import { ResetButton } from "@/styles/components/button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const ItemLabelDiv = styled.div`
  flex-grow: 2;
  display: grid;
  row-gap: 1.6rem;
  color: ${({ theme }) => theme.black};
  grid-template-columns: repeat(2, 1fr);
`;

export const SubTotal = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.spanishGray};
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-weight: 700;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Delete = styled(ResetButton)`
  position: absolute;
  top: 0;
  right: 0;
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
