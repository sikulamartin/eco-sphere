import React, { useState } from 'react';
import { BlogPost, LoadingState } from '../types';
import { ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
import { generateEcoTip } from '../services/geminiService';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 způsobů, jak doma omezit plasty',
    excerpt: 'Malé změny ve vaší denní rutině mohou mít obrovský dopad na životní prostředí.',
    image: 'https://picsum.photos/400/250?random=1',
    date: '12. Říj 2024'
  },
  {
    id: 2,
    title: 'Jak fungují uhlíkové kompenzace',
    excerpt: 'Opravdu uhlíkové kredity pomáhají planetě? Ponořili jsme se do dat.',
    image: 'https://picsum.photos/400/250?random=2',
    date: '28. Zář 2024'
  },
  {
    id: 3,
    title: 'Budoucnost městského farmaření',
    excerpt: 'Jak vertikální zahrady mění tvář moderních měst.',
    image: 'https://picsum.photos/400/250?random=3',
    date: '15. Zář 2024'
  }
];

const Blog: React.FC = () => {
  const [aiTip, setAiTip] = useState<string>("Klikněte na tlačítko pro vygenerování čerstvého eko-tipu!");
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerateTip = async () => {
    setLoading(LoadingState.LOADING);
    const tip = await generateEcoTip();
    setAiTip(tip);
    setLoading(LoadingState.SUCCESS);
  };

  return (
    <section className="py-20 bg-eco-bg scroll-mt-24" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Postřehy z EcoSphere</h2>
            <p className="text-gray-600">Nejnovější zprávy a tipy pro zelenější životní styl.</p>
          </div>
          <button className="text-eco-dark font-semibold flex items-center gap-2 hover:underline">
            Zobrazit všechny články <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* AI Feature - Educational & Fresh */}
        <div className="mb-16 bg-[#2E7D32] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 text-[#AED581]">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold tracking-wider uppercase text-sm">Poháněno Gemini AI</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Denní dávka udržitelnosti</h3>
              <p className="text-eco-light/80 text-lg mb-6 min-h-[3rem]">
                "{aiTip}"
              </p>
              <button 
                onClick={handleGenerateTip}
                disabled={loading === LoadingState.LOADING}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-eco-dark font-bold rounded-lg hover:bg-[#AED581] hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading === LoadingState.LOADING ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                {loading === LoadingState.LOADING ? "Přemýšlím..." : "Generovat nový tip"}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                 <Leaf className="w-16 h-16 text-[#AED581]" />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold text-eco-light uppercase tracking-wide mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eco-dark transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{post.excerpt}</p>
                <button className="text-eco-dark font-medium flex items-center gap-2 mt-auto hover:gap-3 transition-all">
                  Číst více <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
}