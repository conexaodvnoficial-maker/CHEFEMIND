import React from 'react';
import { AlertTriangle, Clock, XCircle, BarChartBig } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Detectando <span className="text-red-500">Falhas Operacionais</span>
          </h2>
          <p className="text-lg text-slate-400">
            Diagnóstico do sistema atual: seu delivery manual está gerando perda massiva de receita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-slate-900/50 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-500 hover:bg-slate-900 overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <AlertTriangle className="text-red-500 w-16 h-16 transform translate-x-4 -translate-y-4" />
            </div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <Clock className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Latency Alta</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tempo de resposta humano é lento. Clientes abandonam o carrinho enquanto esperam "alguém ver o WhatsApp".
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-slate-900/50 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-500 hover:bg-slate-900 overflow-hidden">
             <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <AlertTriangle className="text-red-500 w-16 h-16 transform translate-x-4 -translate-y-4" />
            </div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Erros de Input</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pedidos anotados à mão contêm erros. Ingredientes errados, endereços trocados e prejuízo no caixa.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-slate-900/50 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-500 hover:bg-slate-900 overflow-hidden">
             <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <AlertTriangle className="text-red-500 w-16 h-16 transform translate-x-4 -translate-y-4" />
            </div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <Clock className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Churn de Clientes</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A experiência ruim de atendimento faz o cliente migrar para o concorrente que usa tecnologia.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-slate-900/50 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-500 hover:bg-slate-900 overflow-hidden">
             <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <AlertTriangle className="text-red-500 w-16 h-16 transform translate-x-4 -translate-y-4" />
            </div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <BarChartBig className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dados Obscuros</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sem métricas, você pilota seu negócio no escuro. Falta de controle financeiro e de estoque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;