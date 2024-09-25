import { Button } from '@/components/Button';
import { ReactNode } from 'react';

type ServicesCardProps = {
  children: ReactNode;
  serviceTitle: string;
  imgUrl: string;
  hasButton?:boolean
}

export const ServicesCard = ({ serviceTitle, imgUrl, children, hasButton=false }: ServicesCardProps) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg flex flex-col justify-between">
      <img className="w-full" src={imgUrl} alt={serviceTitle} />
      
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{serviceTitle}</div>
        <p className="text-gray-700 text-base">{children}</p>
      </div>
      {hasButton &&<div className='px-6 py-4'><Button/></div>}
    </div>
  );
}
