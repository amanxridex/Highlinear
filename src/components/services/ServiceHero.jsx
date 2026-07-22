import React from 'react';

const ServiceHero = ({ title, subtitle, imageUrl, videoUrl }) => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold rounded-lg transition-colors w-full sm:w-auto">
            Get Free Quote
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white text-white font-bold rounded-lg transition-colors w-full sm:w-auto">
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
