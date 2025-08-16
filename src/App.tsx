import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DixitPortfolio from './components/DixitPortfolio';
import RajvirPortfolio from './components/RajveerPortfolio';
import PoojaPortfolio from './components/PoojaPortfolio';
import TarunPortfolio from './components/TarunPortfolio';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dixit" element={<DixitPortfolio />} />
            <Route path="/rajvir" element={<RajvirPortfolio />} />
            <Route path="/pooja" element={<PoojaPortfolio />} />
            <Route path="/tarun" element={<TarunPortfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;