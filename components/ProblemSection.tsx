import React from 'react';
import { AlertTriangle, Clock, Frown, DollarSign } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Seu delivery está perdendo dinheiro agora mesmo?
          </h2>
          <p className="text-lg text-slate-600">
            Enquanto você lê isso, um cliente pode estar desistindo de pedir com você porque ninguém respondeu o WhatsApp a tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pain Point 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp Caótico</h3>
            <p className="text-slate-600">
              Você perde horas respondendo perguntas repetitivas em vez de pensar na estratégia do negócio.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pedidos Errados</h3>
            <p className="text-slate-600">
              A equipe sobrecarregada anota pedidos com pressa, gerando erros, desperdício e clientes insatisfeitos.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Frown className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cliente Insatisfeito</h3>
            <p className="text-slate-600">
              A demora no atendimento faz o cliente ir para a concorrência. Quem atende rápido, vende mais.
            </p>
          </div>

          {/* Pain Point 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Falta de Controle</h3>
            <p className="text-slate-600">
              Sem dados claros, você não sabe quanto vendeu exatamente e perde o controle do faturamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;