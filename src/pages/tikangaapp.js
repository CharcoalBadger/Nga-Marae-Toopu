import React from "react";
import Tikanga from "./tikanga";
import Footer from "./footer";
import Tikangainfo from "./tikangainfo";

export default function Tikangaapp() {
  return (
    <div className="tikangaapp-container">
      <Tikanga />
      <Tikangainfo />
      <Footer />
    </div>
  );
}
