import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animation";

const PlansSection = () => {
  const freePlan = {
    name: "Free",
    price: "R$0",
    period: "/60 dias",
    description: null,
    icon: null,
    features: [
      { text: "Perfil básico com até 3 fotos e 1 vídeo curto", included: true },
      {
        text: "Até 3 leads por mês no Instagram da página Helpfy",
        included: true,
      },
      { text: "Chat com clientes", included: true },
      { text: "Avaliações públicas", included: true },
      { text: "Posição básica a avançada nas buscas", included: true },
      { text: "Com selo de verificação", included: true },
    ],
    limitations: [],
    cta: "Começar Grátis",
  };

  /* PLANOS FUTUROS - DESCOMENTAR QUANDO NECESSÁRIO
  const plans = [
    {
      name: "Starter",
      price: "R$49,90",
      period: "/mês",
      description: "Para profissionais em crescimento",
      icon: Star,
      features: [
        { text: "Tudo do Free +", included: true },
        { text: "Selo \"Profissional Verificado\"", included: true },
        { text: "Até 10 fotos + 2 vídeos", included: true },
        { text: "Até 15 leads por mês", included: true },
        { text: "Agenda integrada", included: true },
        { text: "Estatísticas de desempenho", included: true },
        { text: "Comissão reduzida: 12%", included: true },
      ],
      limitations: [],
      cta: "Assinar Starter",
      popular: false,
      highlight: false
    },
    {
      name: "Professional",
      price: "R$99,90",
      period: "/mês",
      description: "Para alto volume de serviços",
      icon: Rocket,
      features: [
        { text: "Tudo do Starter +", included: true },
        { text: "Portfólio ilimitado", included: true },
        { text: "Leads ilimitados", included: true },
        { text: "Destaque nas buscas (Top 5)", included: true },
        { text: "Selo \"Top Rated\"", included: true },
        { text: "Dashboard completo de gestão", included: true },
        { text: "Cupons e promoções", included: true },
        { text: "Suporte prioritário (2h)", included: true },
        { text: "Comissão reduzida: 8%", included: true },
      ],
      limitations: [],
      cta: "Assinar Professional",
      popular: true,
      highlight: true
    },
    {
      name: "Premium",
      price: "R$199,90",
      period: "/mês",
      description: "Para profissionais premium",
      icon: Diamond,
      features: [
        { text: "Tudo do Professional +", included: true },
        { text: "Posição #1 nas buscas", included: true },
        { text: "Badge \"Premium Partner\"", included: true },
        { text: "Leads exclusivos", included: true },
        { text: "Gerente de conta dedicado", included: true },
        { text: "Suporte VIP 24/7", included: true },
        { text: "Seguro até R$ 10.000", included: true },
        { text: "Marketing personalizado", included: true },
        { text: "Até 3 perfis de funcionários", included: true },
        { text: "Comissão mínima: 5%", included: true },
      ],
      limitations: [],
      cta: "Assinar Premium",
      popular: false,
      highlight: false
    },
    {
      name: "Enterprise",
      price: "R$399,90",
      period: "/mês",
      description: "Para empresas e franquias",
      icon: Building2,
      features: [
        { text: "Tudo do Premium +", included: true },
        { text: "Até 10 perfis de profissionais", included: true },
        { text: "Dashboard empresarial", included: true },
        { text: "Gestão de equipes", included: true },
        { text: "Múltiplas categorias", included: true },
        { text: "CSM dedicado", included: true },
        { text: "Integrações customizadas", included: true },
        { text: "White label parcial", included: true },
        { text: "Comissão negociável (a partir de 3%)", included: true },
      ],
      limitations: [],
      cta: "Falar com Vendas",
      popular: false,
      highlight: false
    }
  ];
  */

  /* RECURSOS ADICIONAIS - DESCOMENTAR QUANDO NECESSÁRIO
  const addons = [
    { name: "Boost de Visibilidade", price: "R$29,90/semana", description: "Destaque premium por 7 dias" },
    { name: "Leads Extras", price: "A partir de R$9,90", description: "Pacotes de 5 a 30 leads adicionais" },
    { name: "Seguro Ampliado", price: "A partir de R$19,90/mês", description: "Cobertura até R$ 15.000" },
    { name: "Verificação Express", price: "R$49,90 (única)", description: "Verificação em 24h" },
  ];
  */

  return (
    <section
      className="section-padding bg-gradient-to-b from-white to-cream/30"
      id="plans"
    >
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Plano para Prestadores
          </span>
          <h2 className="section-heading text-navy">Comece Gratuitamente</h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            60 dias gratuitos para experimentar. Crie seu perfil e comece a
            receber clientes hoje mesmo.
          </p>
        </ScrollAnimation>

        {/* Plano Free Destacado */}
        <StaggerContainer className="flex justify-center" staggerDelay={0.1}>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 md:p-10 rounded-3xl border-2 border-coral bg-gradient-to-br from-coral/5 to-coral/10 shadow-2xl max-w-md w-full"
            >
              {/* Badge Destacado */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral text-white text-sm font-bold px-5 py-1.5 rounded-full flex items-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" /> Período Gratuito
              </motion.div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {freePlan.name}
                </h3>
                <div className="mb-3">
                  <span className="text-5xl font-bold text-coral">
                    {freePlan.price}
                  </span>
                  <span className="text-navy/60 text-lg">
                    {freePlan.period}
                  </span>
                </div>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Aproveite 60 dias gratuitos para começar a oferecer seus
                  serviços. Após esse período, sua conta entra em modo stand-by
                  até a conclusão do cadastro de forma de pagamento (Cartão de
                  Crédito). Após isso,{" "}
                  <span className="font-semibold text-base text-navy/75">
                    R$ 9,90
                  </span>{" "}
                  por mês.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {freePlan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-coral" />
                    </div>
                    <span className="text-navy/80">{feature.text}</span>
                  </motion.li>
                ))}
                {freePlan.limitations.map((limitation, idx) => (
                  <motion.li
                    key={`lim-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + (freePlan.features.length + idx) * 0.05,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-navy/40" />
                    </div>
                    <span className="text-navy/50">{limitation}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="w-full bg-coral hover:bg-coral-dark text-white text-lg py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                {freePlan.cta}
              </Button>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Add-ons Section - DESCOMENTAR QUANDO NECESSÁRIO
        <ScrollAnimation className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-navy mb-2">Recursos Adicionais</h3>
            <p className="text-navy/60">Potencialize seus resultados com add-ons avulsos</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-2xl border border-navy/10 shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="font-semibold text-navy mb-1">{addon.name}</h4>
                <p className="text-coral font-bold text-sm mb-2">{addon.price}</p>
                <p className="text-navy/60 text-xs">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
        */}
      </div>
    </section>
  );
};

export default PlansSection;
