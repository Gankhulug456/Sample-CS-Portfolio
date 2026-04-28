import { motion } from "motion/react";
import { Send, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white rounded-t-[3rem] md:rounded-t-[6rem]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-7xl font-black mb-8 tracking-tighter">
              Let's <span className="text-brand-primary italic font-serif">talk.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
              Open for collaboration on distributed systems, AI infrastructure, or any complex engineering challenge.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Direct", text: "alex.codes@nyu.edu" },
                { icon: MapPin, label: "Current Base", text: "New York, NY" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-primary transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{item.label}</div>
                    <div className="font-bold text-lg">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-slate-200 text-slate-900 space-y-6 shadow-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">What's on your mind?</label>
                <textarea 
                  rows={3}
                  placeholder="Tell me about your project..." 
                  className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all text-sm resize-none"
                />
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-3 w-full py-4 bg-brand-primary text-white rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-indigo-200 hover:bg-slate-900 transition-all">
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
