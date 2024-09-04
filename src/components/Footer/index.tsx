import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'
import logo from '@/assets/logo-carneiro-e-carballido.png'
import { pages, PageType } from '@/utils/constants/pages'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { address, email, whatsApp } from '@/utils/constants/infos'
import { BsWhatsapp } from 'react-icons/bs'
import { FaAngleDoubleRight, FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='w-full bg-blue-carneiro-e-carballido text-white'>
      <ScreenWidthLimiter>
        <div className='flex py-24'>
          <div className='w-7/12 pr-[25%]'>
            <Link to='/'>
              <img src={logo} alt='logotipo'/>
            </Link>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className='w-3/12'>
            <h4 className='text-2xl mb-4 font-bold'>Menu</h4>
            <ul className='flex flex-col gap-2'>
              {pages.map((page:PageType) => { if(page.showOnHeader) return <Link to={page.url} key={page.url}><li className='flex items-center gap-1'> <FaAngleRight/>{page.title}</li></Link>})}
            </ul>
          </div>
          <div className='w-4/12'>
            <h4 className='text-2xl font-bold mb-4'>Contato</h4>
          
            <ul className='flex flex-col gap-2'>
              <li><a href={email.url} className='flex gap-2 items-center'><MdEmail className='text-lg'/>{email.value}</a></li>
              <li><a href={whatsApp.url} className='flex gap-2 items-center'><BsWhatsapp className='text-lg'/>{whatsApp.value}</a></li>
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
