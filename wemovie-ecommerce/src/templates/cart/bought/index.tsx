import Image from "next/image";
import * as S from "./styles";
import C from "./constants";
import Link from "next/link";

export const Bought = () => {
  return (
    <S.Wrapper data-testid="bought">
      <S.Title>{C.text}</S.Title>
      <Image
        src={C.svg}
        width={238}
        height={247}
        alt="Pessoa segurando um cartão para indicar que a compra foi realizada com sucesso"
      />
      <S.Link as={Link} href={C.link.href}>
        {C.link.text}
      </S.Link>
    </S.Wrapper>
  );
};
