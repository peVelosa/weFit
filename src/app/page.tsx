import { type Metadata } from "next";
import { type ReactNode } from "react";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
};

const Home = (): ReactNode => {
  return <HomeTemplate />;
};

export default Home;
