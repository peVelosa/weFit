import "styled-components";

export const theme = {
  white: "#fff",
  black: "#000",
  richElectricBlue: "#009edd",
  gunmetal: "#2f2e41",
  cGBlue: "#0073a1",
  islamicGreen: " #039b00",
  spanishGray: "#999",
  lightSilver: "#d9d9d9",
};

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
