
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jana Novotná",
    role: "CEO, BioCafe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Díky EcoSphere jsme snížili odpad v našich kavárnách o 60 % během prvního roku. Profesionální přístup a skvělé výsledky."
  },
  {
    id: 2,
    name: "Petr Svoboda",
    role: "Facility Manager, TechHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Implementace solárních panelů a chytrého řízení spotřeby nám ušetřila nemalé finance. Investice se vrátila rychleji, než jsme čekali."
  },
  {
    id: 3,
    name: "Eva Kovářová",
    role: "Zakladatelka, GreenLiving",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Spolupráce s EcoSphere byla klíčová pro získání naší ekologické certifikace. Jejich audit byl nesmírně detailní a přínosný."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Co o nás říkají klienti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
