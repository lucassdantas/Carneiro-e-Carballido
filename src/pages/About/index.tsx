import { Template } from '@/components/Template'
import ourTeam from '@/assets/our-team.jpg'
import team from '@/assets/team.jpg'
import { Hero } from '@/components/Hero';
import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter';

export const About = () => {
  return (
    <Template pageTitle='Sobre'>
      <Hero pageTitle='Sobre'/>
      <ScreenWidthLimiter>
        <section className='flex flex-col px-40 py-12  gap-12'>
          <div><h1 className='text-dark-yellow'>Nós somos a Carneiro & Carbalido</h1></div>
          <div className='flex gap-28'>
            <div><h2 className=' text-4xl text-dark-blue font-semibold'>Transformamos a contabilidade em uma vantagem estratégica</h2></div>
            <div><p className='px-40'>Um negócio de sucesso exige estratégia, táticas eficazes e decisões equilibradas. Confie em nossos serviços e foque no crescimento da sua empresa</p></div>
          </div>
          <div className='flex gap-20'>
            <div><img className='w-full h-auto rounded-lg shadow-lg' src={ourTeam} alt="Imagem sobre a empresa" /></div>
            <div><img className='w-full h-auto rounded-lg shadow-lg' src={team} alt="Imagem sobre a empresa" /></div>
          </div>
          <div className='flex flex-col gap-10'>
            <h2 className='text-4xl text-dark-blue font-semibold'>Nossa Equipe</h2>
            <div className='flex gap-28'>
              <div><p>A Carneiro & Carballido Consultores reúne a qualidade e experiência dos serviços de Contabilidade e Consultoria Fiscal e tributária oferecendo aos seus clientes um serviço de contabilidade diferenciado. Fundada, em 2003, a empresa busca um aprimoramento contínuo para proporcionar aos seus clientes um atendimento direcionado e personalizado.</p></div>
              <div><p>Nossa missão é dar o suporte necessário, no que se refere à legislação fiscal e contábil, para que o empreendedor possa se preocupar apenas em gerir seu negócio e otimizar seus ganhos.
              Nossa visão é ser uma organização contábil reconhecida pelo profissionalismo e qualidade nos serviços que prestamos.</p></div>
            </div>
          </div>
          
        </section>
      </ScreenWidthLimiter>
      
    </Template>
  )
}
