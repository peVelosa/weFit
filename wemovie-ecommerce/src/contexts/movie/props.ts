import { MovieGateway } from "./service";

export type MovieProviderProps = {
  children: React.ReactNode;
  service: MovieGateway;
};
