import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(13,27,42,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(13,27,42,0.4) 0%, transparent 50%)"
      }} aria-hidden />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6 text-balance">
            Pronto pra resolver a documentação do seu veículo hoje?
          </h2>
          <p className="text-primary/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Fale agora com um especialista. Orçamento gratuito e sem compromisso.
          </p>
          <a
            href="https://wa.me/5531999999999?text=Olá!%20Quero%20resolver%20a%20documentação%20do%20meu%20veículo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
