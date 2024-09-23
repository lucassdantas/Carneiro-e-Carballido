import { Template } from '@/components/Template'
import { Hero } from '@/components/Hero';
import { ServicesCard } from '@/components/ServicesCard';
import accountingService from '@/assets/image-accounting-service.jpg';
import businessService from '@/assets/business-and-tax-consultancy-service-image.jpg';
import companiesService from '@/assets/service-image-opening-and-legalization-of-companies.jpg';
import costAccountingServiceImage from '@/assets/Cost-Accounting-service-image.jpg';
import personalDepartment from '@/assets/personnel-department-service-image.jpg';
import regularizationImage from '@/assets/regularization-service-image.jpg';



export const Services = () => {
  return (
    <Template pageTitle='Serviços'>
      <Hero pageTitle='Serviços'/>
      <section className='flex flex-col items-center justify-center p-40 py-10'>
        <div className='text-center'>
          <h2 className='text-4xl'>Nossos serviços</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
          <ServicesCard serviceTitle='Consultoria Empresarial e Tributária' imgUrl={businessService}>
            A consultoria empresarial e tributária é essencial para empresas que buscam otimizar suas operações e melhorar a eficiência fiscal.
          </ServicesCard>

          <ServicesCard serviceTitle='Contabilidade' imgUrl={accountingService}>
            Área responsável por todo o processamento, registro e análise das informações e documentos da empresa, necessários para a elaboração de relatórios gerenciais que serão utilizados pelos gestores.
          </ServicesCard>

          <ServicesCard serviceTitle='Abertura e Legalização de Empresas' imgUrl={companiesService}>
            A abertura de uma empresa necessita de todo um processo legal a ser seguido. É a parte de registro da empresa nos órgãos competentes. É o nascimento da sua empresa.
          </ServicesCard>

          <ServicesCard serviceTitle='Regularização Fiscal' imgUrl={regularizationImage}>
            A consultoria empresarial é crucial para o desenvolvimento e crescimento sustentável das empresas.
          </ServicesCard>

          <ServicesCard serviceTitle='Departamento Pessoal' imgUrl={personalDepartment}>
            Realizamos auditorias completas para garantir a conformidade e a eficiência dos processos internos.
          </ServicesCard>

          <ServicesCard serviceTitle='Contabilidade de Custo' imgUrl={costAccountingServiceImage}>
            Oferecemos planejamento tributário para minimizar a carga fiscal e maximizar os lucros.
          </ServicesCard>
        </div>
      </section>
    </Template>
  )
}