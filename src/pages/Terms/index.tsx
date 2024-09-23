import { Hero } from '@/components/Hero'
import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'
import { Template } from '@/components/Template'

export const Terms = () => {
  return (
    <Template pageTitle="Termos e Condições de Uso">
      <Hero pageTitle='Termos e condições de Uso' />
      <ScreenWidthLimiter>
        <div className="max-w-4xl mx-auto p-8">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            Termos e Condições de Uso
          </h2>
          <p className="mb-6 text-gray-700">Última atualização: 4 de setembro de 2024</p>

          <p className="mb-6 text-gray-700">
            Bem-vindo ao site <strong>Carneiro e Carballido</strong>. Ao acessar e usar este site, você concorda com os seguintes
            Termos e Condições de Uso. Se não concordar com qualquer parte destes termos, por favor, não utilize o nosso site.
          </p>

          <h3 className="text-2xl font-semibold mb-4">1. Uso do Site</h3>
          <p className="mb-6 text-gray-700">
            Este site é destinado ao uso pessoal e informativo. Você concorda em utilizá-lo de maneira responsável, sem realizar qualquer
            ação que possa comprometer sua segurança, integridade ou funcionamento. É proibido o uso deste site para fins ilícitos ou
            prejudiciais.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. Propriedade Intelectual</h3>
          <p className="mb-6 text-gray-700">
            Todo o conteúdo disponibilizado no site, incluindo textos, imagens, gráficos e logotipos, é de propriedade exclusiva de
            <strong> Carneiro e Carballido</strong> ou de terceiros, protegidos por leis de direitos autorais. A reprodução, distribuição
            ou qualquer outro uso do conteúdo sem autorização prévia é estritamente proibido.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Limitação de Responsabilidade</h3>
          <p className="mb-6 text-gray-700">
            A <strong>Carneiro e Carballido</strong> se esforça para manter as informações em seu site atualizadas e corretas, mas não
            garante a precisão ou completude das informações. Não nos responsabilizamos por quaisquer danos diretos, indiretos ou
            consequenciais decorrentes do uso deste site.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Links para Sites de Terceiros</h3>
          <p className="mb-6 text-gray-700">
            Nosso site pode conter links para sites de terceiros que não são controlados pela <strong>Carneiro e Carballido</strong>.
            Não somos responsáveis pelo conteúdo ou políticas de privacidade de sites de terceiros. O uso de tais sites é de sua
            responsabilidade.
          </p>

          <h3 className="text-2xl font-semibold mb-4">5. Alterações nos Termos</h3>
          <p className="mb-6 text-gray-700">
            A <strong>Carneiro e Carballido</strong> reserva-se o direito de alterar estes Termos e Condições de Uso a qualquer momento,
            sem aviso prévio. As mudanças entrarão em vigor imediatamente após sua publicação neste site. Recomendamos revisar esta página
            regularmente para se manter informado.
          </p>

          <h3 className="text-2xl font-semibold mb-4">6. Lei Aplicável</h3>
          <p className="mb-6 text-gray-700">
            Estes Termos e Condições de Uso são regidos pelas leis brasileiras. Quaisquer disputas ou controvérsias decorrentes do uso deste
            site serão resolvidas nos tribunais competentes do Rio de Janeiro, Brasil.
          </p>

          <h3 className="text-2xl font-semibold mb-4">7. Contato</h3>
          <p className="mb-6 text-gray-700">
            Se você tiver qualquer dúvida ou preocupação sobre estes Termos e Condições de Uso, entre em contato conosco através do e-mail{' '}
            <a href="mailto:contato@cecconsultores.com.br" className="text-blue-600 underline">contato@cecconsultores.com.br</a>.
          </p>
        </div>
      </ScreenWidthLimiter>
    </Template>
  )
}
