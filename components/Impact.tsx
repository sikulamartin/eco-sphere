
import React from 'react';

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-eco-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#AED581 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          <div className="p-6">
            <div className="text-5xl font-bold text-[#AED581] mb-2">15k+</div>
            <div className="text-lg font-medium opacity-90">Tun CO2 ušetřeno</div>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-[#AED581] mb-2">300+</div>
            <div className="text-lg font-medium opacity-90">Realizovaných projektů</div>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-[#AED581] mb-2">1M+</div>
            <div className="text-lg font-medium opacity-90">Litrů vody zachráněno</div>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-[#AED581] mb-2">100%</div>
            <div className="text-lg font-medium opacity-90">Spokojenost klientů</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
