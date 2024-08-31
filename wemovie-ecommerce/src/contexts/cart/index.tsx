import { useContext } from "react";
import { CartProviderProps } from "./props";
import { cartContext } from "./context";
import { CartItem, useCartReducer } from "./reducer";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [itens, dispatch] = useCartReducer();

  const addItem = (item: CartItem) => dispatch({ type: "ADD", payload: item });

  const removeItem = (id: CartItem["id"]) =>
    dispatch({ type: "REMOVE", payload: { id } });

  const deleteItem = (id: CartItem["id"]) =>
    dispatch({ type: "DELETE", payload: { id } });

  const getTotal = () => {
    return itens.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getSubQuantity = (id: number) => {
    const item = itens.find((item) => item.id === id);

    if (!item) return 0;

    return item.quantity;
  };

  const getQuantity = () => {
    return itens.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getSubTotal = (id: number) => {
    const item = itens.find((item) => item.id === id);

    if (!item) return 0;

    return item.price * item.quantity;
  };

  const buy = () => {
    dispatch({ type: "BUY", payload: null });
  };

  return (
    <cartContext.Provider
      value={{
        itens,
        addItem,
        deleteItem,
        removeItem,
        getTotal,
        getSubTotal,
        buy,
        getSubQuantity,
        getQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
