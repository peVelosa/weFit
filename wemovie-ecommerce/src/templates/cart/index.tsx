"use client";

import * as S from "./styles";
import C from "./constants";
import { useCart } from "@/contexts/cart";
import { formatPrice } from "@/helpers";
import { Divider } from "@/styles/components/divider";
import { Item as DesktopItem } from "./item/desktop";
import { Item as MobileItem } from "./item/mobile";
import { Bought } from "./bought";
import { Empty } from "../../components/atoms/empty";
import { useWindowSize } from "@/helpers";
import { useEffect, useState } from "react";

export const CartTemplate = () => {
  const [hasBuyed, setHasBuy] = useState<boolean>(false);
  const { itens, getTotal, buy } = useCart();
  const { width } = useWindowSize();

  useEffect(() => {
    return () => setHasBuy(false);
  }, []);

  if (itens.length === 0 && !hasBuyed) {
    return <Empty />;
  }

  if (hasBuyed) {
    return (
      <S.Wrapper>
        <Bought />
      </S.Wrapper>
    );
  }

  return (
    <>
      <S.Wrapper>
        <S.TabsWrapper>
          {C.tabs.map((tab, _index) => (
            <S.Tab key={_index}>{tab}</S.Tab>
          ))}
        </S.TabsWrapper>
        {itens.map((item) =>
          width > 768 ? (
            <DesktopItem key={item.id} {...item} />
          ) : (
            <MobileItem key={item.id} {...item} />
          )
        )}
        <Divider />
        <S.BuyWrapper>
          <S.Buy
            onClick={() => {
              setHasBuy(true);
              buy();
            }}
          >
            {C.button.buy}
          </S.Buy>
          <S.TotalWrapper>
            <S.ItemText>{C.button.total}</S.ItemText>
            <S.Price data-testid="total">{formatPrice(getTotal())}</S.Price>
          </S.TotalWrapper>
        </S.BuyWrapper>
      </S.Wrapper>
    </>
  );
};
