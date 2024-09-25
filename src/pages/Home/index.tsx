import { Template } from '@/components/Template'
import manImage from '@/assets/man-sitting-accessing-his-laptop.jpg';
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



export const Home = () => {
  return (
    <Template pageTitle="Home" transparentHeader={true}>
      <Section className="lg:h-screen lg:p-40 py-12 bg-no-repeat bg-cover flex gap-10 items-center" bgImg={manImage} >
        <div className='flex flex-col gap-10'>
          <div className='lg:w-1/2 w-full text-white'>
            <SuperTitle content='Cec Consultores' color='white' className='mb-8'/>
            <h1 className="text-white text-4xl font-bold my-4">Contabilidade da sua empresa de forma prática, segura e econômica</h1>
            <p>Tenha a praticidade de uma contabilidade digital com a credibilidade de um atendimento humanizado.</p>
          </div>
          <div className='w-64'>
            <Button content='Entre em contato'/>
          </div>
        </div>
      </Section>

      <Section className='relative flex flex-col items-center justify-center py-10 '>
        <div className='text-center'>
          <h2 className='text-4xl text-dark-blue font-semibold'>Nossos serviços</h2>
        </div>
        <div className='flex  lg:flex-row flex-col items-center  gap-10 mt-10'>
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
          <p className="text-white text-2xl ">Profissionais qualificados e preparados para trazer as melhores soluções.</p>
        </div>

      </Section>

      <Section className='py-12 gap-12'>
        <div className='flex lg:flex-row flex-col py-12 items-center gap-12'>
          <div className="flex flex-col lg:w-1/2 w-full items-start">
            <h2 className='text-4xl mb-4  text-dark-blue font-semibold'>Sobre a empresa</h2>
            <p className='mb-4'>A Carneiro e Carballido oferece soluções contábeis personalizadas para crescimento e eficiência financeira, com foco em contabilidade empresarial, fiscal, trabalhista e consultoria tributária.</p>
            <p className='mb-4'>Te ajudamos a escolher o formato ideal para sua empresa, de acordo com seu perfil de empreendedor</p>
            <Button/>
          </div>
          <div className="flex flex-col lg:w-1/2 w-full items-center">
            <img className='w-full h-[512px] object-cover rounded-lg shadow-lg' src={aboutImg} alt="Imagem sobre a empresa" />
          </div>
        </div>
      </Section>


      <Section className='bg-light-gray py-10'>
        <h2 className="text-4xl  text-center mb-6 font-semibold">Perguntas Frequentes</h2>
        <FAQ/>
      </Section>

      <Section className='gap-5 py-10'>
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
