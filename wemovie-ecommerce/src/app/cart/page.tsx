import { CartTemplate } from "@/templates/cart";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cart - Teste Front React WeFit",
  description: "Página de carrinho de compras",
  keywords: ["carrinho", "filmes", "compras"],
};

const Cart = (): ReactNode => {
  return <CartTemplate />;
};

export default Cart;
