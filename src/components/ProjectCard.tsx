import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: React.ReactNode;
  link?: string;
}

export default function ProjectCard({ title, description, stack, link }: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-900/50 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col justify-between overflow-hidden">
      {/* Efeito de brilho no fundo ao passar o mouse */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-auto">
        <div className="flex gap-3 text-gray-400 grayscale group-hover:grayscale-0 transition-all duration-500">
          {stack}
        </div>
        
        {link && (
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500/80 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            View Project
          </span>
        )}
      </div>
    </div>
  );
}