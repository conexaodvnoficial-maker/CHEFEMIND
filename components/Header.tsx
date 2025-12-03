import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-br from-brand-700 to-brand-900 p-2 rounded-xl shadow-lg group-hover:shadow-brand-700/40 transition-shadow">
            <ChefHat className="text-white w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </div>
          <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
            Chefe<span className="text-brand-700">Mind</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-brand-700 font-medium transition-colors">Funcionalidades</a>
          <a href="#results" className="text-slate-600 hover:text-brand-700 font-medium transition-colors">Resultados</a>
          <Button onClick={handleWhatsApp} size="sm">Começar Agora</Button>
        </nav>

        <div className="md:hidden">
           <Button onClick={handleWhatsApp} size="sm">Assinar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;