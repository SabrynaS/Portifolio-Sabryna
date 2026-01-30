import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Briefcase, FolderOpen, MessageCircle } from "lucide-react";
import { personalInfo, stats, siteConfig } from "@/data/portfolio";
import { ProfileImage } from "../ProfileImage";

const iconMap = {
  briefcase: Briefcase,
  folder: FolderOpen,
  "file-text": FileText,
  award: FileText,
};

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ProfileImage size="lg" className="mx-auto animate-float" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <SocialButton
              href={personalInfo.github}
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
            />
            <SocialButton
              href={personalInfo.linkedin}
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialButton
              href={`mailto:${personalInfo.email}`}
              icon={<Mail className="h-5 w-5" />}
              label="Email"
            />
            <SocialButton
              href={whatsappLink}
              icon={<MessageCircle className="h-5 w-5" />}
              label="WhatsApp"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => scrollToSection("#projetos")}
              className="px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-hover transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Projetos
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#contato")}
              className="px-6 py-3 bg-card border border-border font-medium rounded-lg hover:bg-muted transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Falar Comigo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 shadow-card hover-tilt"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
