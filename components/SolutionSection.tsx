import React from 'react';
import { MessageCircle, ShoppingBag, CreditCard, FileText, BarChart3, Bot } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "Atendimento 24h",
      description: "Sua loja nunca fecha no WhatsApp. Respostas rápidas, educadas e prontas para vender a qualquer hora do dia ou da noite."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      title: "Venda Consultiva (Upsell)",
      description: "O Chefe Mind não apenas anota pedidos. Ele entende o cliente e oferece produtos complementares para aumentar o ticket médio."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Pagamento Integrado",
      description: "Chega de enviar chaves Pix manualmente. O sistema cobra via Pix ou Cartão e confirma o pagamento automaticamente."
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Notas Fiscais Automáticas",
      description: "Reduza a burocracia. O Chefe Mind emite as notas fiscais dos pedidos sem você precisar tocar no computador."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Painel de Controle",
      description: "Tenha visão total do seu negócio. Métricas, histórico de pedidos e relatórios de vendas em um dashboard intuitivo."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Atendimento Humanizado",
      description: "A IA é treinada para conversar naturalmente, garantindo que seu cliente se sinta bem atendido e valorizado."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-700 font-bold tracking-wider uppercase text-sm">A Solução Definitiva</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
            O que o Chefe Mind faz pelo seu restaurante?
          </h2>
          <p className="text-lg text-slate-600">
            Ele resolve os problemas operacionais para que você foque no que importa: a qualidade da sua comida e a expansão da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 rounded-2xl border border-slate-100 hover:border-brand-100 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-brand-700 flex items-center justify-center mb-6 shadow-lg shadow-brand-700/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;