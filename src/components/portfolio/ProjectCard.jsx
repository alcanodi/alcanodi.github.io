import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/proyecto/${project.id}`} className="glass-card overflow-hidden flex flex-col group">
      <div className="aspect-video w-full bg-surface-hover relative overflow-hidden">
        {/* Placeholder gradient/bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:scale-110 transition-all duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-extrabold text-white/10 uppercase tracking-widest pointer-events-none select-none">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
          <ArrowUpRight className="text-dim group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" size={20} />
        </div>
        
        <p className="text-muted text-sm mb-6 flex-grow">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-lg bg-white/5 text-muted border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
