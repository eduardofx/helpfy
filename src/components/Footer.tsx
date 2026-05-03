import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import helpfyLogo from "@/assets/helpfy-logo.png";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const socialLinks = [
    {
      name: "instagram",
      icon: Instagram,
      href: "https://www.instagram.com/helpfy.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    { name: "linkedin", icon: Linkedin, href: "#" },
  ];

  return (
    <footer
      ref={ref}
      className="bg-navy text-white pt-16 pb-8 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <img
                src={helpfyLogo}
                alt="Helpfy"
                className="h-[96px] md:h-[115px] lg:h-[134px] w-auto brightness-0 invert"
              />
            </motion.div>
            <p className="text-white/60 max-w-sm mb-6">
              Conectando você aos melhores profissionais com segurança,
              inteligência e conveniência.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={
                      social.href !== "#" ? "noopener noreferrer" : undefined
                    }
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4">Links</h5>
            <ul className="space-y-2 text-white/60">
              {[
                { label: "Sobre", href: "#how-it-works" },
                { label: "Planos", href: "#plans" },
                { label: "Contato", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-coral transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-white/60">
              {[
                { label: "Termos de Uso", to: "/termos-de-uso" },
                { label: "Privacidade", to: "/privacidade" },
                { label: "Cookies", to: "/cookies" },
                { label: "LGPD", to: "/lgpd" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.to.startsWith("/") ? (
                    <Link
                      to={item.to}
                      className="hover:text-coral transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.to}
                      className="hover:text-coral transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center text-white/40 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Helpfy. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvimento pela{" "}
            <a
              href="https://databind.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:text-coral-light transition-colors"
            >
              DataBind
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
