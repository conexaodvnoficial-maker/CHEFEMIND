import React from 'react';
import Button from './Button';
import { Check, ShieldCheck } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleHireWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Quero contratar o Plano Profissional do Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Uma Oferta Irrecusável
          </h2>
          <p className="text-lg text-slate-600">
            Transforme seu delivery hoje mesmo por um valor menor que o salário de um atendente estagiário.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative">
          <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            MAIS POPULAR
          </div>
          
          <div className="p-8 md:p-10 text-center border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Plano Profissional</h3>
            <h4 className="text-3xl font-bold text-slate-900 mb-6">Chefe Mind</h4>
            
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-slate-400 text-lg">R$</span>
              <span className="text-5xl md:text-6xl font-extrabold text-brand-700 tracking-tight">499,79</span>
              <span className="text-slate-400 text-lg self-end mb-2">/mês</span>
            </div>
            <p className="text-slate-500 text-sm">Cancele quando quiser</p>
          </div>

          <div className="p-8 md:p-10">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Instalação completa do sistema</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Personalização (Nome e Logo)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Treinamento rápido (10 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Suporte Técnico Prioritário</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">Atualizações Mensais Inclusas</span>
              </li>
            </ul>

            <Button onClick={handleHireWhatsApp} size="lg" fullWidth className="text-lg shadow-xl shadow-brand-700/20">
              Quero Contratar Agora
            </Button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>Pagamento seguro e garantia de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;