import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/proyecto/:projectId" element={<ProjectDetail />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
