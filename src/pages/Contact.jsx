import React from 'react';
import { Mail, User, CodeXml, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page pt-40 pb-20">
      <div className="container">
        <header className="max-w-2xl mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Hablemos de <span className="gradient-text">tu proyecto</span></h1>
          <p className="text-xl text-muted leading-relaxed">
            ¿Tienes una pregunta sobre MMM, necesitas optimizar tus dashboards o simplemente quieres conectar? Mi buzón siempre está abierto.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-dim mb-1">Email</h3>
                <p className="text-xl font-medium">hola@albertocano.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-dim mb-1">LinkedIn</h3>
                <p className="text-xl font-medium">linkedin.com/in/alcanodi</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                <CodeXml size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-dim mb-1">GitHub</h3>
                <p className="text-xl font-medium">github.com/alcanodi</p>
              </div>
            </div>

            <div className="mt-10 p-8 glass-card border-none bg-gradient-to-br from-blue-600/5 to-purple-600/5">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-400" size={20} /> Nota importante
              </h3>
              <p className="text-muted leading-relaxed">
                Normalmente respondo en menos de 24 horas. Si es algo urgente, por favor contactame vía LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-12">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-dim">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-dim">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-dim">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-dim">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary flex justify-center items-center gap-2 mt-4">
                Enviar Mensaje <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
