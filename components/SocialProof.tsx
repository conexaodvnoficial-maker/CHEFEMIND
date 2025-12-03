import React from 'react';
import { TrendingUp, Clock, Users } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultados Reais de Quem Usa</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Não são apenas promessas. São números que transformam a realidade de deliveries todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Metric 1 */}
          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              +60%
            </div>
            <p className="text-slate-300 font-medium">Aumento nas Vendas</p>
            <p className="text-sm text-slate-400 mt-2">Devido à agilidade e upsell automático</p>
          </div>

          {/* Metric 2 */}
          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              -80%
            </div>
            <p className="text-slate-300 font-medium">Tempo de Atendimento</p>
            <p className="text-sm text-slate-400 mt-2">Respostas instantâneas para o cliente</p>
          </div>

          {/* Metric 3 */}
          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/20 text-brand-400 mb-6">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-2xl md:text-4xl font-extrabold text-white mb-2">
              R$ 1.500 a 3.000
            </div>
            <p className="text-slate-300 font-medium">Economia Mensal</p>
            <p className="text-sm text-slate-400 mt-2">Redução de custos com equipe extra</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-700 to-brand-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-brand-900/50">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            "O Chefe Mind se paga sozinho em poucos dias!"
          </h3>
          <p className="text-brand-100 text-lg">
            A economia gerada e o aumento de vendas cobrem o investimento quase imediatamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;