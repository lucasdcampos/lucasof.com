import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: React.ReactNode;
  link?: string;
}

export default function ProjectCard({ title, description, stack, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 transition-transform duration-200 hover:scale-101">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 mb-2">{description}</p>
      <div className="flex gap-3 mb-2 items-center">
        {stack}
      </div>
      {link && (
        <a href={link} className="text-indigo-400 underline">View Details</a>
      )}
    </div>
  );
}
