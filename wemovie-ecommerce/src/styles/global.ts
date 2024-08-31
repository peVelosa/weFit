import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  
  html {
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.gunmetal};
    color: ${({ theme }) => theme.white};
  }

  html, body, #__next {
    min-height: 100%;
  }

  body {
    padding-bottom: 4rem;
  }

`;
