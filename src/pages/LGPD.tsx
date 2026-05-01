import React from "react";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

const LGPD = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <LegalHeader />

      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-10 border-b border-navy/10 pb-6">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-3">
            Documentos Legais
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            Conformidade com a LGPD
          </h1>
          <p className="text-navy/60 text-sm">
            Última atualização: Abril de 2026
          </p>
        </div>

        <article className="prose prose-lg max-w-none text-navy/80 leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-coral [&_a:hover]:underline">
          <p>
            O Helpfy está comprometido com a Lei Geral de Proteção de Dados (Lei
            nº 13.709/2018) e adota práticas rigorosas para garantir o
            tratamento ético e seguro dos dados pessoais de seus usuários.
          </p>

          <h2>1. Princípios Adotados</h2>
          <ul>
            <li>
              <strong>Finalidade:</strong> coletamos dados apenas para
              propósitos legítimos e informados.
            </li>
            <li>
              <strong>Adequação:</strong> os dados tratados são compatíveis com
              as finalidades comunicadas.
            </li>
            <li>
              <strong>Necessidade:</strong> limitamos a coleta ao mínimo
              necessário.
            </li>
            <li>
              <strong>Transparência:</strong> oferecemos informações claras
              sobre o tratamento dos dados.
            </li>
            <li>
              <strong>Segurança:</strong> aplicamos medidas técnicas e
              administrativas de proteção.
            </li>
          </ul>

          <h2>2. Bases Legais para o Tratamento</h2>
          <p>O Helpfy trata dados pessoais com base em:</p>
          <ul>
            <li>Consentimento do titular.</li>
            <li>Execução de contrato ou procedimentos preliminares.</li>
            <li>Cumprimento de obrigação legal ou regulatória.</li>
            <li>
              Legítimo interesse, sempre respeitando os direitos do titular.
            </li>
          </ul>

          <h2>3. Direitos do Titular</h2>
          <p>Conforme a LGPD, você pode:</p>
          <ul>
            <li>Confirmar a existência de tratamento de dados.</li>
            <li>Solicitar acesso, correção ou anonimização dos dados.</li>
            <li>Pedir a portabilidade ou eliminação dos dados.</li>
            <li>
              Revogar o consentimento e obter informações sobre
              compartilhamento.
            </li>
          </ul>

          <h2>4. Encarregado de Dados (DPO)</h2>
          <p>
            Nosso encarregado de proteção de dados está disponível para
            esclarecer dúvidas e atender às solicitações relacionadas à LGPD.
            Contato: <a href="mailto:dpo@helpfy.app">dpo@helpfy.app</a>.
          </p>

          <h2>5. Incidentes de Segurança</h2>
          <p>
            Em caso de incidente que possa acarretar risco aos titulares,
            comunicaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os
            usuários afetados em prazo razoável.
          </p>

          <h2>6. Atualizações</h2>
          <p>
            Esta página pode ser revisada para refletir mudanças regulatórias ou
            em nossas práticas internas. Recomendamos consultas periódicas.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default LGPD;
