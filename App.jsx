import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <Navbar setLanguage={setLanguage} />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/services" element={<Services language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;