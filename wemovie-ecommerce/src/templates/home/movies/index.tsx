import * as S from "./styles";
import Image from "next/image";
import C from "./constants";
import { useCart } from "@/contexts/cart";
import { formatPrice } from "@/helpers";
import { Spinner } from "@/components/atoms/spinner";
import { Empty } from "@/components/atoms/empty";
import { useMovies } from "@/contexts/movie";

export const Movies = () => {
  const { data: movies, error, isLoading } = useMovies();
  const { getSubQuantity, addItem } = useCart();

  if (error) {
    return <Empty />;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <S.CardsWrapper
          initial={C.animation.cardsWrapper.initial}
          animate={C.animation.cardsWrapper.animate}
          variants={C.animation.cardsWrapper.variants}
        >
          {movies.map((movie) => (
            <S.Card key={movie.id} variants={C.animation.card}>
              <Image
                src={movie.image}
                alt={movie.title}
                width={147}
                height={188}
              />
              <S.Title>{movie.title}</S.Title>
              <S.Price>{formatPrice(movie.price)}</S.Price>
              <S.AddButton
                data-testid="buy-button"
                $isSelected={!!getSubQuantity(movie.id)}
                onClick={() =>
                  addItem({
                    id: movie.id,
                    price: movie.price,
                    name: movie.title,
                    image: movie.image,
                    quantity: 1,
                  })
                }
              >
                <S.ButtonIcon>
                  <Image
                    src={C.button.icon}
                    alt={C.button.label}
                    width={11.5}
                    height={12}
                  />
                  {getSubQuantity(movie.id)}
                </S.ButtonIcon>
                {C.button.label}
              </S.AddButton>
            </S.Card>
          ))}
        </S.CardsWrapper>
      )}
    </>
  );
};
