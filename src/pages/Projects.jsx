import React from 'react';
import ProjectGallery from '../components/home/ProjectGallery';

const Projects = () => {
  return (
    <div className="min-h-[70vh]">
      <section className="w-full pt-24 pb-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Projects</h2>
          <p className="text-gray-600 text-lg">Explore our portfolio of residential, commercial, and industrial landmarks.</p>
        </div>
      </section>
      <ProjectGallery />
    </div>
  );
};

export default Projects;
