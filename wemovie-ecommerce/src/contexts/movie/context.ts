import { createContext } from "react";
import { Movie } from "./service";

type MovieContext = {
  data: Movie[];
  isLoading: boolean;
  error: boolean;
};

export const movieContext = createContext({} as MovieContext);
