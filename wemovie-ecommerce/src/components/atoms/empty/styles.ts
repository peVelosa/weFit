import { Button } from "@/styles/components/button";
import NextImage from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 2.4rem;
  height: 100%;
  border-radius: 0.4rem;
  display: grid;
  padding: 2.4rem;
  gap: 2.4rem;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.spanishGray};
  min-height: 80svh;
`;

export const Image = styled(NextImage)`
  max-width: 100%;
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
