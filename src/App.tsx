import React from "react";
import Home from "./pages/home/index";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/index";
import "./App.css";
import About from "./pages/about/index";
import Services from "./pages/Services/index";
import FaqPage from "./pages/Faq";
import Contact from "./pages/contact/index";

function App() {
  return (
    <div className="App w-[100%] flex justify-center relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqpage" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
