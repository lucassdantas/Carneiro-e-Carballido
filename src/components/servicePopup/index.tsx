import { Button } from '@/components/Button';
import { ServiceType } from '@/types/services'
import { useState } from 'react';

interface ServicePopupProps{
  selectedService:ServiceType;
  handleClosePopup: () => void;
}
export const ServicePopup = ({selectedService, handleClosePopup}:ServicePopupProps) => {
  const [currentBenefictContent, setCurrentBenefictContent] = useState(selectedService.benefits[0].content)
  return (
    <div className='fixed top-0 inset-0 flex items-center justify-center'>
      <div className="fixed inset-0  bg-black bg-opacity-50" onClick={(handleClosePopup)}></div>
      <div className="bg-white p-8 rounded-lg lg:max-w-[50%] max-w-[90%] w-full relative z-10 overflow-y-scroll max-h-[88%]">
        <img className="w-full h-[250px] object-cover rounded-md" src={selectedService.img} alt={selectedService.title} />
        <h2 className="text-2xl font-bold mt-4">{selectedService.title}</h2>
        <ul className="mt-4 list-disc list-inside">{selectedService.topics.map((topic, index) =>  <li key={index} className="text-gray-700">{topic}</li>)}</ul>
        <h3 className='text-xl font-bold my-4'>Benefícios:</h3>
        <div className="flex">
          {selectedService.benefits.map((benefit, i) => (
            <img 
              key={i} 
              src={benefit.icon} 
              alt={'Icone de '+benefit.title} 
              className='w-fit object-cover max-w-[75px] cursor-pointer overflow-x-scroll'
              onClick={() => setCurrentBenefictContent(benefit.content)}
              onMouseOver={() => setCurrentBenefictContent(benefit.content)}
            />
          ))}
        </div>
        <p className='min-h-[75px]'>{currentBenefictContent}</p>
        <div className="mt-6">
          <Button />
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClosePopup}
        >
          &times;
        </button>
      </div>
    </div>
  )
}
