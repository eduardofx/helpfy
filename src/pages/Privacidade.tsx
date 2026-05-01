import React from "react";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <LegalHeader />

      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-10 border-b border-navy/10 pb-6">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-3">
            Documentos Legais
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            Política de Privacidade
          </h1>
          <p className="text-navy/60 text-sm">
            Última atualização: Abril de 2026
          </p>
        </div>

        <article className="prose prose-lg max-w-none text-navy/80 leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-coral [&_a:hover]:underline">
          <p>
            A sua privacidade é prioridade no Helpfy. Esta Política descreve
            como coletamos, utilizamos, armazenamos e protegemos suas
            informações pessoais.
          </p>

          <h2>1. Informações que Coletamos</h2>
          <ul>
            <li>
              <strong>Dados de cadastro:</strong> nome, e-mail, telefone, CPF,
              endereço e foto de perfil.
            </li>
            <li>
              <strong>Dados de uso:</strong> interações na plataforma, buscas,
              avaliações e mensagens.
            </li>
            <li>
              <strong>Dados técnicos:</strong> IP, modelo do dispositivo,
              sistema operacional e localização aproximada.
            </li>
          </ul>

          <h2>2. Como Utilizamos seus Dados</h2>
          <ul>
            <li>
              Para conectar clientes a profissionais por meio de algoritmos de
              recomendação.
            </li>
            <li>Para verificar identidade e prevenir fraudes.</li>
            <li>
              Para enviar comunicações sobre serviços, atualizações e promoções
              (com seu consentimento).
            </li>
            <li>Para cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos seus dados. Podemos compartilhá-los com prestadores de
            serviços terceirizados (como processadores de pagamento e provedores
            de infraestrutura) sempre sob contrato de confidencialidade e em
            conformidade com a LGPD.
          </p>

          <h2>4. Seus Direitos</h2>
          <p>De acordo com a LGPD, você tem direito a:</p>
          <ul>
            <li>Acessar seus dados pessoais.</li>
            <li>Solicitar correção de dados incompletos ou desatualizados.</li>
            <li>
              Solicitar exclusão dos seus dados, respeitando obrigações legais.
            </li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>

          <h2>5. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais (criptografia, controle
            de acesso e monitoramento) para proteger suas informações contra
            acessos não autorizados.
          </p>

          <h2>6. Retenção de Dados</h2>
          <p>
            Mantemos seus dados pelo tempo necessário para cumprir as
            finalidades descritas, ou conforme exigido por lei. Após esse
            período, os dados são excluídos ou anonimizados.
          </p>

          <h2>7. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas, escreva para{" "}
            <a href="mailto:privacidade@helpfy.app">privacidade@helpfy.app</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
