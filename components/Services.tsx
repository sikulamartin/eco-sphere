import React from 'react';
import { Leaf, Recycle, Sun, Droplets } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Obnovitelná energie',
    description: 'Implementace solárních a větrných řešení pro moderní domácnosti a kanceláře.',
    icon: Sun,
  },
  {
    id: 2,
    title: 'Odpadové hospodářství',
    description: 'Chytré recyklační systémy, které snižují množství odpadu na skládkách o 80 %.',
    icon: Recycle,
  },
  {
    id: 3,
    title: 'Ekologické poradenství',
    description: 'Odborné vedení, které pomůže vaší firmě dosáhnout uhlíkové neutrality.',
    icon: Leaf,
  },
  {
    id: 4,
    title: 'Ochrana vody',
    description: 'Pokročilé technologie filtrace a zachytávání dešťové vody.',
    icon: Droplets,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white scroll-mt-24" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše služby</h2>
          <p className="text-gray-600">
            Poskytujeme komplexní nástroje a strategie pro minimalizaci dopadu na životní prostředí při maximální efektivitě.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-eco-dark group"
            >
              <div className="w-14 h-14 bg-eco-light/20 text-eco-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-eco-dark group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eco-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;