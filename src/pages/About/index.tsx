import { Template } from '@/components/Template'
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import tempBanner01 from '@/assets/_img/departamento.jpg'
import tempBanner02 from '@/assets/_img/consultoria.jpg'


export const About = () => {
  return (
    <Template pageTitle='Conheça a CeC'>
      <Hero pageTitle='Conheça a CeC'/>
        <Section className='py-12 gap-12'>
          <h1 className='text-dark-yellow'>Nós somos a Carneiro & Carbalido</h1>
          <div className='flex lg:flex-row flex-col items-center gap-28'>
            <h2 className='text-4xl text-dark-blue font-semibold'>Transformamos a contabilidade em uma vantagem estratégica</h2>
            <p>Um negócio de sucesso exige estratégia, táticas eficazes e decisões equilibradas. Confie em nossos serviços e foque no crescimento da sua empresa</p>
          </div>
          <div className='flex lg:flex-row flex-col items-center gap-20 lg:mt-4'>
            <img className='w-full rounded-lg shadow-lg object-cover' src={tempBanner01} alt="Imagem sobre a empresa" />
            <img className='w-full rounded-lg shadow-lg object-cover' src={tempBanner02} alt="Imagem sobre a empresa" />
          </div>
          <div className='flex flex-col gap-10 lg:my-4'>
            <h2 className='text-4xl text-dark-blue font-semibold'>Nossa Equipe</h2>
            <div className='flex lg:flex-row flex-col items-center gap-28 lg:my-4'>
              <p>A Carneiro & Carballido Consultores reúne a qualidade e experiência dos serviços de Contabilidade e Consultoria Fiscal e tributária oferecendo aos seus clientes um serviço de contabilidade diferenciado. Fundada, em 2003, a empresa busca um aprimoramento contínuo para proporcionar aos seus clientes um atendimento direcionado e personalizado.</p>
              <p>Nossa missão é dar o suporte necessário, no que se refere à legislação fiscal e contábil, para que o empreendedor possa se preocupar apenas em gerir seu negócio e otimizar seus ganhos.
              Nossa visão é ser uma organização contábil reconhecida pelo profissionalismo e qualidade nos serviços que prestamos.</p>
            </div>
          </div>
        </Section>
      
    </Template>
  )
}
