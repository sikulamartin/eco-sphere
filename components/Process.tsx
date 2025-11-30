
import React from 'react';
import { Search, PenTool, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jak pracujeme</h2>
          <p className="text-gray-600">
            Jednoduchý proces transformace vaší firmy k udržitelnější budoucnosti ve třech krocích.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-eco-light/50 group-hover:scale-110 transition-all duration-300">
              <Search className="w-10 h-10 text-gray-400 group-hover:text-eco-dark transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Audit & Analýza</h3>
            <p className="text-gray-500 text-sm px-4">
              Změříme vaši současnou uhlíkovou stopu a identifikujeme klíčové oblasti pro zlepšení.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-eco-light/50 group-hover:scale-110 transition-all duration-300">
              <PenTool className="w-10 h-10 text-gray-400 group-hover:text-eco-dark transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Strategie na míru</h3>
            <p className="text-gray-500 text-sm px-4">
              Navrhneme konkrétní plán implementace ekologických technologií a procesů.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-eco-light/50 group-hover:scale-110 transition-all duration-300">
              <Rocket className="w-10 h-10 text-gray-400 group-hover:text-eco-dark transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Implementace</h3>
            <p className="text-gray-500 text-sm px-4">
              Uvedeme řešení do praxe a nastavíme systém pro dlouhodobé sledování výsledků.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
