import { motion } from "motion/react";
import { User, Code, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#hero", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-4xl px-4"
    >
      <div className="flex items-center justify-between p-2 rounded-full glass-card pointer-events-auto">
        <div className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">A</div>
          <span className="text-sm font-bold tracking-tighter hidden md:block">Alex Chen</span>
        </div>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:bg-slate-50 text-slate-500 hover:text-slate-900 group"
            >
              <item.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="hidden md:block pr-1">
          <button className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-brand-primary transition-colors">
            Let's Talk
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
