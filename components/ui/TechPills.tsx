"use client"
import React from 'react'

interface TechPill {
  name: string;
  color?: string;
  textColor?: string;
}

interface TechPillsProps {
  technologies: TechPill[] | string[];
  className?: string;
  pillClassName?: string;
}

function TechPills({ 
  technologies, 
  className = "",
  pillClassName = ""
}: TechPillsProps) {
  // Default color scheme for common technologies
  const getDefaultColors = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('react')) {
      return { bg: 'bg-blue-600', text: 'text-white' };
    } else if (techLower.includes('vite')) {
      return { bg: 'bg-purple-600', text: 'text-white' };
    } else if (techLower.includes('tailwind')) {
      return { bg: 'bg-cyan-500', text: 'text-white' };
    } else if (techLower.includes('gsap')) {
      return { bg: 'bg-green-600', text: 'text-white' };
    } else if (techLower.includes('hook')) {
      return { bg: 'bg-blue-500', text: 'text-white' };
    } else if (techLower.includes('typescript') || techLower.includes('ts')) {
      return { bg: 'bg-blue-700', text: 'text-white' };
    } else if (techLower.includes('javascript') || techLower.includes('js')) {
      return { bg: 'bg-yellow-500', text: 'text-black' };
    } else if (techLower.includes('next')) {
      return { bg: 'bg-gray-900', text: 'text-white' };
    } else {
      return { bg: 'bg-gray-600', text: 'text-white' };
    }
  };

  const renderPill = (tech: TechPill | string, index: number) => {
    if (typeof tech === 'string') {
      const colors = getDefaultColors(tech);
      return (
        <span
          key={index}
          className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${pillClassName}`}
        >
          {tech}
        </span>
      );
    } else {
      const colors = tech.color && tech.textColor ? 
        { bg: tech.color, text: tech.textColor } : 
        getDefaultColors(tech.name);
      
      return (
        <span
          key={index}
          className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${tech.color || colors.bg} ${tech.textColor || colors.text} ${pillClassName}`}
        >
          {tech.name}
        </span>
      );
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => renderPill(tech, index))}
    </div>
  );
}

// Export some preset technology arrays for common use cases
export const commonTechStacks = {
  reactVite: ['React + Vite', 'TailwindCSS', 'GSAP', 'React Hooks'],
  nextjs: ['Next.js', 'TypeScript', 'TailwindCSS', 'React'],
  fullstack: ['React', 'Node.js', 'MongoDB', 'Express'],
  frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
};

export default TechPills;