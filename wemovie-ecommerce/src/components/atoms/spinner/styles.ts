import styled, { keyframes } from "styled-components";
import Image from "next/image";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(Image)`
  display: block;
  animation: ${rotate} 2s linear infinite;
  margin: 4rem auto 0;
`;
