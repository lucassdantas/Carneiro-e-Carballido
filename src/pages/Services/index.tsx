import { Template } from '@/components/Template';
import { Hero } from '@/components/Hero';
import { ServicesCard } from '@/components/ServicesCard';
import { services } from '@/utils/services';
import { useState } from 'react';
import { ServiceType } from '@/types/services';
import { Button } from '@/components/Button';
import { ServicePopup } from '@/components/servicePopup';
import { Section } from '@/components/Section';

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
      <Section className="flex flex-col items-center justify-center py-10">
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
      </Section>

      {isPopupOpen && selectedService && <ServicePopup selectedService={selectedService} handleClosePopup={handleClosePopup}/>}
    </Template>
  );
};
