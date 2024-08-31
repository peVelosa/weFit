import { Variant, VariantLabels } from "framer-motion";

export default {
  button: {
    label: "adicionar ao carrinho",
    icon: "/svgs/home/cart-icon-button.svg",
  },
  animation: {
    cardsWrapper: {
      initial: "hidden" as VariantLabels,
      animate: "visible" as VariantLabels,
      variants: {
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      },
    },
    card: {
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    } as Record<string, Variant>,
  },
} as const;
