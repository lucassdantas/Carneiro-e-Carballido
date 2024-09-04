import { Template } from '@/components/Template';
import { MdEmail } from 'react-icons/md';
import { address, email, whatsApp } from '@/utils/constants/infos';
import { BsWhatsapp } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SuperTitle } from '@/components/Titles/SuperTitle';
import { ContactForm } from '@/components/ContactForm';

export const Contact = () => {
  
  return (
    <Template pageTitle='Contato'>
      <section className='flex py-12 items-center gap-12'>
        <div className="flex flex-col w-1/2">
          <SuperTitle content='Continue conectado conosco' className='mb-2'/>
          <h2 className='text-4xl mb-4'>Fale conosco para uma solução personalizada</h2>
          <p className='mb-4'>Lorem ipsum</p>
          <ul className='flex flex-col gap-2 items-center md:items-start max-w-[60%]'>
            <li>
              <a href={email.url} className='flex gap-2 items-center'>
                <MdEmail className='text-lg' />
                {email.value}
              </a>
            </li>
            <li>
              <a href={whatsApp.url} className='flex gap-2 items-center'>
                <BsWhatsapp className='text-lg' />
                {whatsApp.value}
              </a>
            </li>
            <li>
              <a href={address.url} className='flex gap-2 items-center'>
                <FaMapMarkerAlt className='text-2xl' />
                {address.value}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <div className="bg-gray-700 h-[450px] w-full rounded-xl"></div>
        </div>
      </section>
      <section className='flex py-12 items-center gap-12'>
        <div className="flex flex-col w-1/2 items-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4397.941197483763!2d-43.18408402390271!3d-22.90157463768632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f60863134a1%3A0xfaab42b35519cdd6!2sCarneiro%20e%20Carballido%20Contabilidade!5e1!3m2!1sen!2sbr!4v1725422607947!5m2!1sen!2sbr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex flex-col w-1/2">
          <h2 className='text-4xl mb-4'>Envie uma mensagem</h2>
          <p className='mb-4'>Lorem ipsum</p>
          <ContactForm/>
        </div>
      </section>
    </Template>
  );
};
