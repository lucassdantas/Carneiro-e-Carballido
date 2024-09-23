import { Template } from '@/components/Template'
import manImage from '@/assets/man-sitting-accessing-his-laptop.jpg';
import accountingService from '@/assets/image-accounting-service.jpg'
import businessService from '@/assets/business-and-tax-consultancy-service-image.jpg'
import companiesService from '@/assets/service-image-opening-and-legalization-of-companies.jpg'
import googleLogo from '@/assets/Google-Logo.png'
import banner from '@/assets/banner.jpg'
import aboutImg from '@/assets/about-image.jpg'
import { Button } from '@/components/Button';
import { ServicesCard } from '@/components/ServicesCard';
import { FAQ } from '@/components/FAQ';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ContactForm } from '@/components/ContactForm';
import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter';



export const Home = () => {
  return (
    <Template pageTitle="Home">
      <section
        className=" h-screen p-40 bg-no-repeat bg-cover  flex gap-10 items-center  "
        style={{ backgroundImage: `url(${manImage})`  }} 
      >
        <div className='flex flex-col gap-10'>
          <div className='w-4/12'>
        <h1 className="text-white text-5xl font-semibold">
          Contabilidade da sua 
          empresa de forma prática, segura e econômica

        </h1>
        </div>
        <div className='w-64'>
        <Button content='Entre em contato'/>
        </div>
        </div>
      </section>
      <ScreenWidthLimiter>
        <section className='flex flex-col items-center justify-center p-40 py-10 '>
          <div className='text-center'>
          <h2 className='text-4xl text-dark-blue font-semibold'>Nossos serviços</h2>
          </div>
          <div className=' flex  gap-10 mt-10'>

          <ServicesCard serviceTitle='Consultoria Empresarial e Tributária' imgUrl={businessService}>
            A consultoria empresarial e tributária é essencial para empresas que buscam otimizar suas operações e melhorar a eficiência fiscal.
          </ServicesCard>

          <ServicesCard serviceTitle='Contabilidade' imgUrl={accountingService}>
            Área responsável por todo o processamento, registro e análise das informações e documentos da empresa, necessários para a elaboração de relatórios gerenciais que serão utilizados pelos gestores.
          </ServicesCard>


          <ServicesCard serviceTitle='Abertura e Legalização de Empresas' imgUrl={companiesService}>
            A abertura de uma empresa necessita de todo um processo legal a ser seguido. É a parte de registro da empresa nos órgãos competentes. É o nascimento da sua empresa.
          </ServicesCard>
          </div>
          <div className='mt-5 w-48'>
            <Button url='*' content='Saiva mais'/>
          </div>
        </section>

        <section
          className="w-full h-72 p-10 bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-center "
          style={{ backgroundImage: `url(${banner})` }} 
        >
          <div className="text-center">
            <h2 className="text-white text-4xl font-semibold ">Melhorar o seu negócio</h2>
            <p className="text-white text-2xl ">Profissionais qualificados e preparados para trazer as melhores soluções.</p>
          </div>

        </section>

        <section className='flex px-40 py-12 items-center gap-12'>
          <div className="flex flex-col w-1/2 items-start">
            <h2 className='text-4xl mb-4  text-dark-blue font-semibold'>Sobre a empresa</h2>
            <p className='mb-4'>A Carneiro e Carballido oferece soluções contábeis personalizadas para crescimento e eficiência financeira, com foco em contabilidade empresarial, fiscal, trabalhista e consultoria tributária.</p>
            <Button/>
          </div>
          <div className="flex flex-col w-1/2 items-center">
          <img className='w-full h-auto rounded-lg shadow-lg' src={aboutImg} alt="Imagem sobre a empresa" />
          </div>
        </section>


        <section className='bg-light-gray'>
          <FAQ/>
        </section>

        <section className='flex flex-col items-center gap-5 w-full p-10'>
          <h2 className='text-center text text-4xl  text-dark-blue font-semibold'>
            O que nossos clientes falam
          </h2>
          <h2 className='text-2xl font-semibold'>Excelente</h2>
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
        </section>

        <section  className=' flex items-center justify-center p-12 bg-light-gray'>
          
          <div className=' flex flex-col gap-4 w-5/12 py-12 px-5 rounded-lg bg-blue-carneiro-e-carballido'>
            <h2 className='text-center text-4xl text-white font-semibold'>
              Gostaríamos de ouvir você
            </h2>
          <ContactForm/>
          </div>

        </section>
      </ScreenWidthLimiter>

    </Template>
  )
}
