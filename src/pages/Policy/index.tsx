import { Template } from '@/components/Template'

export const Policy = () => {
  return (
    <Template pageTitle='Política de privacidade'>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
          Nossa Política de Privacidade
        </h2>
        <p className="mb-6 text-gray-700">Última atualização: 4 de setembro de 2024</p>

        <p className="mb-6 text-gray-700">
          A <strong>Carneiro e Carballido</strong> respeita a sua privacidade e está comprometida com a proteção dos dados pessoais
          que você compartilha conosco. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações.
        </p>

        <h3 className="text-2xl font-semibold mb-4">1. Coleta de Informações</h3>
        <p className="mb-6 text-gray-700">
          Nós coletamos informações pessoais que você nos fornece voluntariamente ao entrar em contato conosco ou ao utilizar nossos
          serviços, como seu nome, e-mail e telefone. Além disso, informações sobre sua navegação em nosso site podem ser coletadas automaticamente.
        </p>

        <h3 className="text-2xl font-semibold mb-4">2. Uso das Informações</h3>
        <p className="mb-6 text-gray-700">
          As informações que coletamos são usadas para fornecer e melhorar nossos serviços contábeis, responder às suas solicitações,
          e personalizar sua experiência em nosso site. Também podemos usar seus dados para comunicação, como enviar atualizações
          ou materiais promocionais, desde que você tenha consentido.
        </p>

        <h3 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h3>
        <p className="mb-6 text-gray-700">
          Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a execução dos nossos serviços ou
          conforme exigido por lei. Qualquer compartilhamento de dados será feito em conformidade com as regulamentações aplicáveis.
        </p>

        <h3 className="text-2xl font-semibold mb-4">4. Segurança das Informações</h3>
        <p className="mb-6 text-gray-700">
          Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acessos não autorizados,
          perda ou alteração. No entanto, nenhum sistema é completamente seguro e não podemos garantir a segurança absoluta dos dados.
        </p>

        <h3 className="text-2xl font-semibold mb-4">5. Seus Direitos</h3>
        <p className="mb-6 text-gray-700">
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos ou caso tenha dúvidas
          sobre nossa política de privacidade, entre em contato conosco pelo e-mail{' '}
          <a href="mailto:contato@cecconsultores.com.br" className="text-blue-600 underline">contato@cecconsultores.com.br</a>.
        </p>

        <h3 className="text-2xl font-semibold mb-4">6. Alterações a Esta Política</h3>
        <p className="mb-6 text-gray-700">
          Podemos atualizar esta política de privacidade periodicamente. Quaisquer alterações serão publicadas nesta página, com a data
          da última modificação. Recomendamos revisar esta página regularmente para manter-se informado sobre como protegemos seus dados.
        </p>

        <h3 className="text-2xl font-semibold mb-4">7. Contato</h3>
        <p className="mb-6 text-gray-700">
          Se você tiver qualquer dúvida ou preocupação sobre nossa política de privacidade ou sobre o uso de suas informações pessoais,
          entre em contato conosco através do e-mail{' '}
          <a href="mailto:contato@cecconsultores.com.br" className="text-blue-600 underline">contato@cecconsultores.com.br</a> 
           ou visite-nos em nosso endereço: Avenida Presidente Vargas, 446 - Sala 1704, Centro – Rio de Janeiro.
        </p>
      </div>
    </Template>
  )
}
