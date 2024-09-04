import { whatsApp } from "@/utils/constants/infos"
import { BsWhatsapp } from "react-icons/bs"

export const FloatWppButton = () => {
  return (
    <a href={whatsApp.url} target='_blank' className='fixed lg:bottom-4 lg:right-4 bottom-12 right-12'>
      <div className='bg-green-wpp p-4 w-fit rounded-full text-white cursor-pointer'>
        <BsWhatsapp className='text-4xl'/>
      </div>
    </a>
  )
}
