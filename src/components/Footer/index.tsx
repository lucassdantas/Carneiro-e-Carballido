import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter';
import logo from '@/assets/logo-carneiro-e-carballido.png';
import { pages, PageType } from '@/utils/constants/pages';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { address, email, whatsApp } from '@/utils/constants/infos';
import { BsWhatsapp } from 'react-icons/bs';
import { FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full bg-dark-blue text-white px-40 py-12'>
      <ScreenWidthLimiter>
        <div className='flex flex-col md:flex-row py-12 md:py-24'>
          <div className='w-full md:w-7/12 md:pr-[25%] mb-8 md:mb-0'>
            <Link to='/'>
              <img src={logo} alt='logotipo' className='max-w-[200px] md:max-w-none'/>
            </Link>
            <p className='mt-4 text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className='w-full md:w-3/12 mb-8 md:mb-0'>
            <h4 className='text-2xl mb-4 font-bold text-center md:text-left'>Menu</h4>
            <ul className='flex flex-col gap-2 items-center md:items-start'>
              {pages.map((page: PageType) => {
                if (page.showOnHeader)
                  return (
                    <Link to={page.url} key={page.url}>
                      <li className='flex items-center gap-1'>
                        <FaAngleRight />
                        {page.title}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
          <div className='w-full md:w-4/12'>
            <h4 className='text-2xl font-bold mb-4 text-center md:text-left'>Contato</h4>
            <ul className='flex flex-col gap-2 items-center md:items-start'>
              <li>
                <a href={email.url} target='_blank' className='flex gap-2 items-center'>
                  <MdEmail className='text-lg' />
                  {email.value}
                </a>
              </li>
              <li>
                <a href={whatsApp.url} target='_blank' className='flex gap-2 items-center'>
                  <BsWhatsapp className='text-lg' />
                  {whatsApp.value}
                </a>
              </li>
              <li>
                <a href={address.url} target='_blank' className='flex gap-2 items-center'>
                  <FaMapMarkerAlt className='text-2xl' />
                  {address.value}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='  flex flex-col justify-center items-center w-full gap-2'>
          <div className="flex justify-center w-full text-center">
            <span>© {currentYear} - Carneiro e Carballido - Todos os direitos reservados</span>
          </div>
          <div className="flex justify-center w-full text-center gap-4">
            <Link to='/politica-de-privacidade' className='flex gap-2 items-center text-sm'>Política de privacidade</Link>
            <Link to='/termos-e-condicoes' className='flex gap-2 items-center text-sm'> Termos e condições</Link>
          </div>
        </div>
      </ScreenWidthLimiter>
    </footer>
  );
};
