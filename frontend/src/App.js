import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import DescriptionSection from './Components/DescriptionSection';
import Footer from './Components/Footer';
import AnalysisSection from './Components/AnalysisSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from "react";
import WebsiteTable from './Components/Tables/WebsiteTable';
import TableMenu from './Components/Tables/TableMenu';

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <HeroSection searchText={searchText} setSearchText={setSearchText} />
            <DescriptionSection />
            <Footer />
          </>} />
          <Route path="/analysis" element={<AnalysisSection searchText={searchText} />} />
          <Route path="/tables" element={<TableMenu />} />


        </Routes>
        <Routes>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
