import React from 'react';
import { ArrowUpRight, Clock, Coins } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Relatório de Performance</h2>
          <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">
            Dados coletados em tempo real de parceiros ativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Metric 1 */}
          <div className="relative bg-slate-900/40 p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
            <div className="bg-slate-950 h-full w-full rounded-xl p-8 text-center flex flex-col items-center">
              <div className="bg-green-500/10 p-3 rounded-full mb-4">
                <ArrowUpRight className="text-green-500 w-8 h-8" />
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                +60%
              </div>
              <p className="text-green-400 font-bold uppercase text-sm tracking-wide">Receita Bruta</p>
              <div className="h-1 w-24 bg-slate-800 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-green-500 w-[60%] animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="relative bg-slate-900/40 p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
            <div className="bg-slate-950 h-full w-full rounded-xl p-8 text-center flex flex-col items-center">
              <div className="bg-cyan-500/10 p-3 rounded-full mb-4">
                <Clock className="text-cyan-500 w-8 h-8" />
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                -80%
              </div>
              <p className="text-cyan-400 font-bold uppercase text-sm tracking-wide">Tempo de Resposta</p>
              <div className="h-1 w-24 bg-slate-800 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-cyan-500 w-[80%] animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="relative bg-slate-900/40 p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
            <div className="bg-slate-950 h-full w-full rounded-xl p-8 text-center flex flex-col items-center">
              <div className="bg-brand-500/10 p-3 rounded-full mb-4">
                <Coins className="text-brand-500 w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2 tracking-tighter mt-2">
                R$ 3.000
              </div>
              <p className="text-brand-400 font-bold uppercase text-sm tracking-wide">Economia Mensal</p>
              <div className="h-1 w-24 bg-slate-800 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-brand-500 w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center border border-brand-900/50 bg-gradient-to-r from-brand-950/50 via-slate-900 to-brand-950/50">
          <p className="text-xl md:text-2xl text-slate-200 font-light">
            <span className="text-brand-500 font-bold">ROI Imediato:</span> O sistema se paga nos primeiros dias de operação através da redução de desperdício e aumento de conversão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;