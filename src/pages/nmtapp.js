import React from "react";
import NMT from "./nmt";
import Footer from "./footer";
import NMTinfo from "./nmtinfo";

export default function NMTapp() {
  return (
    <div className="NMTapp-container">
      <NMT />
      <NMTinfo />
      <Footer />
    </div>
  );
}
