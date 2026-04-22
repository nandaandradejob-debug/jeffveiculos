import { Landmark, Zap, MessageCircleHeart, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Landmark,
    title: "Credenciada no Detran-MG",
    desc: "Trabalhamos com respaldo legal e total conformidade.",
  },
  {
    icon: Zap,
    title: "Agilidade real",
    desc: "Respondemos em minutos e resolvemos no menor prazo possível.",
  },
  {
    icon: MessageCircleHeart,
    title: "Atendimento humanizado",
    desc: "Sem robôs, sem enrolação. Você fala com quem resolve.",
  },
  {
    icon: MapPinned,
    title: "Especialistas em BH e região",
    desc: "Conhecemos cada detalhe dos processos do Detran-MG.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" aria-hidden />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Diferenciais
          </span>
          <h2 className="font-display text-5xl lg:text-6xl leading-tight text-balance">
            Por que escolher a <span className="text-accent">Jeff Veicular?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-accent/50 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                <p.icon className="w-7 h-7 text-primary" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-white/85 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
