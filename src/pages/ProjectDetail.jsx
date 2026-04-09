import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code, Layers, CheckCircle, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/portfolio" className="text-blue-400 hover:underline">Volver al portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-detail pt-32">
      <div className="container">
        <Link to="/portfolio" className="flex items-center gap-2 text-muted hover:text-white mb-12 transition-colors">
          <ArrowLeft size={18} /> Volver al Portfolio
        </Link>
        
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-4xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Hero Image / Placeholder */}
        <div className="aspect-[21/9] w-full glass-card mb-20 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
          <div className="text-white/20 font-bold text-5xl uppercase tracking-[1em] opacity-30 select-none">
            {project.category}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-16">
            <section>
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <Layers className="text-blue-400" size={24} /> El Problema de Negocio
              </h2>
              <div className="glass-card p-8 text-lg border-l-4 border-l-blue-500 bg-blue-500/5">
                {project.problem}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                <CheckCircle className="text-emerald-400" size={24} /> El Proceso Analítico
              </h2>
              <div className="flex flex-col gap-6">
                {project.process.map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-blue-400 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-lg text-muted pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <TrendingUp className="text-indigo-400" size={24} /> Resultado e Impacto
              </h2>
              <p className="text-xl text-text-main font-medium leading-relaxed">
                {project.impact}
              </p>
            </section>
          </div>

          {/* Sidebar Info */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-dim mb-4 flex items-center gap-2">
                  <Code size={14} /> Tecnologías & Herramientas
                </h3>
                <p className="text-lg font-medium">{project.tools}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-dim mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span> Mi Rol
                </h3>
                <p className="text-lg font-medium">{project.role}</p>
              </div>

              <div className="pt-10 border-t border-white/5">
                <a 
                  href="#" 
                  className="btn-primary w-full flex justify-center items-center gap-2"
                  onClick={(e) => e.preventDefault()}
                >
                  Ver Código / Dashboard <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery Visual */}
        <section className="section-padding">
          <h2 className="text-2xl font-bold mb-10">Galería Visual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video glass-card flex items-center justify-center text-dim italic opacity-50">
              Captura de pantalla Dashboard #1
            </div>
            <div className="aspect-video glass-card flex items-center justify-center text-dim italic opacity-50">
              Gráfico de Resultados #2
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default ProjectDetail;
