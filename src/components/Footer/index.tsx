import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'
import logo from '@/assets/logo-carneiro-e-carballido.png'
import { pages, PageType } from '@/utils/constants/pages'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { address, email, whatsApp } from '@/utils/constants/infos'
import { BsWhatsapp } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='w-full bg-blue-carneiro-e-carballido text-white'>
      <ScreenWidthLimiter>
        <div className='flex py-24'>
          <div className='w-8/12'>
            <img src={logo} alt='logotipo'/>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className='w-2/12'>
            <h4 className='text-2xl mb-4'>Menu</h4>
            <ul>
              {pages.map((page:PageType) => { if(page.showOnHeader) return <Link to={page.url}><li>{page.title}</li></Link>})}
            </ul>
          </div>
          <div className='w-4/12'>
            <h4 className='text-2xl mb-4'>Contato</h4>
          
            <ul className='gap-20'>
              <li><a href={email.url} className='flex gap-2 items-center'><MdEmail/>{email.value}</a></li>
              <li><a href={whatsApp.url} className='flex gap-2 items-center'><BsWhatsapp/>{whatsApp.value}</a></li>
              <li><a href={address.url} className='flex gap-2 items-center'><FaMapMarkerAlt className='text-2xl'/>{address.value}</a></li>
            </ul>
          </div>
        </div>
        <div className='text-center pb-2'>
          <span>© {currentYear} - Carneiro e Carballido - Todos os direitos reservados</span>
        </div>
      </ScreenWidthLimiter>
    </footer>
  )
}
