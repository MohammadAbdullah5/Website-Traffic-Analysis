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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <DescriptionSection />
            <Footer />
          </>} />
          <Route path="/analysis" element={<AnalysisSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
