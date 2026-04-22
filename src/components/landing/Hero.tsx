import { ArrowRight, ShieldCheck, Zap, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: ShieldCheck, text: "Credenciado Detran-MG" },
  { icon: Zap, text: "Resposta em minutos" },
  { icon: CheckCircle2, text: "+500 clientes atendidos" },
  { icon: MapPin, text: "BH e região" },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-hero road-pattern overflow-hidden pt-24"
    >
      {/* Decorative blurs */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-cta/15 rounded-full blur-3xl" aria-hidden />

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Despachante credenciado em Belo Horizonte
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] text-balance mb-6"
          >
            Regularize seu veículo
            <span className="block text-accent">sem sair de casa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg lg:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed"
          >
            Despachante veicular credenciado no <span className="text-white font-semibold">Detran-MG</span>. Atendemos BH e região com agilidade, segurança e total transparência — sem burocracia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="https://wa.me/5531999999999?text=Olá!%20Quero%20um%20orçamento%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-4 rounded-xl shadow-glow hover:shadow-2xl hover:scale-105 transition-all"
            >
              Solicitar orçamento grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-accent hover:text-accent text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Ver nossos serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:border-accent/40 hover:bg-white/10 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <span className="text-white/90 text-sm font-medium leading-tight">{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
