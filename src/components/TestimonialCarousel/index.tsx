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
      name: 'João Silva',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      imgUrl: 'URL_DA_IMAGEM_DO_JOAO', 
      rating: 5,
    },
    {
      name: 'Maria Oliveira',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      imgUrl: 'URL_DA_IMAGEM_DA_MARIA', 
      rating: 5,
    },
    {
      name: 'Carlos Pereira',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      imgUrl: 'URL_DA_IMAGEM_DO_CARLOS', 
      rating: 5,
    },
    {
      name: 'Ana Santos',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      imgUrl: 'URL_DA_IMAGEM_DA_ANA', 
      rating: 5,
    },
    {
      name: 'Felipe Almeida',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      imgUrl: 'URL_DA_IMAGEM_DO_FELIPE', 
      rating: 5,
    },
    {
      name: 'Luciana Costa',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      imgUrl: 'URL_DA_IMAGEM_DA_LUCIANA', 
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 3
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="relative w-full mx-auto rounded-lg ">
      <div className="flex lg:flex-row flex-col items-center space-x-4">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
          <div key={index} className="flex-1 p-4 border rounded-lg bg-white shadow">
            <img
              src={testimonial.imgUrl}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
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
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
      
      <button onClick={prevTestimonial} className="absolute left-0 -ml-4 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition ">
        <FaAngleLeft/>
      </button>
      <button onClick={nextTestimonial} className="absolute right-0 -mr-4 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition ">
        <FaAngleRight/>
      </button>
    </div>
  );
};
