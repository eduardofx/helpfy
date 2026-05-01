import React from "react";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <LegalHeader />

      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-10 border-b border-navy/10 pb-6">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-3">
            Documentos Legais
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            Termos de Uso
          </h1>
          <p className="text-navy/60 text-sm">
            Última atualização: Abril de 2026
          </p>
        </div>

        <article className="prose prose-lg max-w-none text-navy/80 leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-coral [&_a:hover]:underline">
          <p>
            Bem-vindo ao Helpfy. Ao acessar ou utilizar nossa plataforma, você
            concorda com os termos e condições descritos abaixo. Leia
            atentamente antes de utilizar nossos serviços.
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao criar uma conta ou utilizar o Helpfy, você declara ter lido,
            compreendido e aceito integralmente estes Termos de Uso. Caso não
            concorde, por favor, não utilize a plataforma.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            O Helpfy é uma plataforma digital que conecta clientes a
            profissionais autônomos de diversas áreas, oferecendo busca,
            contratação e avaliação de serviços de forma segura e prática.
          </p>

          <h2>3. Cadastro e Conta de Usuário</h2>
          <ul>
            <li>
              Você deve fornecer informações verdadeiras, completas e
              atualizadas no momento do cadastro.
            </li>
            <li>
              É responsável por manter a confidencialidade de seu login e senha.
            </li>
            <li>
              Notifique-nos imediatamente caso identifique qualquer uso não
              autorizado da sua conta.
            </li>
          </ul>

          <h2>4. Direitos e Responsabilidades</h2>
          <h3>Dos Clientes</h3>
          <ul>
            <li>Tratar profissionais com respeito e cordialidade.</li>
            <li>Cumprir os pagamentos acordados nos prazos definidos.</li>
            <li>Avaliar os serviços de forma justa e honesta.</li>
          </ul>
          <h3>Dos Profissionais</h3>
          <ul>
            <li>
              Prestar serviços com qualidade, ética e dentro do prazo combinado.
            </li>
            <li>Manter perfil e portfólio atualizados e verídicos.</li>
            <li>Cumprir a legislação aplicável à sua atividade.</li>
          </ul>

          <h2>5. Pagamentos</h2>
          <p>
            Os pagamentos pelos serviços são negociados entre cliente e
            profissional. Em breve o Helpfy disponibilizará pagamentos
            integrados na plataforma para maior segurança.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            O Helpfy atua como intermediador tecnológico e não se responsabiliza
            pela execução direta dos serviços contratados, embora ofereça
            mecanismos de mediação e suporte em caso de divergências.
          </p>

          <h2>7. Modificações nos Termos</h2>
          <p>
            Estes termos podem ser atualizados periodicamente. Notificaremos os
            usuários sobre alterações relevantes por meio do aplicativo ou
            e-mail cadastrado.
          </p>

          <h2>8. Contato</h2>
          <p>
            Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail{" "}
            <a href="mailto:contato@helpfy.app">contato@helpfy.app</a>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermosDeUso;
