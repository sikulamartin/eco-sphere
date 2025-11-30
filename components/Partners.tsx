
import React from 'react';
import { Building2, Globe, Cpu, Zap, ShoppingBag } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Důvěřují nám lídři v udržitelnosti
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          
          <div className="flex items-center gap-2 group cursor-pointer">
            <Building2 className="w-8 h-8 text-gray-400 group-hover:text-eco-dark transition-colors" />
            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors">GreenCorp</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <Globe className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors">EcoWorld</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <Cpu className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors">TechNature</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <Zap className="w-8 h-8 text-gray-400 group-hover:text-yellow-500 transition-colors" />
            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors">PowerSun</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <ShoppingBag className="w-8 h-8 text-gray-400 group-hover:text-pink-500 transition-colors" />
            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors">BioMarket</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
