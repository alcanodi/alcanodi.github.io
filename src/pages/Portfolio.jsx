import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/portfolio/ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Data Analysis', 'MMM', 'IA'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page pt-40">
      <section className="pb-20">
        <div className="container">
          <header className="mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">Mis <span className="gradient-text">Proyectos</span></h1>
            <p className="text-xl text-muted max-w-2xl">
              Una colección detallada de trabajos donde la teoría estadística se encuentra con la resolución de problemas reales.
            </p>
          </header>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-white/5 text-muted hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
