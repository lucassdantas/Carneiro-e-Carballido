import logo from '@/assets/logo-carneiro-e-carballido.png';
import { pages, PageType } from '@/utils/constants/pages';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { address, email, whatsApp } from '@/utils/constants/infos';
import { BsWhatsapp } from 'react-icons/bs';
import { FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Section } from '@/components/Section';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full bg-blue-carneiro-e-carballido text-white lg:px-40 py-12'>
      <Section>
        <div className='flex flex-col lg:flex-row items-center py-12 lg:py-24'>
          <div className='w-full flex flex-col items-center lg:items-start  lg:w-7/12 lg:pr-[25%] mb-8 lg:mb-0'>
            <div className='bg-white rounded-lg text-black p-4'>
              <Link to='/'>
                <img src={logo} alt='logotipo' className='max-w-[200px] lg:max-w-none'/>
              </Link>
              <p className='mt-4 text-center lg:text-left'>Fundada em 2003, A Carneiro & Carballido Consultores reúne a qualidade e experiência dos serviços de Contabilidade, Consultoria Fiscal e tributária e departamento de pessoal / RH </p>
            </div>
          </div>
          <div className='w-full lg:w-3/12 mb-8 lg:mb-0'>
            <h4 className='text-2xl mb-4 font-bold text-center lg:text-left'>Menu</h4>
            <ul className='flex flex-col gap-2 items-center lg:items-start'>
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
          <div className='w-full lg:w-4/12'>
            <h4 className='text-2xl font-bold mb-4 text-center lg:text-left'>Contato</h4>
            <ul className='flex flex-col gap-2 items-center lg:items-start'>
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
      </Section>
    </footer>
  );
};
