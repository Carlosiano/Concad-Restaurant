import React from "react";
import { Jumbotron, PromoBanner, DiskonCard, Footer, FloatKeranjang } from "../components";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <PromoBanner />
      <DiskonCard />
      <Footer />
      <FloatKeranjang />
    </div>
  );
}
