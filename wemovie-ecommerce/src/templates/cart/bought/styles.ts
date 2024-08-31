import { Button } from "@/styles/components/button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 2.4rem;
  height: 100%;
  min-height: 80svh;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  text-align: center;
`;

export const Link = styled(Button)`
  width: fit-content;
  margin: 0 auto;
  width: 17rem;
`;
