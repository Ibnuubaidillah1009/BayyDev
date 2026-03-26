"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  { name: "HTML", icon: <img src="/images/html5.webp" alt="HTML5" className="w-9 h-9 object-contain" /> },
  { name: "CSS", icon: <img src="/images/CSS.png" alt="CSS3" className="w-9 h-9 object-contain" /> },
  { name: "JavaScript", icon: <img src="/images/javascript.webp" alt="JavaScript" className="w-9 h-9 object-contain" /> },
  { name: "PHP", icon: <img src="/images/PHP.png" alt="PHP" className="w-9 h-9 object-contain" /> },
  { name: "MySQL", icon: <img src="/images/mysql.png" alt="MySQL" className="w-9 h-9 object-contain" /> },
  { name: "React", icon: <img src="/images/React.png" alt="React" className="w-9 h-9 object-contain" /> },
  { name: "Next.js", icon: <img src="/images/nextjs.png" alt="Next.js" className="w-9 h-9 object-contain" /> },
  { name: "Supabase", icon: <img src="/images/supabase.png" alt="Supabase" className="w-9 h-9 object-contain" /> },
  { name: "Git", icon: <img src="/images/Git.png" alt="Git" className="w-9 h-9 object-contain" /> },
  { name: "GitHub", icon: <img src="/images/Github.png" alt="GitHub" className="w-9 h-9 object-contain" /> },
  { name: "VS Code", icon: <img src="/images/vscode.png" alt="VS Code" className="w-9 h-9 object-contain" /> },
  { name: "Laravel", icon: <img src="/images/Laravel.png" alt="Laravel" className="w-9 h-9 object-contain" /> },
  { name: "Figma", icon: <img src="/images/Figma.png" alt="Figma" className="w-9 h-9 object-contain" /> },
  { name: "Python", icon: <img src="/images/Python.png" alt="Python" className="w-9 h-9 object-contain" /> },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Skills & Tools
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-4" />
          <p className="text-neutral-400 max-w-xl">
            A diverse set of technologies and tools I use to craft exceptional digital experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.04 }}
              className="group flex flex-col items-center justify-center gap-3 p-5 md:p-6 rounded-2xl glass glass-hover transition-all duration-300 cursor-default"
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                {skill.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-neutral-300 group-hover:text-white text-center transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
