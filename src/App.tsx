import React from 'react';
import Home from './pages/home/index';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/index';
import About from './pages/about/index';
import Services from './pages/Services/index';
import FaqPage from './pages/Faq';
import Contact from './pages/contact/index';
import ErrorPage from './pages/error/index';
import Microlending from './pages/microlending/index';
import InvestmentPage from './pages/investmentpage';
import Procurment from './pages/procurment/index';
import Bdc from './pages/bdc/index';
import RealEstate from './pages/realestate/index';
import './App.css';

function App() {
  return (
    <div className="App w-[100%] flex justify-center relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />}>
          <Route index element={<Microlending />} />
          <Route path="microlending" element={<Microlending />} />
          <Route path="investmentpage" element={<InvestmentPage />} />
          <Route path="procurment" element={<Procurment />} />
          <Route path="bdc" element={<Bdc />} />
          <Route path="realestate" element={<RealEstate />} />
        </Route>
        <Route path="faqpage" element={<FaqPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
