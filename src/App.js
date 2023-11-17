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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<Aboutapp />} />
          <Route path="/tikanga" element={<Tikangaapp />} />
          <Route path="/hne" element={<Hneapp />} />
          <Route path="/nmt" element={<NMTapp />} />
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
