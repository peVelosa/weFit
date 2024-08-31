import styled from "styled-components";
import { Button } from "@/styles/components/button";
import { motion } from "framer-motion";

export const CardsWrapper = styled(motion.section)`
  display: grid;
  gap: 2.4rem;
  padding: 0 1.6rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
`;

export const Card = styled(motion.div)`
  border-radius: 0.4rem;
  display: grid;
  place-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  font-weight: 700;
`;

export const AddButton = styled(Button)<{ $isSelected: boolean }>`
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.islamicGreen : theme.richElectricBlue};

  &:hover {
    background-color: ${({ theme }) => theme.cGBlue};
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 1.6rem;
`;
