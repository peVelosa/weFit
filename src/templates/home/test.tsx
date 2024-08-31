import { render, screen, fireEvent, act } from "@testing-library/react";
import { Movie, MovieGateway } from "@/contexts/movie/service";
import { MovieProvider } from "@/contexts/movie";
import { CartProvider } from "@/contexts/cart";
import { Movies } from "./movies";
import { Navbar } from "@/components/atoms/navbar";

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

describe("Movies Component", () => {
  it("deve renderizar os filmes corretamente", async () => {
    await act(async () => {
      render(
        <MovieProvider service={new MockMoviesService()}>
          <CartProvider>
            <Movies />
          </CartProvider>
        </MovieProvider>
      );
    });

    expect(screen.getByText("Homem Aranha 1")).toBeInTheDocument();
    expect(screen.getByText("Homem Aranha 2")).toBeInTheDocument();
    expect(screen.getByText("Homem Aranha 3")).toBeInTheDocument();
    expect(screen.getByText("R$ 12,30")).toBeInTheDocument();
  });

  it("deve alterar a quantidade de itens quando botão de adicionar ao carrinho clicado", async () => {
    await act(async () => {
      render(
        <MovieProvider service={new MockMoviesService()}>
          <CartProvider>
            <Movies />
          </CartProvider>
        </MovieProvider>
      );
    });

    const button = screen.getAllByTestId("buy-button")[0];

    expect(button).toHaveTextContent("0");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveTextContent("3");
  });

  it("deve alterar a quantidade de itens na navbar quando o botão de adicionar ao carrinho for clicado", async () => {
    await act(async () => {
      render(
        <MovieProvider service={new MockMoviesService()}>
          <CartProvider>
            <Navbar />
            <Movies />
          </CartProvider>
        </MovieProvider>
      );
    });

    const navbar = screen.getByTestId("navbar");

    expect(navbar).toHaveTextContent("0 Itens");
    const buttons = screen.getAllByTestId("buy-button");

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);

    expect(navbar).toHaveTextContent("3 Itens");
  });
});
