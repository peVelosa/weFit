import { createContext } from "react";
import { CartItem } from "./reducer";

export type CartContext = {
  itens: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  deleteItem: (id: number) => void;
  getSubTotal: (id: number) => number;
  getTotal: () => number;
  buy: () => void;
  getSubQuantity: (id: number) => number;
  getQuantity: () => number;
};

export const cartContext = createContext({} as CartContext);
