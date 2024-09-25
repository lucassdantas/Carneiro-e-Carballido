import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string[];
};

export const FAQ = () => {
  const items: FAQItem[] = [
    { question: "Mesmo eu tendo uma empresa de pequeno porte, posso contratar uma Contabilidade?", 
      answer: ["Sim, a Carneiro & Carballido, atende diversos tipos de empresa e portes. Estamos prontos para ajudá-los de acordo com cada necessidade."] },

    { question: "Quando devo contratar uma Contabilidade para minha empresa?", 
      answer: [
        'De acordo com a Lei 10.406/2002, art. 1.179 é obrigatório uma empresa realizar a contabilidade.',
        'Muitos empresários estão procurando os serviços contábeis terceirizados para facilitar os processos e diminuir custos."'
      ] 
    },

    { question: "Como a Carneiro & Carballido vai me ajudar como empresário?", 
      answer: [
        'Somos especialistas no seu negócio, entendemos as suas necessidades e por isso, nosso time é totalmente especializado para otimizar o sucesso do seu negócio.',
        'A Carneiro & Carballido está apta para atender a sua empresa desde a constituição dela, com profissionais especializados para auxiliá-lo em todo o percurso empresarial.'
      ] 
    },

    { question: "Como é o procedimento de contratação?", 
      answer: [
        "Simples e fáci, basta solicitar uma proposta que um de nossos especialistas irá entrar em contato com você."
      ]
    },

    { question: "Quanto tempo demora para abrir uma empresa?", 
      answer: [
        "A abertura de uma empresa no Rio de Janeiro leva até 30 dias úteis."
      ]
    },

    { question: "Como enquadrar minha empresa no simples nacional?", 
      answer: [
        "A Carneiro & Carballido se responsabiliza pela análise das atividades X a possibilidade de enquadramento de sua empresa no Simples Nacional. Estando tudo certo, sua empresa está enquadrada no menor regime tributário do Brasil"
      ]
    },

    { question: "A Carneiro & Carballido trabalha em conformidade com a legislação?", 
      answer: [
        "Sim, nos possuimos um corpo técnico de pessoas qualificadas que constantemente buscam por conhecimento e capacitação para prestar com excelência seus serviços de consultoria trabalhista."
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <ul className="space-y-6">
      {items.map((item, index) => (
        <li key={index} className="border-b border-gray-300 pb-4 transition" onClick={() => toggleFAQ(index)}>
          <button className="w-full text-left font-medium text-xl text-gray-800 flex justify-between items-center">
            {item.question}
            <span className="ml-2 ">{openIndex === index ? '-' : '+'}</span>
          </button>
          <div className={`overflow-hidden transition-[max-height]  ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <p className="mt-2 text-gray-600 text-1xl">{item.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
