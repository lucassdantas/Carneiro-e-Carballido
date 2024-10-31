import { Template } from '@/components/Template'
import googleLogo from '@/assets/Google-Logo.png'
import banner from '@/assets/banner.jpg'
import aboutImg from '@/assets/about-image.jpg'
import { Button } from '@/components/Button';
import { ServicesCard } from '@/components/ServicesCard';
import { FAQ } from '@/components/FAQ';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { Section } from '@/components/Section';
import { services } from '@/utils/services';
import { SuperTitle } from '@/components/Titles/SuperTitle';
import chainImg from '@/assets/_img/mapa.jpg'
import { iconsData } from '@/utils/iconsData';
import { Icons } from '@/types/icons';
import { useState } from 'react';

export const Home = () => {
  const [bannerContent, setBannerContent] = useState('Tenha a praticidade de uma contabilidade com a credibilidade de um atendimento humanizado.')
  const [bannerTitle, setBannerTitle] = useState('Contabilidade da sua empresa de forma prática, segura e econômica')
  const [bannerImg, setBannerImg] = useState(iconsData[0].image)
  const handleIconHover = (icon:Icons) => {
    setBannerContent(icon.content)
    setBannerTitle(icon.title)
    setBannerImg(icon.image)
  }
  return (
    <Template pageTitle="Home" transparentHeader={false}>
      <Section className="bg-no-repeat lg:bg-fit bg-contain bg-center bg-white lg:h-[500px] sm:h-[250px] h-[150px]" bgImg={bannerImg}>
        <div className='w-full lg:h-[500px] h-full flex flex-col justify-end py-4'>
          <div className='w-full lg:h-[200px] lg:flex flex-col text-black bg-white bg-opacity-60 p-4 rounded-xl hidden'>
            {
              /* 
                <div className='lg:w-1/2 w-full h-full flex flex-col justify-between text-black bg-white bg-opacity-60 p-4 rounded-xl'>
                  <SuperTitle content='Cec Consultores' color='black' className='mb-2'/>
                  <h1 className="text-black text-4xl font-bold my-2">{bannerTitle}</h1>
                  <p className='min-h-[120px]'>{bannerContent}</p>
                  <div className='w-64'>
                    <Button content='Entre em contato'/>
                  </div>
                </div> 
              */
            }
            <div className="flex lg:overflow-hidden overflow-x-scroll w-full">
              {iconsData.map((icon:Icons, i:number) => (
                <img 
                  key={i} 
                  src={icon.icon} 
                  alt={'Icone de '+icon.title} 
                  onMouseOver={() => handleIconHover(icon)}
                  onClick={() => handleIconHover(icon)}
                  className='lg:w-fit object-cover lg:max-w-[75px] w-[25%] cursor-pointer'
                />
              ))}
            </div>
            <p className='font-bold text-lg title'>{bannerTitle}</p>
            <p>{bannerContent}</p>
          </div>
        </div>
      </Section>

      <Section className='lg:hidden block'>
        <div className='w-full lg:h-[160px] flex flex-col text-black bg-white bg-opacity-60 p-4 rounded-xl '>
          <div className="flex overflow-x-scroll lg:w-full w-fit">
            {iconsData.map((icon:Icons, i:number) => (
              <img 
                key={i} 
                src={icon.icon} 
                alt={'Icone de '+icon.title} 
                onMouseOver={() => handleIconHover(icon)}
                onClick={() => handleIconHover(icon)}
                className='w-[75px] cursor-pointer'
              />
            ))}
          </div>
          <p className='font-bold text-lg'>{bannerTitle}</p>
          <p>{bannerContent}</p>
        </div>
      </Section>

      <Section className='relative flex flex-col items-center justify-center py-10 '>
        <div className='text-center'>
          <h2 className='text-4xl text-dark-blue font-semibold'>Nossos serviços</h2>
        </div>
        <div className='flex lg:flex-row flex-col lg:items-stretch items-center lg:space-x-10 lg:space-y-0 space-y-10 mt-10'>
          {services.map((service, i) => {
            if(i>2) return null
            return <ServicesCard key={i} serviceTitle={service.title} imgUrl={service.img}>{service.resume}</ServicesCard>
          })}
        </div>
        <div className='mt-12 w-full text-center px-[25%]'>
          <Button url={'/servicos'} content='Saiba mais' target='' />
        </div>
      </Section>

      <Section
        className="businessBg w-full h-72 p-10 bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-center"
        bgImg={banner}
      >
        <div className="text-center">
          <h2 className="text-white text-4xl font-semibold ">Melhorar o seu negócio</h2>
          <p className="text-white text-2xl ">Temos profissionais qualificados e preparados para trazer as melhores soluções para o seu negócio</p>
        </div>

      </Section>

      <Section className='py-12 gap-12'>
        <div className='flex lg:flex-row flex-col-reverse py-12 items-center gap-12'>
          <div className="flex flex-col lg:w-1/2 w-full text-justify ">
            <h2 className='text-4xl mb-4  text-dark-blue font-semibold lg:text-left text-center'>Sobre a empresa</h2>
            <p className='mb-4'>A Carneiro & Carballido Consultores se destaca pela excelência e experiência em contabilidade, consultoria fiscal e tributária, além de serviços de departamento pessoal/RH, proporcionando aos seus clientes um serviço único.</p>
            <p className='mb-4'>Desde sua fundação em 2003, a empresa está comprometida com a melhoria contínua, visando oferecer um atendimento personalizado, realizado diretamente pelos sócios.</p>
            <p className='mb-4'>Ajudamos você a definir o formato ideal para sua empresa, de acordo com seu perfil empreendedor.</p>
            <Button/>
          </div>
          <div className="flex flex-col lg:w-1/2 w-full items-center">
            <img className='w-full h-[512px] object-cover rounded-lg shadow-lg' src={aboutImg} alt="Imagem sobre a empresa" />
          </div>
        </div>
      </Section>


      {/* <Section className='bg-light-gray py-10'>
        <h2 className="text-4xl  text-center mb-6 font-semibold">Perguntas Frequentes</h2>
        <FAQ/>
      </Section> */}

      <Section className='gap-5 py-10 bg-contain bg-center bg-no-repeat' bgImg={chainImg}>
        <div className="flex flex-col items-center justify-center">
          <h2 className='text-center text text-4xl  text-dark-blue font-semibold'> O que nossos clientes falam</h2>
          <h3 className='text-2xl font-semibold mt-4'>Excelente</h3>
          <div className="flex">
            <svg className={`h-5 w-5 text-yellow-500`} fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className={`h-5 w-5 text-yellow-500`} fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className={`h-5 w-5 text-yellow-500`} fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className={`h-5 w-5 text-yellow-500`} fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className={`h-5 w-5 text-yellow-500`} fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <p>Com base em 5 avaliações</p>
          <img className='w-24' src={googleLogo} alt="Google Logo" />
          <TestimonialCarousel/>
        </div>
      </Section>
    </Template>
  )
}
