import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, projects, type ProjectTag } from "@/data/portfolio";

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [highlightedProjects, setHighlightedProjects] = useState<string[]>([]);

  const handleSkillClick = (skillName: string, relatedTags?: ProjectTag[]) => {
    if (activeSkill === skillName) {
      setActiveSkill(null);
      setHighlightedProjects([]);
    } else {
      setActiveSkill(skillName);
      if (relatedTags) {
        const related = projects
          .filter((p) => p.tags.some((t) => relatedTags.includes(t)))
          .map((p) => p.title);
        setHighlightedProjects(related);
      } else {
        setHighlightedProjects([]);
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
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
              <span className="text-gradient">Skills</span> & Competências
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-sm">
              Clique em uma skill para ver projetos relacionados
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-xl p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name, skill.relatedTags)}
                      className={`skill-chip ${activeSkill === skill.name ? "active" : ""}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlighted Projects */}
          {highlightedProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-4xl mx-auto mt-8 p-6 glass-card rounded-xl"
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Projetos relacionados a "{activeSkill}":
              </h4>
              <div className="flex flex-wrap gap-2">
                {highlightedProjects.map((title) => (
                  <span
                    key={title}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
