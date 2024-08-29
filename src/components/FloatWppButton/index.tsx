import { BsWhatsapp } from "react-icons/bs"

export const FloatWppButton = () => {
  return (
    <a href='https://api.whatsapp.com/send?phone=5521999273395&text=Olá, vim do site e quero saber mais sobre seus serviços!' target='_blank' className='fixed bottom-4 right-4'>
      <div className='bg-green-wpp p-4 w-fit rounded-full text-white cursor-pointer'>
        <BsWhatsapp className='text-4xl'/>
      </div>
    </a>
  )
}
