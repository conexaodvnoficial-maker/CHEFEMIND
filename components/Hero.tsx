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
      
      {/* Spotlights */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="text-center lg:text-left">
            {/* System Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-sm mb-8 animate-float mx-auto lg:mx-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-slate-300 text-xs font-mono tracking-widest uppercase">Status: <span className="text-green-400 font-bold">Aceitando Pedidos</span></span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              O FUNCIONÁRIO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-orange-500 to-brand-500 bg-[length:200%_auto] animate-gradient text-glow">MAIS LUCRATIVO</span><br/>
              DO SEU DELIVERY
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Pare de perder dinheiro com atendimento lento. O <strong className="text-white font-semibold">Chefe Mind</strong> é a IA que atende, vende e fideliza 24h por dia no WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button onClick={handleWhatsApp} size="lg" className="w-full sm:w-auto shadow-[0_0_40px_rgba(220,38,38,0.4)] px-12">
                Contratar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Micro Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-mono uppercase tracking-wider">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-brand-500" />
                 <span>Instalação Grátis</span>
               </div>
               <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
               <div>Setup em 10 min</div>
            </div>
          </div>

          {/* Right Column: Visual Proof */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Abstract Tech Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-800 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-brand-900/30 rounded-full animate-pulse-slow"></div>
            
            {/* Robot Image Placeholder - Using a stylized representation since I can't load external images without URL */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                    {/* Glowing effect behind the robot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]"></div>
                    
                    {/* The Robot Image */}
                    <img 
                        src="https://img.freepik.com/premium-photo/red-robot-chef-holding-dish-cloche-dark-background-generative-ai_772924-4286.jpg?w=740" 
                        alt="Robô Chefe Mind" 
                        className="relative z-10 w-full object-contain drop-shadow-2xl animate-float mask-image-gradient"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />

                    {/* Floating UI Card - Sale Confirmation */}
                    <div className="absolute top-20 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-2xl z-20 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-slate-400 font-mono uppercase">Novo Pedido Confirmado</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-white font-bold">Mesa 04</div>
                                <div className="text-xs text-slate-500">Combo X-Tudo + Refri</div>
                            </div>
                            <div className="text-brand-400 font-bold text-lg">R$ 45,90</div>
                        </div>
                    </div>

                    {/* Floating UI Card - Pix Received */}
                     <div className="absolute bottom-32 -left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-2xl z-20 animate-float" style={{ animationDelay: '2s' }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-lg">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">Pix Recebido</div>
                                <div className="text-xs text-slate-500">Pagamento aprovado</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Mobile-only Image (Simplified) */}
        <div className="lg:hidden mt-12 relative w-full h-64 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800">
             <img 
                src="https://img.freepik.com/premium-photo/red-robot-chef-holding-dish-cloche-dark-background-generative-ai_772924-4286.jpg?w=740" 
                alt="Robô Chefe Mind" 
                className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        {/* Tech Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-900">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Bot className="text-brand-500 w-5 h-5" />
            <span className="text-slate-400 text-sm font-medium">IA Generativa</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Cpu className="text-orange-500 w-5 h-5" />
            <span className="text-slate-400 text-sm font-medium">Atende 24/7</span>
          </div>
           <div className="flex items-center gap-3 justify-center md:justify-start">
            <ArrowRight className="text-green-500 w-5 h-5" />
            <span className="text-slate-400 text-sm font-medium">Vende Sozinho</span>
          </div>
           <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck className="text-cyan-500 w-5 h-5" />
            <span className="text-slate-400 text-sm font-medium">Pix Automático</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;