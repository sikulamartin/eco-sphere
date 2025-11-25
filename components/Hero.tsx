import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] mt-16 flex items-center bg-white overflow-hidden">
      
      {/* Seamless Background Image on the Right */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&q=80" 
          alt="Les a slunce" 
          className="w-full h-full object-cover"
        />
        
        {/* Complex Gradient Masking for Seamless Blend */}
        
        {/* 1. Main Fade from Left (White to Transparent) */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/95 to-transparent sm:via-white/40"></div>
        
        {/* 2. Enhanced Bottom Fade (Transparent to Solid White) - Transitions into next section perfectly */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

        {/* 3. Mobile specific overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/60 md:hidden"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full hero-content">
        <div className="max-w-2xl fade-in-section is-visible">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-light/20 text-eco-dark font-bold rounded-full text-sm mb-6 backdrop-blur-sm border border-eco-light/30">
            <span className="w-2 h-2 rounded-full bg-eco-dark animate-pulse"></span>
            Budoucnost je zelená
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6 drop-shadow-sm md:drop-shadow-none">
            Udržitelná <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a4a1d] via-[#2E7D32] to-[#8BC34A]">řešení</span>
            <br />
            pro lepší planetu
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 md:text-gray-600 mb-8 max-w-lg leading-relaxed font-medium md:font-normal">
            EcoSphere spojuje přírodu a technologie. Pomáháme firmám i jednotlivcům přejít na životní styl bez odpadu pomocí inovativních řešení.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="px-8 py-4 bg-eco-dark text-white font-semibold rounded-full hover:bg-[#256628] hover:shadow-lg hover:shadow-eco-dark/30 transition-all flex items-center justify-center gap-2 group">
              Zjistit více
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="px-8 py-4 bg-white/60 backdrop-blur-md border border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-white hover:shadow-md transition-all flex items-center justify-center">
              Naše projekty
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-gray-500">
            <div>
              <p className="text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-sm">Vysazených stromů</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-sm">Partnerů</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;