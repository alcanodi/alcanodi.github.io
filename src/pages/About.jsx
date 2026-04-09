import React from 'react';
import { Download, Briefcase, GraduationCap, CodeXml, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page pt-40 pb-20">
      <div className="container">
        <header className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Sobre <span className="gradient-text">mí</span></h1>
          <p className="text-2xl text-muted leading-relaxed">
            Soy un apasionado de los datos con una visión estratégica. Mi objetivo es cerrar la brecha entre la capacidad técnica y los objetivos de negocio.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Philosophy & Bio */}
          <div className="flex flex-col gap-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Mi Trayectoria</h2>
              <p className="text-lg text-muted mb-4">
                Comencé mi camino en el mundo de los datos hace casi una década, fascinado por la capacidad de los números para contar historias objetivas. He pasado por roles de analista junior hasta liderar equipos de inteligencia de negocios en sectores dinámicos.
              </p>
              <p className="text-lg text-muted">
                Hoy, mi enfoque se centra en técnicas avanzadas como el Marketing Mix Modeling (MMM) y la implementación de soluciones de IA generativa y analítica para optimizar el ROI y la eficiencia operativa.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Filosofía de Trabajo</h2>
              <p className="text-lg text-muted italic border-l-2 border-blue-500 pl-6 mb-8">
                "Los datos sin contexto son solo ruido. El verdadero valor reside en la capacidad de traducir un coeficiente estadístico en una acción comercial clara."
              </p>
              <p className="text-lg text-muted">
                Creo fervientemente en el aprendizaje continuo. El ecosistema de datos cambia cada semana, y mi compromiso es estar siempre en la vanguardia tecnológica para ofrecer las mejores soluciones.
              </p>
            </section>

            <div className="flex pt-4">
              <a href="#" className="btn-primary flex items-center gap-3">
                Descargar CV (PDF) <Download size={18} />
              </a>
            </div>
          </div>

          {/* Details / Stats */}
          <div className="flex flex-col gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-blue-400" size={24} /> Experiencia Clave
              </h3>
              <ul className="flex flex-col gap-4 text-muted">
                <li className="flex justify-between">
                  <span>Senior Data Strategist</span>
                  <span className="text-dim">Actualidad</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing Mix Specialist</span>
                  <span className="text-dim">2022 - 2024</span>
                </li>
                <li className="flex justify-between">
                  <span>Business Inteligence Lead</span>
                  <span className="text-dim">2019 - 2022</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <CodeXml className="text-purple-400" size={24} /> Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'R', 'Power BI', 'Tableau', 'Scikit-learn', 'PyTorch', 'Robyn', 'Google Cloud', 'AWS'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-sm">{tech}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Heart className="text-pink-400" size={24} /> Pasiones
              </h3>
              <p className="text-muted">
                Más allá de las pantallas, disfruto de la fotografía analógica, el senderismo de montaña y una buena taza de café mientras leo sobre teoría de juegos.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
