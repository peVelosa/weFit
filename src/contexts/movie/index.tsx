import { useCallback, useContext, useEffect, useState } from "react";
import { MovieProviderProps } from "./props";
import { movieContext } from "./context";
import { Movie } from "./service";

export const MovieProvider = ({ children, service }: MovieProviderProps) => {
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const { data, error } = await service.getMovies();

      if (error) {
        setError(true);
        return;
      }

      setIsLoading(false);
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <movieContext.Provider value={{ data, isLoading, error }}>
      {children}
    </movieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(movieContext);

  if (!context) {
    throw new Error("useCart must be used within a MovieProvider");
  }

  return context;
};
