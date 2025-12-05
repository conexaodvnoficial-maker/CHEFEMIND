import React from 'react';
import Button from './Button';
import { ArrowRight, Bot, Cpu, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Quero automatizar meu delivery com o Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      
      {/* Spotlights - Adjusted for centered layout */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl text-center">
        
        {/* System Status Badge - Centered */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-sm mb-8 animate-float mx-auto">
            <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-300 text-xs font-mono tracking-widest uppercase">Status: <span className="text-green-400 font-bold">Aceitando Pedidos</span></span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
            O FUNCIONÁRIO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-orange-500 to-brand-500 bg-[length:200%_auto] animate-gradient text-glow">MAIS LUCRATIVO</span><br/>
            DO SEU DELIVERY
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Pare de perder dinheiro com atendimento lento. O <strong className="text-white font-semibold">Chefe Mind</strong> é a IA que atende, vende e fideliza 24h por dia no WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={handleWhatsApp} size="lg" className="w-full sm:w-auto shadow-[0_0_40px_rgba(220,38,38,0.4)] px-12 py-5 text-lg">
            Contratar Agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>

        {/* Micro Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-mono uppercase tracking-wider mb-16">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>Instalação Grátis</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
            <div>Setup em 10 min</div>
             <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
            <div>Sem Fidelidade</div>
        </div>

        {/* Tech Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900/50 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-brand-500/30 transition-colors">
            <Bot className="text-brand-500 w-8 h-8 mb-2" />
            <span className="text-slate-200 font-bold">IA Generativa</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-orange-500/30 transition-colors">
            <Cpu className="text-orange-500 w-8 h-8 mb-2" />
            <span className="text-slate-200 font-bold">Atende 24/7</span>
          </div>
           <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-green-500/30 transition-colors">
            <ArrowRight className="text-green-500 w-8 h-8 mb-2" />
            <span className="text-slate-200 font-bold">Vende Sozinho</span>
          </div>
           <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-cyan-500/30 transition-colors">
            <ShieldCheck className="text-cyan-500 w-8 h-8 mb-2" />
            <span className="text-slate-200 font-bold">Pix Automático</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;