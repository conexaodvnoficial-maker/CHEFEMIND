import React from 'react';
import Button from './Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Quero automatizar meu delivery com o Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-50/50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/50 border border-brand-200 text-brand-800 font-semibold text-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
          A Revolução do Atendimento Delivery
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
          Tenha um <span className="text-brand-700">Funcionário Digital</span> trabalhando 24h por você.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Chefe Mind é o parceiro ideal para modernizar seu atendimento. Automatize pedidos no WhatsApp, 
          receba pagamentos instantâneos e foque no crescimento do seu negócio enquanto nossa IA vende no automático.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={handleWhatsApp} size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            Quero Automatizar Meu Delivery
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-slate-500 sm:hidden mt-2">Teste sem compromisso no plano mensal</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-600" />
            <span>Instalação Rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-600" />
            <span>Suporte Especializado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-600" />
            <span>Sem fidelidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;