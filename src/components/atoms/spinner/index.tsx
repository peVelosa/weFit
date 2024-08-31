import { type ReactNode } from "react";
import C from "./constants";
import * as S from "./styles";

export const Spinner = (): ReactNode => {
  return (
    <>
      <S.Spinner
        src={C.src}
        width={62.25}
        height={62.25}
        alt="Circulo girando para indicar carregamento"
      />
    </>
  );
};
