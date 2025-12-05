import React from 'react';
import Button from './Button';
import { Check, ShieldCheck, ChefHat } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleHireWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Quero contratar o Plano Profissional do Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Investimento Inteligente
          </h2>
          <p className="text-slate-400 text-lg">
            Substitua custos variáveis com funcionários por uma mensalidade fixa e previsível.
          </p>
        </div>

        {/* Cyber Card Container */}
        <div className="max-w-md mx-auto relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 h-full flex flex-col">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-600 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl font-mono tracking-wider shadow-lg">
              OFERTA EXCLUSIVA
            </div>
            
            <div className="p-10 text-center border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              {/* Logo Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-slate-700 shadow-inner group-hover:border-brand-500/50 transition-colors">
                <ChefHat className="text-brand-500 w-8 h-8" />
              </div>
              
              {/* Logo Text */}
              <div className="mb-4">
                 <span className="text-lg font-display font-bold tracking-tight text-white">
                    CHEFE<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">MIND</span>
                 </span>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-300 mb-2 tracking-wide uppercase text-sm">Plano Profissional</h3>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-slate-500 text-lg mt-2">R$</span>
                <span className="text-6xl font-display font-bold text-white tracking-tighter drop-shadow-lg">499</span>
                <div className="flex flex-col items-start">
                    <span className="text-xl font-bold text-slate-300">,79</span>
                    <span className="text-xs text-slate-500 font-mono uppercase">/mês</span>
                </div>
              </div>
              
              <div className="inline-block bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                <p className="text-green-400 text-xs font-bold uppercase tracking-wider">Sem taxa de adesão hoje</p>
              </div>
            </div>

            <div className="p-10 bg-slate-900 flex-grow flex flex-col">
              <ul className="space-y-5 mb-10 flex-grow">
                {[
                  "Atendimento Ilimitado via WhatsApp",
                  "Cardápio Digital com Fotos",
                  "Link de Pagamento Automático",
                  "Painel de Controle Financeiro",
                  "Suporte Técnico Prioritário"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-brand-500/20 p-1 rounded-full mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-brand-500" strokeWidth={4} />
                    </div>
                    <span className="text-slate-200 font-medium text-sm">{item}</span>
                  </li>
                ))}
                
                {/* Bônus */}
                <li className="pt-4 mt-4 border-t border-slate-800">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 block">Bônus Incluso:</span>
                    <div className="flex items-start gap-3">
                        <div className="bg-orange-500/20 p-1 rounded-full mt-0.5 shrink-0">
                            <Check className="w-3 h-3 text-orange-500" strokeWidth={4} />
                        </div>
                        <span className="text-white font-medium text-sm">Setup + Treinamento da Equipe</span>
                    </div>
                </li>
              </ul>

              <Button onClick={handleHireWhatsApp} size="lg" fullWidth variant="primary" className="mb-6 shadow-xl hover:shadow-brand-500/40">
                Contratar Agora
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-mono pt-4 border-t border-slate-800/50">
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>Compra Segura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;