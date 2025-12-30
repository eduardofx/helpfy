
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const FAQSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [40, -60]);

  const faqs = [
    {
      question: "O que é o Helpfy?",
      answer: "O Helpfy é uma plataforma que conecta você aos melhores profissionais de serviços de forma segura e inteligente. Utilizamos IA para fazer o matching ideal entre suas necessidades e profissionais verificados em diversas áreas como reformas, tecnologia, beleza, aulas particulares e muito mais."
    },
    {
      question: "Como funciona a verificação dos profissionais?",
      answer: "Todos os profissionais passam por um rigoroso processo de verificação que inclui análise de documentos, verificação de antecedentes e validação de qualificações. Além disso, nosso sistema de avaliações garante que apenas profissionais de qualidade permaneçam na plataforma."
    },
    {
      question: "O Helpfy é gratuito para usuários?",
      answer: "Sim! Para quem busca serviços, o Helpfy é totalmente gratuito. Você pode buscar profissionais, solicitar orçamentos e contratar serviços sem nenhum custo. Os profissionais possuem planos que variam de gratuito a empresarial, dependendo das funcionalidades desejadas."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é realizado conforme a negociação entre cliente e profissional. Você só paga após confirmar que o serviço foi realizado conforme acordado. O profissional recebe o valor diretamente sem terceiros."
    },
    {
      question: "E se eu não ficar satisfeito com o serviço?",
      answer: "Sua satisfação é nossa prioridade. Se houver algum problema, você pode abrir uma reclamação diretamente na plataforma. Nossa equipe de suporte analisará o caso e, se necessário, acionará o profissional ou seguro de serviço se adquirido na contração do serviço para garantir que você seja ressarcido."
    },
    {
      question: "Como me cadastro como profissional?",
      answer: "É simples! Baixe o app, acesse o banner principal (rotativo na aplicação) ou selecione a opção \"Perfil -> Quero Oferecer Serviços\", preencha seu perfil com suas habilidades e documentos, e aguarde a verificação. Após aprovado, você já começa a receber oportunidades de clientes na sua região."
    },
    {
      question: "Quais tipos de serviços posso encontrar no Helpfy?",
      answer: "O Helpfy abrange uma ampla variedade de serviços: reformas e construção, serviços domésticos, tecnologia e TI, aulas particulares, beleza e estética, cuidados com pets, consultoria, eventos, jardinagem, e muito mais. Estamos sempre expandindo nossas categorias."
    },
    {
      question: "O Helpfy está disponível em quais cidades?",
      answer: "Atualmente estamos presentes nas principais capitais e regiões metropolitanas do Brasil. Estamos em constante expansão para levar nossos serviços a mais cidades. Baixe o app e verifique a disponibilidade na sua região."
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden" id="faq">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: backgroundY2 }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Dúvidas
          </span>
          <h2 className="section-heading text-navy">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Helpfy e como podemos ajudar você.
          </p>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background border border-navy/10 rounded-2xl px-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow data-[state=open]:shadow-lg data-[state=open]:border-coral/20"
                >
                  <AccordionTrigger className="text-left text-navy font-semibold py-5 hover:text-coral hover:no-underline transition-colors [&[data-state=open]]:text-coral">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy/70 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <ScrollAnimation delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-navy/60 mb-4">Ainda tem dúvidas?</p>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-coral font-semibold hover:underline"
            >
              Entre em contato com nosso suporte
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </motion.a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection;
