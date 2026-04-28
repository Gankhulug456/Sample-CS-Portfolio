import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-vibrant/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-vibrant/10 text-brand-vibrant text-xs font-bold uppercase tracking-wider mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-vibrant opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-vibrant"></span>
          </span>
          Currently building at NYU
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]"
        >
          Building the future <br /> 
          through <span className="text-brand-primary italic font-serif">clean code</span>.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          CS Student at NYU. Focused on distributed systems, <br className="hidden md:block"/>
          high-performance backend engineering, and AI architecture.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-brand-primary transition-all shadow-xl shadow-slate-200"
          >
            Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-2">
            {[
              { icon: Github, link: "#" },
              { icon: Linkedin, link: "#" },
              { icon: Mail, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 hover:scale-110 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
