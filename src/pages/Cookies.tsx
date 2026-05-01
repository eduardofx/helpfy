import React from "react";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <LegalHeader />

      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-10 border-b border-navy/10 pb-6">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-3">
            Documentos Legais
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            Política de Cookies
          </h1>
          <p className="text-navy/60 text-sm">
            Última atualização: Abril de 2026
          </p>
        </div>

        <article className="prose prose-lg max-w-none text-navy/80 leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-coral [&_a:hover]:underline">
          <p>
            Esta Política explica como o Helpfy utiliza cookies e tecnologias
            semelhantes para melhorar sua experiência ao navegar em nosso site e
            aplicativo.
          </p>

          <h2>1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu
            dispositivo quando você acessa um site. Eles permitem que o site
            reconheça suas preferências e melhore a navegação.
          </p>

          <h2>2. Tipos de Cookies que Utilizamos</h2>
          <ul>
            <li>
              <strong>Essenciais:</strong> necessários para o funcionamento
              básico da plataforma (login, segurança).
            </li>
            <li>
              <strong>De desempenho:</strong> coletam informações anônimas sobre
              como o site é utilizado.
            </li>
            <li>
              <strong>De funcionalidade:</strong> lembram suas preferências
              (idioma, região, etc.).
            </li>
            <li>
              <strong>De marketing:</strong> ajudam a exibir anúncios relevantes
              em outros sites.
            </li>
          </ul>

          <h2>3. Cookies de Terceiros</h2>
          <p>
            Podemos permitir que parceiros (como Google Analytics e plataformas
            de mídia social) utilizem cookies para nos auxiliar na análise de
            uso e na entrega de conteúdo personalizado.
          </p>

          <h2>4. Gerenciamento de Cookies</h2>
          <p>
            Você pode configurar seu navegador para recusar ou apagar cookies.
            No entanto, isso pode afetar a funcionalidade de algumas áreas do
            site. Consulte as instruções do seu navegador para mais detalhes.
          </p>

          <h2>5. Atualizações desta Política</h2>
          <p>
            Podemos atualizar esta Política de Cookies periodicamente.
            Recomendamos visitá-la regularmente para se manter informado sobre
            as práticas adotadas.
          </p>

          <h2>6. Contato</h2>
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail{" "}
            <a href="mailto:contato@helpfy.app">contato@helpfy.app</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
