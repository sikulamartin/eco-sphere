import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'SUCCESS'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    if(email) {
        setStatus('SUCCESS');
        setEmail('');
        setTimeout(() => setStatus('IDLE'), 3000);
    }
  };

  return (
    <section className="py-24 bg-white scroll-mt-24" id="newsletter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-eco-dark to-[#388E3C] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          
          {/* Background patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
             <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#AED581] rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Připojte se k zelené revoluci</h2>
            <p className="text-white/80 text-lg mb-8">
              Odebírejte náš newsletter pro nejnovější eko-tipy, novinky a exkluzivní nabídky. Žádný spam, jen příroda.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Zadejte svou e-mailovou adresu" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-eco-light/50 transition-shadow"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-[#AED581] text-eco-dark font-bold rounded-lg hover:bg-white hover:text-eco-dark transition-colors shadow-lg"
              >
                Odebírat
              </button>
            </form>
            
            {status === 'SUCCESS' && (
               <div className="mt-4 p-3 bg-white/20 rounded-lg text-sm font-medium animate-pulse">
                   Děkujeme za odběr! 🌱
               </div>
            )}
            
            <p className="mt-6 text-sm text-white/60">
                Odběrem souhlasíte s našimi obchodními podmínkami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;