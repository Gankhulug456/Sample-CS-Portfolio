import { motion } from "motion/react";
import { SKILLS } from "../constants";

export default function Skills() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-16 tracking-tighter">
          Stack & Technologies
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILLS.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
                {category.name}
                <div className="h-px flex-1 bg-slate-100" />
              </h3>
              <ul className="space-y-4">
                {category.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group translate-x-0 hover:translate-x-2 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span className="text-sm font-bold text-slate-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
