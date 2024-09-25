import { Button } from '@/components/Button';
import { ServiceType } from '@/types/services'

interface ServicePopupProps{
  selectedService:ServiceType;
  handleClosePopup: () => void;
}
export const ServicePopup = ({selectedService, handleClosePopup}:ServicePopupProps) => {
  
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className="fixed inset-0  bg-black bg-opacity-50" onClick={(handleClosePopup)}></div>
      <div className="bg-white p-8 rounded-lg lg:max-w-[50%] max-w-[90%] w-full relative z-10 overflow-y-scroll max-h-[80%]">
        {/* Imagem do serviço */}
        <img className="w-full h-[250px] object-cover rounded-md" src={selectedService.img} alt={selectedService.title} />

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
  )
}
