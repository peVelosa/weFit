import { render, screen, fireEvent, act } from "@testing-library/react";

import { CartProvider } from "@/contexts/cart";
import { cartContext, type CartContext } from "@/contexts/cart/context";
import { MovieProvider } from "@/contexts/movie";
import { MovieGateway, Movie } from "@/contexts/movie/service";
import { CartTemplate } from ".";
import { formatPrice } from "@/helpers";

class MockMoviesService implements MovieGateway {
  async getMovies(): Promise<{ data: Movie[]; error?: boolean }> {
    return {
      data: [
        { id: 1, title: "Homem Aranha 1", image: "/poster1.jpg", price: 12.3 },
        { id: 2, title: "Homem Aranha 2", image: "/poster2.jpg", price: 15.5 },
        { id: 3, title: "Homem Aranha 3", image: "/poster3.jpg", price: 18.0 },
      ],
    };
  }
}

const itens = [
  {
    id: 1,
    name: "Homem Aranha 1",
    image: "/poster1.jpg",
    price: 11.4,
    quantity: 1,
  },
  {
    id: 2,
    name: "Homem Aranha 2",
    image: "/poster2.jpg",
    price: 20,
    quantity: 3,
  },
];

const mockCart = {
  addItem: jest.fn(),
  buy: jest.fn(),
  deleteItem: jest.fn(),
  getQuantity: jest.fn(),
  getSubQuantity: jest.fn(),
  getSubTotal: jest.fn(),
  getTotal: jest.fn().mockReturnValue(71.4),
  itens,
  removeItem: jest.fn(),
} as CartContext;

describe("Cart Template", () => {
  it("deve exibir tela de vazio", async () => {
    await act(async () => {
      render(
        <MovieProvider service={new MockMoviesService()}>
          <CartProvider>
            <CartTemplate />
          </CartProvider>
        </MovieProvider>
      );
    });

    expect(screen.getByTestId("empty")).toBeInTheDocument();
  });

  it("não deve mostrar a tela de vazio se tiver item no carrinho", async () => {
    await act(async () => {
      render(
        <MovieProvider service={new MockMoviesService()}>
          <cartContext.Provider
            value={{
              ...mockCart,
            }}
          >
            <CartTemplate />
          </cartContext.Provider>
        </MovieProvider>
      );
    });

    expect(screen.queryByTestId("empty")).toBeNull();
  });

  it("deve mostrar o valor total correto", async () => {
    await act(async () => {
      render(
        <MovieProvider service={new MockMoviesService()}>
          <cartContext.Provider
            value={{
              ...mockCart,
            }}
          >
            <CartTemplate />
          </cartContext.Provider>
        </MovieProvider>
      );
    });

    const totalValue = mockCart.itens.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const total = screen.getByTestId("total");
    const totalText = total.textContent?.replace(/\s+/g, "");
    const formattedTotalValue = formatPrice(totalValue);

    const normalizedExpectedText = formattedTotalValue.replace(/\s+/g, "");

    expect(totalText).toBe(normalizedExpectedText);
  });
});
