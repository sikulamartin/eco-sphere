import React from 'react';
import { TimelineEvent } from '../types';

const timeline: TimelineEvent[] = [
  {
    year: '2021',
    title: 'Zasetí semínka',
    description: 'EcoSphere vznikla v malé garáži s misí eliminovat jednorázové plasty v místních kavárnách.'
  },
  {
    year: '2022',
    title: 'První velké financování',
    description: 'Získali jsme počáteční investici na rozšíření výzkumu biologicky rozložitelných materiálů.'
  },
  {
    year: '2023',
    title: 'Expanze do světa',
    description: 'Naše udržitelná řešení obalů přijalo více než 50 mezinárodních prodejců v Evropě i zámoří.'
  },
  {
    year: '2024',
    title: 'AI Revoluce',
    description: 'Spustili jsme náš nástroj pro sledování udržitelnosti řízený AI, který pomáhá uživatelům přesně měřit jejich uhlíkovou stopu.'
  },
  {
    year: '2026',
    title: 'Uhlíková negativita',
    description: 'Plánujeme dosáhnout stavu, kdy naše provozy odeberou z atmosféry více CO2, než vyprodukují.'
  },
  {
    year: '2030',
    title: 'Globální standard',
    description: 'Naše vize je stát se globálním standardem pro certifikaci udržitelnosti ve velkých korporacích.'
  }
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 scroll-mt-24 relative" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Levá strana - Sticky Container 
              Enabled sticky on all screen sizes. 
              z-0 ensures the timeline (z-10) scrolls OVER this card on mobile.
          */}
          <div className="sticky top-24 self-start z-0 mb-12 lg:mb-0">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Naše cesta k <br/><span className="text-eco-dark">Net Zero</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Začali jsme s jednoduchou myšlenkou: příroda a technologie mohou žít v harmonii. Každý rok posouváme hranice toho, co je možné v oblasti udržitelnosti.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full aspect-square relative max-h-[40vh] md:max-h-none object-cover">
                  <img 
                    src="https://picsum.photos/600/600" 
                    alt="Tým pracuje v přírodě" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Pravá strana - Timeline 
              z-10 ensures these cards slide OVER the sticky header on mobile
          */}
          <div className="relative pt-4 z-10">
            {/* Vertikální čára */}
            <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gray-200 lg:left-0"></div>
            
            <div className="space-y-8 pb-12">
              {timeline.map((event, index) => (
                <div key={index} className="relative pl-12 lg:pl-16 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[10px] lg:-left-[9px] top-6 w-5 h-5 rounded-full bg-white border-4 border-eco-light group-hover:border-eco-dark transition-colors duration-300 z-10 shadow-sm"></div>
                  
                  <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                    <span className="inline-block px-4 py-1.5 bg-eco-light/20 text-eco-dark font-bold rounded-full text-sm mb-4">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;