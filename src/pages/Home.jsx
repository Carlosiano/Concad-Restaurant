import React from "react";
// import component dari folder src/components
import { Jumbotron, PromoBanner, DiskonCard, Footer, FloatKeranjang } from "../components";

export default function Home() {
  return (
    <div>
      {/* jumbotron atau card selamat datang */}
      <Jumbotron />

      {/* promo banner iklan rendang sapi */}
      <PromoBanner />

      {/* diskon card itu list menu yang berdiskon */}
      <DiskonCard />

      {/* footer element paling bawah dari website */}
      <Footer />

      {/* float keranjang element yang muncul ketika ada pesanan */}
      <FloatKeranjang />
    </div>
  );
}