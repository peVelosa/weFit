import { type ReactNode } from "react";
import * as S from "./styles";
import C from "./constants";
import Image from "next/image";
import { useCart } from "@/contexts/cart";
import Link from "next/link";

export const Navbar = (): ReactNode => {
  const { getQuantity } = useCart();

  return (
    <>
      <S.Header>
        <S.Navbar>
          <Link href={C.title.href}>
            <S.Title>{C.title.label}</S.Title>
          </Link>
          <S.CartLink href={C.cart.href}>
            <div>
              <S.CartTitle>{C.cart.label}</S.CartTitle>
              <S.CartQuantity data-testid="navbar">
                {getQuantity()} {C.cart.quantityLabel}
              </S.CartQuantity>
            </div>
            <Image src={C.cart.src} alt={C.cart.alt} width={20} height={20} />
          </S.CartLink>
        </S.Navbar>
      </S.Header>
    </>
  );
};
