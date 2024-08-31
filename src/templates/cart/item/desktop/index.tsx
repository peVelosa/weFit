import { useCart } from "@/contexts/cart";
import { ItemProps } from "../props";
import * as S from "./styles";
import Image from "next/image";
import { formatPrice } from "@/helpers";
import C from "../constants";

export const Item = ({ id, name, image, price, quantity }: ItemProps) => {
  const { getSubTotal, addItem, removeItem, deleteItem } = useCart();

  return (
    <S.Wrapper>
      <S.ItemLabelDiv>
        <S.Product>
          <Image
            src={image}
            width={91}
            height={114}
            alt={"Poster do filme" + name}
          />
          <div>
            <S.Name>{name}</S.Name>
            <S.Price>{formatPrice(price)}</S.Price>
          </div>
        </S.Product>
      </S.ItemLabelDiv>
      <S.ItemLabelDiv>
        <S.Quantity>
          <S.QuantityButton onClick={() => removeItem(id)}>
            <Image
              src={C.minus}
              width={18}
              height={18}
              alt="Remover uma unidade do item do carrinho"
            />
          </S.QuantityButton>
          <S.QuantityValue>{quantity}</S.QuantityValue>
          <S.QuantityButton
            onClick={() => {
              addItem({
                id,
                name,
                image,
                price,
                quantity,
              });
            }}
          >
            <Image
              src={C.plus}
              width={18}
              height={18}
              alt="Adicionar uma unidade do item do carrinho"
            />
          </S.QuantityButton>
        </S.Quantity>
      </S.ItemLabelDiv>
      <S.ItemLabelDiv>
        <S.Price>{formatPrice(getSubTotal(id))}</S.Price>
      </S.ItemLabelDiv>
      <S.ItemLabelDiv>
        <S.Delete onClick={() => deleteItem(id)}>
          <Image
            src={C.trash}
            width={18}
            height={18}
            alt="Excluir o item do carrinho"
          />
        </S.Delete>
      </S.ItemLabelDiv>
    </S.Wrapper>
  );
};
