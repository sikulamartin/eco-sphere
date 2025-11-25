import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-eco-light">EcoSphere</h2>
            <p className="text-gray-400 text-sm mt-2">© 2024 EcoSphere Inc. Všechna práva vyhrazena.</p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:gap-8">
            <a href="#" className="hover:text-eco-light transition-colors">Ochrana soukromí</a>
            <a href="#" className="hover:text-eco-light transition-colors">Obchodní podmínky</a>
            <a href="#" className="hover:text-eco-light transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;