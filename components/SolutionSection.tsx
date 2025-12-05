import React from 'react';
import { MessageSquareCode, TrendingUp, CreditCard, Receipt, Laptop2, Sparkles } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "IA Autônoma 24h",
      description: "Atendimento ininterrupto. Respostas instantâneas, personalizadas e humanizadas.",
      color: "cyan"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-400" />,
      title: "Upsell Inteligente",
      description: "Algoritmo de vendas que sugere itens adicionais e aumenta seu ticket médio automaticamente.",
      color: "brand"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-400" />,
      title: "Gateway de Pagamento",
      description: "Checkout integrado no WhatsApp. Validação automática de Pix e Cartão de Crédito.",
      color: "green"
    },
    {
      icon: <Receipt className="w-6 h-6 text-purple-400" />,
      title: "Emissor Fiscal Auto",
      description: "Automação burocrática completa. Notas fiscais geradas e enviadas sem intervenção humana.",
      color: "purple"
    },
    {
      icon: <Laptop2 className="w-6 h-6 text-blue-400" />,
      title: "Dashboard em Tempo Real",
      description: "Analytics completo da sua operação. Visualize ROI, CAC e LTV em um painel unificado.",
      color: "blue"
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-yellow-400" />,
      title: "NLP Avançado",
      description: "Processamento de Linguagem Natural para entender áudios, gírias e pedidos complexos.",
      color: "yellow"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">Protocolos Ativados</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Arquitetura do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">Sistema Chefe Mind</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-right hidden md:block border-r-2 border-brand-500 pr-4">
            Tecnologia proprietária desenvolvida para escalar operações de food service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:bg-slate-900/80 hover:scale-[1.02] group border border-slate-800 hover:border-slate-600">
              <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6 border border-slate-700 shadow-lg group-hover:shadow-${feature.color}-500/20 transition-all`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
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