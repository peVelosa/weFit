"use client";

import { Open_Sans as OpenSans } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { Navbar } from "@/components/atoms/navbar";
import { CartProvider } from "@/contexts/cart";
import { MovieProvider } from "@/contexts/movie";
import { Wrapper } from "@/styles/components/wrapper";
import { HttpMovie } from "@/contexts/movie/service";

const openSans = OpenSans({ subsets: ["latin"] });

const service = new HttpMovie();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <MovieProvider service={service}>
              <CartProvider>
                <GlobalStyles />
                <Navbar />
                <Wrapper>{children}</Wrapper>
              </CartProvider>
            </MovieProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
