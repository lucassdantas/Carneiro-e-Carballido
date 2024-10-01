import { Section } from '@/components/Section'
import { address, whatsApp } from '@/utils/constants/infos'
import { BsWhatsapp } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const SuperHeader = () => {
  return (
    <Section className='text-white bg-blue-carneiro-e-carballido py-2'>
      <div className="flex items-center gap-8">
        <div >
          <a href={address.url}  target='_blank' className='flex items-center gap-2'> <FaMapMarkerAlt/> {address.value}</a>
        </div>
        <div>
          <a href={whatsApp.url} target='_blank' className='flex items-center gap-2'> <BsWhatsapp/> {whatsApp.value}</a>
        </div>
      </div>
      <div className="flex items-center"></div>
    </Section>
  )
}
