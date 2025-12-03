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
    <footer className="bg-white border-t border-slate-200">
      {/* Final CTA Section */}
      <div className="py-20 container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Seu restaurante merece um atendimento de chef.
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-700 mb-10">
          Seu negócio merece o Chefe Mind.
        </h3>
        <Button onClick={handleWhatsApp} size="lg" className="mx-auto flex items-center gap-2 px-10">
          Modernizar Meu Delivery
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Footer Bottom */}
      <div className="bg-slate-50 py-10 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-700 p-1.5 rounded-lg">
              <ChefHat className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-slate-800">Chefe<span className="text-brand-700">Mind</span></span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Chefe Mind. Todos os direitos reservados.</p>
            <div className="flex gap-4 justify-center md:justify-end mt-2">
              <a href="#" className="hover:text-brand-700 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-brand-700 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;