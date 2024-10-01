import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type Testimonial = {
  name: string;
  text: string;
  imgUrl: string; 
  rating: number;
};

export const TestimonialCarousel = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Mariana Freitas',
      text: 'Empresa séria e comprometida com os clientes! Gosto de todos os profissionais, especialmente o Edilson, a Suellen e a Dayane. Extremamente atenciosos.',
      imgUrl: 'URL_DA_IMAGEM_DO_JOAO', 
      rating: 5,
    },
    {
      name: 'Antonia Maria ',
      text: 'Fazem cerca de 12 anos que a Carbalido Consultores faz a contabilidade da minha empresa, e em todo esse tempo a conduta da empresa e dos funcionários foi sempre irrepreensível. Agora estou mudando de atividade, e confio plenamente que vou continuar sendo assistida da mesma forma, pois eles tratam com a mesma competência uma empresa pequena ou uma empresa grande, por que são Mega Profissionais.',
      imgUrl: 'URL_DA_IMAGEM_DA_MARIA', 
      rating: 5,
    },
    {
      name: 'Gabriel Ribeiro',
      text: 'Empresa excelente, ótimos profissionais!',
      imgUrl: 'URL_DA_IMAGEM_DO_CARLOS', 
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - getVisibleTestimonials() ? 0 : prevIndex + getVisibleTestimonials()
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - getVisibleTestimonials() : prevIndex - getVisibleTestimonials()
    );
  };

  // Função para determinar quantos cards mostrar por vez (1 em mobile, 3 no desktop)
  const getVisibleTestimonials = () => {
    return window.innerWidth < 768 ? 1 : 3;  // 1 card for mobile, 3 cards for desktop
  };

  return (
    <div className="relative w-full rounded-lg ">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:space-x-4">
        {testimonials.slice(currentIndex, currentIndex + getVisibleTestimonials()).map((testimonial, index) => (
          <div key={index} className="flex-1 w-full my-4 p-4 border rounded-lg bg-white shadow h-[450px]">
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <div className="flex mb-2">
              {Array.from({ length: 5 }, (_, idx) => (
                <svg
                  key={idx}
                  className={`h-5 w-5 ${idx < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-black italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button onClick={prevTestimonial} className="absolute left-0 -ml-4 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition">
          <FaAngleLeft/>
        </button>
      )}

      {currentIndex + getVisibleTestimonials() < testimonials.length && (
        <button onClick={nextTestimonial} className="absolute right-0 -mr-4 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition">
          <FaAngleRight/>
        </button>
      )}
    </div>
  );
};
