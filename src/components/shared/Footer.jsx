import React from 'react';
import { User, CodeXml, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-bold gradient-text">Alberto Cano</span>
            <p className="text-muted text-sm mt-2">Transformando datos en impacto estratégico.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
              <User size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
              <CodeXml size={20} />
            </a>
            <a href="mailto:email@example.com" className="text-muted hover:text-white">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-dim text-xs">© {new Date().getFullYear()} - Hecho con React & Pasión</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
