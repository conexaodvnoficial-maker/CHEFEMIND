import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-xl bg-slate-900/30 overflow-hidden transition-all duration-300 hover:border-brand-900/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-white font-medium text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      <div
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Preciso ter um computador potente?",
      answer: "Não! O Chefe Mind roda 100% na nuvem. Você pode acompanhar tudo pelo seu celular ou qualquer computador com internet."
    },
    {
      question: "Demora muito para configurar?",
      answer: "Nosso setup é expresso. Em cerca de 10 minutos deixamos o sistema pronto com seu cardápio e logo. É plug and play."
    },
    {
      question: "O robô substitui meus atendentes?",
      answer: "Ele atua como um primeiro nível de atendimento infalível, filtrando 90% das dúvidas repetitivas e tirando pedidos. Sua equipe foca apenas na produção e casos complexos."
    },
    {
      question: "Existe fidelidade ou multa?",
      answer: "Zero. Acreditamos na qualidade do nosso produto. Você assina o plano mensal e pode cancelar quando quiser, sem letras miúdas."
    },
    {
      question: "Como funciona a integração com o WhatsApp?",
      answer: "Utilizamos a API oficial para garantir estabilidade. Você conecta seu número (ou um novo) através de um QR Code simples, igual ao WhatsApp Web."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-500 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Tira-Dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">
            Tudo o que você precisa saber antes de modernizar seu atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;