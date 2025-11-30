
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Process from './components/Process';
import Impact from './components/Impact';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  
  // Simple intersection observer to trigger fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElems = document.querySelectorAll('.fade-in-section');
    fadeElems.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-eco-dark flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-eco-light"></span>
            EcoSphere
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
             <a href="#home" className="hover:text-eco-dark transition-colors">Domů</a>
             <a href="#services" className="hover:text-eco-dark transition-colors">Služby</a>
             <a href="#about" className="hover:text-eco-dark transition-colors">O nás</a>
             <a href="#blog" className="hover:text-eco-dark transition-colors">Blog</a>
          </div>
          <a href="#newsletter" className="px-5 py-2 bg-eco-dark text-white text-sm font-medium rounded-full hover:bg-[#256628] transition-colors">
            Začít
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-0">
        <Hero />
        <Partners />
        <Services />
        <Process />
        <Impact />
        <About />
        <Testimonials />
        <FAQ />
        <Blog />
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}

export default App;
