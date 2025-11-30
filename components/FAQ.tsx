
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Jak dlouho trvá úvodní ekologický audit?",
    answer: "Standardní audit pro malé a střední firmy trvá obvykle 2-3 týdny. Zahrnuje sběr dat, analýzu provozu a vypracování závěrečné zprávy s doporučeními."
  },
  {
    question: "Je vaše řešení vhodné i pro jednotlivce?",
    answer: "Ano! Ačkoliv se specializujeme na B2B sektor, nabízíme i konzultace pro domácnosti a komunitní projekty zaměřené na úsporu energií a redukci odpadu."
  },
  {
    question: "Garantujete návratnost investic do udržitelných technologií?",
    answer: "Při návrhu strategie vždy kalkulujeme s návratností investic (ROI). Většina našich klientů vidí návratnost do 2-4 let díky úsporám na energiích a materiálech."
  },
  {
    question: "Jak funguje AI sledování uhlíkové stopy?",
    answer: "Náš software se napojí na vaše fakturační a provozní data. Umělá inteligence pak v reálném čase analyzuje spotřebu a automaticky vypočítává ekvivalent CO2."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Časté dotazy
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-eco-dark' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-eco-dark flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
