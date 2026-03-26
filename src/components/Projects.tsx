"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    title: "Manage Mosque Finances",
    description: "This website was created to manage mosque finances such as donations, zakat, etc, and this website was created by Ibnu Ubaidillah and Sahrul Ramadhan Hardiansyah.",
    image: "/images/Project-1.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "https://github.com/SahrulRamadhanHardiansyah/masjid-app",
  },
  {
    title: "Library system of SMKN 1 Bangil School",
    description: "This library website is a school assignment, and may only use the Laravel framework.",
    image: "/images/project-2.png",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    link: "https://github.com/Ibnuubaidillah1009/Tugas-Sistem-Perpustakaan2",
  },
  {
    title: "Plant VS Zombie LKS",
    description: "This Plant VS Zombie game is a LKS question, which uses html, css, and javascript Vanilla.",
    image: "/images/project-3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Ibnuubaidillah1009/Plant-VS-Zombie-LKS",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
    <>
      <section id="projects" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Featured Projects
            </h2>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-4" />
            <p className="text-neutral-400 max-w-xl">
              A selection of my recent work, showcasing my problem-solving skills and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col rounded-2xl glass glass-hover overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View Repository <ArrowRight className="ml-1.5 w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-violet-500/5 relative border border-white/10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-full flex items-center justify-center overflow-hidden bg-black/30">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                >
                  View Repository <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
