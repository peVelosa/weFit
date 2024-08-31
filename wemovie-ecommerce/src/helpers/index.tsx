import { useState, useEffect } from "react";

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
