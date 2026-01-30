import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Download, ExternalLink } from "lucide-react";
import { personalInfo, siteConfig } from "@/data/portfolio";

export function Contact() {
  const whatsappLink = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "hover:bg-red-500/10 hover:text-red-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SabrynaS",
      href: personalInfo.github,
      color: "hover:bg-gray-500/10 hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sabryna-rodrigues",
      href: personalInfo.linkedin,
      color: "hover:bg-blue-500/10 hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(98) 99621-9610",
      href: whatsappLink,
      color: "hover:bg-green-500/10 hover:text-green-500",
    },
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos <span className="text-gradient">Conversar</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estou sempre aberta a novas oportunidades e parcerias. 
              Entre em contato para conversarmos!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mb-8">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card rounded-xl p-5 flex items-center gap-4 shadow-card hover:shadow-hover transition-all group ${link.color}`}
                whileHover={{ y: -4 }}
              >
                <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <link.icon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground">{link.value}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Lattes Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-8"
          >
            <a
              href={personalInfo.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Ver Currículo Lattes
            </a>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <motion.a
              href={siteConfig.cvDownloadUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-hover transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5" />
              Baixar Currículo Digital
            </motion.a>
            <p className="text-xs text-muted-foreground mt-2">
              (Atualizado em Janeiro 2026)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
