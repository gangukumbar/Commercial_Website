import React from "react";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import Prices from "./Pages/Prices/Prices";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Prices" element={<Prices />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/*}  <Home />
      <Gallery />
      <Prices />
      <About />
  <Contact />*/}
      <Footer />
    </Router>
  );
}

export default App;
