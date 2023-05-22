import React from "react";
import Home from "./pages/home/index";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/index";
import "./App.css";
import About from "./pages/about/index";
import Services from "./pages/Services/index";
import FaqPage from "./pages/Faq";
import Contact from "./pages/contact/index";
import ErrorPage from "./pages/error/index";
import MicroLendingPage from "./components/microlending";
import ProcurmentPage from "./components/procurment";
import RealEstatePage from "./components/realestate";
import BdcPage from "./components/bdc";
import InvesmentPage from "./components/Investment";

function App() {
  return (
    <div className="App w-[100%] flex justify-center relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />}>
          <Route path="microlending" element={<MicroLendingPage />} />
          <Route path="procurmentpage" element={<ProcurmentPage />} />
          <Route path="realestate" element={<RealEstatePage />} />
          <Route path="bdc" element={<BdcPage />} />
          <Route path="investmentpage" element={<InvesmentPage />} />
        </Route>
        <Route path="faqpage" element={<FaqPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
