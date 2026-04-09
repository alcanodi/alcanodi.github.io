import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, BarChart2, Brain, Target, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/portfolio/ProjectCard';

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="pt-40 pb-20 min-h-90 flex flex-col justify-center relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Alberto Cano <br />
              <span className="gradient-text">Senior Data Analyst</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted font-light mb-10 leading-relaxed">
              Convierto datos complejos en <span className="text-white font-medium">decisiones estratégicas</span> mediante MMM e Inteligencia Artificial aplicada al negocio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary flex items-center gap-2">
                Ver mis proyectos <ArrowRight size={18} />
              </Link>
              <Link to="/contacto" className="btn-outline">
                Contactarme
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Brief */}
      <section className="section-padding bg-surface/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
              <p className="text-lg text-muted mb-6">
                Especializado en Marketing Mix Modeling e Inteligencia Artificial aplicada al negocio. Transformo datasets complejos en estrategias accionables que generan ROI medible.
              </p>
              <p className="text-lg text-muted mb-8">
                Mi enfoque único combina econometría avanzada con técnicas de machine learning para que cada decisión de marketing esté respaldada por evidencia sólida.
              </p>
              <Link to="/sobre-mi" className="text-blue-400 font-semibold flex items-center gap-2">
                Conocer mi trayectoria completa <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
                <BarChart2 className="text-blue-400" size={32} />
                <h3 className="font-bold">Análisis BI</h3>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
                <Target className="text-purple-400" size={32} />
                <h3 className="font-bold">Modelado MMM</h3>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
                <Brain className="text-indigo-400" size={32} />
                <h3 className="font-bold">AI / Machine Learning</h3>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
                <Sparkles className="text-emerald-400" size={32} />
                <h3 className="font-bold">Impacto Real</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
              <p className="text-muted">Una selección de mi trabajo en análisis, modelado e innovación.</p>
            </div>
            <Link to="/portfolio" className="md-hide text-blue-400 font-medium hover:underline">Ver todos</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para llevar tus datos al siguiente nivel?</h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Estoy disponible para proyectos de consultoría, colaboraciones estratégicas o roles full-time dinámicos.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/contacto" className="btn-primary">Empezar ahora</Link>
            <Link to="/sobre-mi" className="btn-outline flex items-center gap-2">
              Conocer más sobre mí <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
