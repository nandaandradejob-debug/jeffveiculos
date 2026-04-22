import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    initial: "M",
    name: "Marcos T.",
    city: "Belo Horizonte",
    color: "bg-accent text-primary",
    text: "Fiz a transferência do meu carro em 2 dias. Sem fila, sem estresse. Super recomendo!",
  },
  {
    initial: "F",
    name: "Fernanda L.",
    city: "Contagem",
    color: "bg-cta text-white",
    text: "Atendimento incrível, me explicaram tudo com clareza. CRLV chegou rapidinho.",
  },
  {
    initial: "R",
    name: "Rafael M.",
    city: "Nova Lima",
    color: "bg-whatsapp text-white",
    text: "Gestão da frota da empresa ficou muito mais organizada com a Jeff Veicular.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary leading-tight">
            O que nossos <span className="text-accent">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/15" strokeWidth={2} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-base leading-relaxed mb-7">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-2xl ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
