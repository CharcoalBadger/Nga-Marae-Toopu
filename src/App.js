import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Home2 from "./pages/home2";
import Home3 from "./pages/home3";
import Home4 from "./pages/home4";
import Footer from "./pages/footer";
import Aboutapp from "./pages/aboutapp";
import Tikangaapp from "./pages/tikangaapp";
import Hneapp from "./pages/hneapp";
import NMTapp from "./pages/nmtapp";
import PrivacyPolicy from "./pages/privacypolicy";
import CookiePolicy from "./pages/cookiepolicy";
import AccessibilityStatement from "./pages/accessibilitystatement";
import Disclaimer from "./pages/disclaimer";
import ScrollToTop from "./pages/scrolltotop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/about" element={<Aboutapp />} />
          <Route path="/tikanga" element={<Tikangaapp />} />
          <Route path="/hne" element={<Hneapp />} />
          <Route path="/nmt" element={<NMTapp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route
            path="/accessibility-statement"
            element={<AccessibilityStatement />}
          />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Home2 />
                <Home3 />
                <Home4 />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
