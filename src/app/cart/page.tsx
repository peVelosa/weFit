import { CartTemplate } from "@/templates/cart";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cart",
};

const Cart = (): ReactNode => {
  return <CartTemplate />;
};

export default Cart;
