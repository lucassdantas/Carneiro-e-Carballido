import { Button, ServiceCardButton } from '@/components/Button';
import { ServiceType } from '@/types/services';
import { ReactNode } from 'react';

type ServicesCardProps = {
  children: ReactNode;
  serviceTitle: string;
  imgUrl: string;
  hasButton?:boolean;
  selectedService?:ServiceType;
  handleOpenPopup?: (service: ServiceType) => void;
}

export const ServicesCard = ({ serviceTitle, imgUrl, children, hasButton=false, selectedService, handleOpenPopup }: ServicesCardProps) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg flex flex-col justify-between max-w-[650px]">
      <img className="w-full min-h-[250px] max-h-[250px] object-cover" src={imgUrl} alt={serviceTitle} />
      <div className="px-6 py-4 flex flex-col justify-start items-start h-full ">
        <div className="font-bold text-xl mb-2">{serviceTitle}</div>
        <p className="text-gray-700 text-base text-justify tracking-tighter" style={{wordSpacing:'-25%'}}>{children}</p>
      </div>
      {hasButton && !handleOpenPopup && <div className='px-6 py-4' ><Button/></div>}
      {hasButton && handleOpenPopup && selectedService  && <div className='px-6 py-4' onClick={() => handleOpenPopup(selectedService)}><ServiceCardButton/></div>}
    </div>
  );
}
