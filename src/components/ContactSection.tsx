
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Send, MessageCircle, Mail, User, Phone } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome deve ter menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter menos de 255 caracteres"),
  phone: z.string().trim().min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone deve ter menos de 20 caracteres").regex(/^[\d\s\-\+\(\)]+$/, "Telefone inválido"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem deve ter menos de 1000 caracteres")
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [-50, 80]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [50, -60]);

  const WHATSAPP_NUMBER = "5544988161315";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Create WhatsApp message
      const message = `*Novo contato via Helpfy*

*Nome:* ${validatedData.name}
*Email:* ${validatedData.email}
*Telefone:* ${validatedData.phone}

*Mensagem:*
${validatedData.message}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Use location.href as fallback for blocked window.open
      // Create a temporary anchor element to bypass iframe restrictions
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Redirecionando para WhatsApp",
        description: "Complete o envio da mensagem no WhatsApp.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Erro de validação",
          description: "Por favor, corrija os campos destacados.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden" id="contact">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: backgroundY2 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Contato
          </span>
          <h2 className="section-heading text-navy">
            Fale Conosco
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Entre em contato e nossa equipe responderá o mais breve possível.
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <ScrollAnimation direction="left" className="lg:col-span-2">
              <div className="bg-navy rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-coral/20 rounded-xl">
                      <MessageCircle className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-coral transition-colors"
                      >
                        +55 44 98816-1315
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-coral/20 rounded-xl">
                      <Mail className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a 
                        href="mailto:contato@helpfy.com.br"
                        className="text-white/70 hover:text-coral transition-colors"
                      >
                        contato@helpfy.com.br
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-4">Horário de atendimento:</p>
                  <p className="text-white">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-white">Sábado: 9h às 13h</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation direction="right" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-navy/5">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Nome
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        className={`border-navy/20 focus:border-coral focus:ring-coral ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-navy font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`border-navy/20 focus:border-coral focus:ring-coral ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`border-navy/20 focus:border-coral focus:ring-coral ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy font-medium">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar você?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`border-navy/20 focus:border-coral focus:ring-coral resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-coral flex items-center justify-center gap-2 py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar via WhatsApp
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-navy/50 text-sm">
                    Ao enviar, você será redirecionado para o WhatsApp para completar o envio da mensagem.
                  </p>
                </div>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
