import React, { useState, useEffect } from "react";
import { SlideMenu, ListMenu, ListMenuCard, Footer, FloatKeranjang } from "../components";

export default function Menu() {
  return (
    <>
      <FloatKeranjang />
      <SlideMenu />
      {/* <ListMenu /> */}
      <ListMenuCard />
      <Footer />
    </>
  );
}
