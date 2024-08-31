import { wait } from "@/helpers";

export type Movie = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export interface MovieGateway {
  getMovies(): Promise<{
    data: Movie[];
    error?: boolean;
  }>;
}

export class HttpMovie implements MovieGateway {
  constructor() {}

  async getMovies(): Promise<{ data: Movie[]; error?: boolean }> {
    try {
      await wait(2000);
      const response = (await fetch(
        "https://wefit-movies.vercel.app/api/movies"
      ).then((response) => response.json())) as {
        products: Movie[];
      };

      return { data: response.products, error: false };
    } catch (error) {
      console.error(error);
      return { data: [], error: true };
    }
  }
}
