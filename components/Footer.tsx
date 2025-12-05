import React from 'react';
import Button from './Button';
import { ChefHat, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Quero modernizar meu delivery com o Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20">
      {/* Final CTA Section */}
      <div className="container mx-auto px-4 md:px-8 text-center pb-20">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          O Futuro do seu Delivery Começa <span className="text-brand-500">Agora</span>.
        </h2>
        <Button onClick={handleWhatsApp} size="lg" className="mx-auto flex items-center gap-2 px-10 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
          Falar com Especialista
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Footer Bottom */}
      <div className="bg-slate-950 py-10 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
              <ChefHat className="text-brand-500 w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white font-display">CHEFE<span className="text-brand-500">MIND</span></span>
          </div>
          
          <div className="text-slate-600 text-sm text-center md:text-right font-mono">
            <p>&copy; {new Date().getFullYear()} Chefe Mind AI Solutions. All systems operational.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;