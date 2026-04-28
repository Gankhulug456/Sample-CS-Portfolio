import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink, Leaf, Shield, Share2, Package } from "lucide-react";

const iconMap = {
  Leaf: Leaf,
  Shield: Shield,
  Share2: Share2,
  Package: Package,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              Selected Projects
            </h2>
            <p className="text-slate-500 text-lg">
              A collection of software experiments, tools, and platforms built during my academic journey.
            </p>
          </div>
          <a href="#" className="font-bold text-brand-primary underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
            View all on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            const accentColorClass = project.id % 2 === 0 ? "text-brand-primary" : "text-brand-secondary";
            const bgGradientClass = project.id % 2 === 0 ? "from-indigo-500 to-purple-600" : "from-emerald-400 to-teal-600";
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${bgGradientClass} flex items-center justify-center relative overflow-hidden`}>
                   <div className="text-white font-display text-4xl font-black opacity-10 tracking-widest">{project.title.split(' ')[0].toUpperCase()}</div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-sm">
                      <Icon className="w-12 h-12 text-white" />
                   </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className={`text-[10px] uppercase font-black tracking-widest ${accentColorClass}`}>
                        {tag}
                      </span>
                    ))}
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                      {project.tags[2]}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{project.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <a href={project.link} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-brand-primary transition-colors">
                      Demo <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="#" className="p-2 rounded-full hover:bg-slate-50 transition-colors">
                      <Github className="w-4 h-4 text-slate-400 hover:text-slate-900" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
