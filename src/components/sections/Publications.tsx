import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { publications } from "@/data/portfolio";

export function Publications() {
  return (
    <section id="publicacoes" className="py-20">
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
              <span className="text-gradient">Publicações</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Publications List */}
          <div className="max-w-3xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all group"
                  whileHover={{ y: -4 }}
                >
                  {/* Year Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{pub.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>

                  {/* Event */}
                  <p className="text-sm text-muted-foreground mb-4">{pub.event}</p>

                  {/* Abstract */}
                  {pub.abstract && (
                    <p className="text-sm text-muted-foreground/80 mb-4 italic">
                      "{pub.abstract}"
                    </p>
                  )}

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <ExternalLink className="h-4 w-4" />
                    Abrir publicação
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
