import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburgermenu";

export default function Navbarapp() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return isMobile ? (
    <HamburgerMenu isActive={menuActive} toggleMenu={toggleMenu} />
  ) : (
    <Navbar />
  );
}
