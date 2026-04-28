import { motion } from "motion/react";
import { EXPERIENCE } from "../constants";
import { Cloud, Layout, CreditCard } from "lucide-react";

const logoMap = {
  Cloud: Cloud,
  Layout: Layout,
  CreditCard: CreditCard,
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">
          Industry Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {EXPERIENCE.map((exp, i) => {
            const Logo = logoMap[exp.logo as keyof typeof logoMap];
            const bgClass = i % 3 === 0 ? "bg-indigo-50 border-indigo-100" : i % 3 === 1 ? "bg-emerald-50 border-emerald-100" : "bg-amber-50 border-amber-100";
            const textClass = i % 3 === 0 ? "text-indigo-900" : i % 3 === 1 ? "text-emerald-900" : "text-amber-900";
            const badgeClass = i % 3 === 0 ? "bg-indigo-100 text-indigo-700" : i % 3 === 1 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700";
            const accentTextClass = i % 3 === 0 ? "text-indigo-600" : i % 3 === 1 ? "text-emerald-600" : "text-amber-600";

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 rounded-2xl border ${bgClass} flex flex-col h-full`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-lg ${badgeClass} text-[10px] font-black uppercase tracking-wider`}>
                    {exp.role}
                  </div>
                  <span className={`text-[10px] ${accentTextClass} font-mono font-bold tracking-widest`}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                   <Logo className={`w-5 h-5 ${accentTextClass}`} />
                   <h3 className={`font-black tracking-tight ${textClass}`}>{exp.company}</h3>
                </div>
                
                <p className={`text-xs ${textClass} opacity-80 leading-relaxed flex-1`}>
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
