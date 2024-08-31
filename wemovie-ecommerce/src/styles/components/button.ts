import styled from "styled-components";

export const ResetButton = styled.button`
  background-color: transparent;
  border: none;
  width: fit-content;
  cursor: pointer;
`;

export const Button = styled(ResetButton)`
  cursor: pointer;
  width: 100%;
  border: none;
  text-transform: uppercase;
  border-radius: 0.4rem;
  height: 4rem;
  padding: 0.8rem;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.richElectricBlue};
  color: ${({ theme }) => theme.white};
  transition: background-color 0.2s;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.cGBlue};
  }
`;
