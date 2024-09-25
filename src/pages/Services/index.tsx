import { Template } from '@/components/Template';
import { Hero } from '@/components/Hero';
import { ServicesCard } from '@/components/ServicesCard';
import { services } from '@/utils/services';
import { useState } from 'react';
import { ServiceType } from '@/types/services';
import { Button } from '@/components/Button';

export const Services = () => {
  const [isPopupOpen, setIspopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const handleOpenPopup = (service: ServiceType) => {
    setSelectedService(service);
    setIspopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
    setIspopupOpen(false);
  };

  return (
    <Template pageTitle="Serviços">
      <Hero pageTitle="Serviços" />
      <section className="flex flex-col items-center justify-center p-40 py-10">
        <div className="text-center">
          <h2 className="text-4xl">Nossos serviços</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
          {services.map((service: ServiceType, i) => (
            <ServicesCard
              key={i}
              serviceTitle={service.title}
              imgUrl={service.img}
              hasButton={true}
              selectedService={service}
              handleOpenPopup={() => handleOpenPopup(service)}
            >
              {service.resume}
            </ServicesCard>
          ))}
        </div>
      </section>

      {isPopupOpen && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            {/* Imagem do serviço */}
            <img className="w-full h-48 object-cover rounded-md" src={selectedService.img} alt={selectedService.title} />

            {/* Título do serviço */}
            <h2 className="text-2xl font-bold mt-4">{selectedService.title}</h2>

            {/* Tópicos do serviço */}
            <ul className="mt-4 list-disc list-inside">
              {selectedService.topics.map((topic, index) => (
                <li key={index} className="text-gray-700">{topic}</li>
              ))}
            </ul>

            {/* Botão */}
            <div className="mt-6">
              <Button />
            </div>

            {/* Botão de Fechar */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </Template>
  );
};
