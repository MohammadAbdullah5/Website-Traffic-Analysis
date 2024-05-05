import "./App.css";
import Navbar from "./Components/LandingPage/Navbar";
import HeroSection from "./Components/LandingPage/HeroSection";
import DescriptionSection from "./Components/LandingPage/DescriptionSection";
import Footer from "./Components/LandingPage/Footer";
import AnalysisSection from "./Components/AnalyticsSection/AnalysisSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import TableMenu from "./Components/Tables/TableMenu";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
                <DescriptionSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/analysis"
            element={<AnalysisSection searchText={searchText} />}
          />
          <Route path="/tables" element={<TableMenu />} />
        </Routes>
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
