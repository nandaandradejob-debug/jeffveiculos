import { MessageSquare, FileUp, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Fale com a gente",
    desc: "Manda mensagem no WhatsApp com sua dúvida ou serviço desejado.",
  },
  {
    icon: FileUp,
    num: "02",
    title: "Envie os documentos",
    desc: "Te orientamos sobre o que precisar. Tudo pode ser enviado digitalmente.",
  },
  {
    icon: CheckCircle2,
    num: "03",
    title: "Receba o resultado",
    desc: "Acompanhe o processo e receba a documentação regularizada.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Processo
          </span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary leading-tight mb-5">
            Como funciona?
          </h2>
          <p className="text-lg text-muted-foreground">
            Simples, rápido e sem complicação.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="relative bg-secondary rounded-2xl p-8 h-full border border-border hover:border-accent transition-colors">
                  <div className="absolute -top-5 -left-2 font-display text-7xl text-accent/20 leading-none select-none">
                    {s.num}
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow mb-6">
                      <s.icon className="w-8 h-8 text-primary" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-accent items-center justify-center shadow-lg">
                    <ArrowRight className="w-4 h-4 text-primary" strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
