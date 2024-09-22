import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ = () => {
  const items: FAQItem[] = [
    { question: "Mesmo eu tendo uma empresa de pequeno porte, posso contratar uma Contabilidade?", 
      answer: "Sim, a Carneiro & Carballido, atende diversos tipos de empresa e portes. Estamos prontos para ajudá-los de acordo com cada necessidade." },

    { question: "Quando devo contratar uma Contabilidade para minha empresa?", 
      answer: "Lorem Ipsum." },

    { question: "Como a Carneiro & Carballido vai me ajudar como empresário?", 
      answer: "Lorem Ipsum." },

    { question: "Quanto tempo demora para abrir uma empresa?", 
      answer: "Lorem Ipsum." },

    { question: "Como enquadrar minha empresa no simples nacional?", 
      answer: "Lorem Ipsum." },

    { question: "A Carneiro & Carballido trabalha em conformidade com a legislação?", 
      answer: "Lorem Ipsum.." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <h2 className="text-4xl  text-center mb-6 font-semibold">Perguntas Frequentes</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left font-medium text-xl text-gray-800 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-1xl">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};