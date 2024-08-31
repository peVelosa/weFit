import { Wrapper } from "@/styles/components/wrapper";
import Link from "next/link";
import styled from "styled-components";

export const Header = styled(Wrapper)``;

export const Navbar = styled.nav`
  padding: 2.4rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const CartLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  text-align: right;
  font-weight: 600;
`;

export const CartTitle = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 1.4rem;
  }
`;

export const CartQuantity = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.spanishGray};
`;
