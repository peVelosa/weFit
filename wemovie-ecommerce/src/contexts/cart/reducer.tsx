import { useReducer } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartAction =
  | {
      type: "ADD";
      payload: CartItem;
    }
  | {
      type: "REMOVE" | "DELETE";
      payload: {
        id: number;
      };
    }
  | {
      type: "BUY";
      payload: null;
    };

const initialState: CartItem[] = [];

export const reducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD": {
      if (!action.payload) return state;
      const existingItem = state.find((item) => item.id === action.payload?.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE": {
      if (!action.payload) return state;

      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem && existingItem.quantity > 1) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return state.filter((item) => item.id !== action.payload.id);
    }
    case "DELETE": {
      if (!action.payload) return state;
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "BUY": {
      return [];
    }
    default:
      return state;
  }
};

export const useCartReducer = () => {
  return useReducer(reducer, initialState);
};
