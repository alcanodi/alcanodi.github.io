import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Sobre mí', path: '/sobre-mi' },
  ];

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'glass navbar--scrolled' : 'bg-bg/80 backdrop-blur-md'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="navbar__logo text-xl font-bold flex items-center gap-2 group">
          <div className="navbar__icon w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold">
            AC
          </div>
          <span className="gradient-text font-extrabold tracking-tight">Alberto Cano</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar__desktop flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-all ${location.pathname === link.path ? 'text-blue-400' : 'text-muted'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" className="navbar__cta">
            Hablemos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar__mobile glass animate-fade-in">
          <div className="container py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contacto" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
