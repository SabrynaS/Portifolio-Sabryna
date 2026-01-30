import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileText, X, Search } from "lucide-react";
import { projects, type ProjectTag } from "@/data/portfolio";

const allTags: ProjectTag[] = ["Front-end", "Back-end", "QA", "Figma", "UML", "Requisitos", "Deploy", "Testes"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectTag | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.tags.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projetos" className="py-20 bg-muted/30">
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
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              <FilterButton
                active={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
              >
                Todos
              </FilterButton>
              {allTags.map((tag) => (
                <FilterButton
                  key={tag}
                  active={activeFilter === tag}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </FilterButton>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground mt-8"
            >
              Nenhum projeto encontrado.
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-primary text-primary-foreground shadow-soft"
          : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: typeof projects[0];
  onClick: () => void;
}) {
  return (
    <motion.div
      className="glass-card rounded-xl p-6 h-full flex flex-col shadow-card hover:shadow-hover transition-all cursor-pointer group"
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      {/* Featured Badge */}
      {project.featured && (
        <span className="self-start px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
          Destaque
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {project.shortDescription}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs text-primary font-medium">
            {tech}
            {project.technologies.indexOf(tech) < Math.min(project.technologies.length, 4) - 1 && " •"}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 pt-2 border-t border-border">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Ver no GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Ver demo"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {project.links.article && (
          <a
            href={project.links.article}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Ver artigo"
          >
            <FileText className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: typeof projects[0] | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card border border-border rounded-2xl shadow-hover max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium">{project.role}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Sobre o Projeto</h4>
                <p className="text-muted-foreground">{project.fullDescription}</p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Principais Entregas</h4>
                <ul className="space-y-2">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary/10 text-foreground hover:text-primary rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver Demo
                  </a>
                )}
                {project.links.article && (
                  <a
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary/10 text-foreground hover:text-primary rounded-lg transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    Artigo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
