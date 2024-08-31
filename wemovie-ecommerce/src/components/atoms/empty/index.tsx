import * as S from "./styles";
import C from "./constants";
import Link from "next/link";

export const Empty = () => {
  return (
    <S.Wrapper data-testid="empty">
      <S.Title>{C.text}</S.Title>
      <S.Image
        src={C.svg}
        width={447}
        height={266}
        alt="Pessoa segurando um cartão para indicar que a compra foi realizada com sucesso"
        style={{
          maxWidth: "100%",
        }}
      />
      <S.Link as={Link} href={C.link.href}>
        {C.link.text}
      </S.Link>
    </S.Wrapper>
  );
};
