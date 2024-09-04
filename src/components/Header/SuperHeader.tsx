import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'
import { address, whatsApp } from '@/utils/constants/infos'
import { BsWhatsapp } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const SuperHeader = () => {
  return (
    <div>
      <ScreenWidthLimiter>
        <div className="flex items-center gap-4">
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt/> <a href={address.url} target='_blank'>{address.value}</a>
          </div>
          <div className='flex items-center gap-2'>
            <BsWhatsapp/> <a href={whatsApp.url}>{whatsApp.value}</a>
          </div>
        </div>
        <div className="flex items-center"></div>
      </ScreenWidthLimiter>
    </div>
  )
}
