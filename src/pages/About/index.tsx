import { Template } from '@/components/Template'
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import tempBanner02 from '@/assets/_img/consultoria.jpg'
import businessService from '@/assets/_img/abertura.jpg';
import { SuperTitle } from '@/components/Titles/SuperTitle';
import { Button } from '@/components/Button';


export const About = () => {
  return (
    <Template pageTitle='Conheça a CeC'>
      <Hero pageTitle='Conheça a CeC'/>
      <Section className='my-12 lg:gap-12'>
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between w-full">
          <div className="w-full lg:w-1/2 flex flex-col lg:text-left text-center lg:items-start items-center">
            <SuperTitle className='text-dark-yellow' content='Nós somos a Carneiro & Carbalido'/>
            <h1 className='text-3xl text-dark-blue font-semibold my-4'>Transformamos a contabilidade em uma vantagem estratégica</h1>
            <p className='mb-4'>Um negócio de sucesso exige estratégia, táticas eficazes e decisões equilibradas. Confie em nossos serviços e foque no crescimento da sua empresa</p>
            <p className='mb-4'>O mundo dos negócios exige muito mais do que apenas cumprimento de obrigações fiscais. Para prosperar, é essencial contar com táticas eficazes, planejamento detalhado e decisões embasadas em análises precisas. Nós, da Carneiro & Carbalido, estamos aqui para ajudar você a enxergar a contabilidade como uma ferramenta crucial para a gestão estratégica. Assim, você pode focar no que realmente importa: o crescimento sustentável e a expansão de sua empresa.</p>
            <div className='w-[250px] lg:text-left text-center'>
              <Button className='' />
            </div>
          </div>  
          <div className="w-full lg:w-1/2 my-4 text-center flex flex-col lg:items-end items-center">
            <img className='w-full h-[425px] max-w-[500px] rounded-lg shadow-lg object-cover' src={tempBanner02} alt="Imagem sobre a empresa" />
          </div>  
        </div>
      </Section>
        
      <Section className='my-12'>
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="w-full lg:w-1/2 my-4 text-center flex flex-col lg:items-start items-center">
            <img className='w-full h-[425px] max-w-[500px] rounded-lg shadow-lg object-cover' src={businessService} alt="Imagem sobre a empresa" />
          </div>

          <div className="w-full flex flex-col lg:items-start items-center lg:w-1/2 lg:text-left text-center">
            <SuperTitle className='text-dark-yellow' content='Nossa equipe'/>
            <h1 className='text-3xl text-dark-blue font-semibold my-4'>Equipe Experiente e Comprometida</h1>
            <p className='mb-4'>A Carneiro & Carballido Consultores reúne a qualidade e experiência dos serviços de Contabilidade e Consultoria Fiscal e tributária oferecendo aos seus clientes um serviço de contabilidade diferenciado. Fundada, em 2003, a empresa busca um aprimoramento contínuo para proporcionar aos seus clientes um atendimento direcionado e personalizado.</p>
            <p className='mb-4'>Nossa missão é dar o suporte necessário, no que se refere à legislação fiscal e contábil, para que o empreendedor possa se preocupar apenas em gerir seu negócio e otimizar seus ganhos.
            Nossa visão é ser uma organização contábil reconhecida pelo profissionalismo e qualidade nos serviços que prestamos.</p>
            <div className='w-[250px] lg:text-left text-center'>
              <Button className='' />
            </div>
          </div>  
        </div>
      </Section>
      
    </Template>
  )
}
