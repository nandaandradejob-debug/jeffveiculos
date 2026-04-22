import {
  Car,
  ClipboardList,
  RefreshCw,
  FileText,
  Ban,
  Search,
  Tag,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Car,
    title: "Transferência de Propriedade",
    desc: "Comprou ou vendeu um carro? A gente faz toda a transferência no Detran sem estresse.",
  },
  {
    icon: ClipboardList,
    title: "Primeiro Emplacamento",
    desc: "Veículo zero km? Emplacamos com rapidez e segurança.",
  },
  {
    icon: RefreshCw,
    title: "Licenciamento Anual (CRLV)",
    desc: "Seu CRLV em dia, sem filas e sem complicação.",
  },
  {
    icon: FileText,
    title: "2ª Via de Documentos",
    desc: "Perdeu o CRV ou CRLV? Resolvemos em tempo recorde.",
  },
  {
    icon: Ban,
    title: "Baixa de Restrições",
    desc: "Bloqueios, débitos e impedimentos? A gente limpa o histórico do seu veículo.",
  },
  {
    icon: Search,
    title: "Vistoria Cautelar",
    desc: "Antes de comprar um usado, faça a vistoria com a gente.",
  },
  {
    icon: Tag,
    title: "Placas Automotivas",
    desc: "Confecção de placas Mercosul e decorativas dentro das normas.",
  },
  {
    icon: Truck,
    title: "Gestão de Frota",
    desc: "Empresa com vários veículos? Cuidamos de toda a documentação da sua frota.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Nossos serviços
          </span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary leading-tight mb-5 text-balance">
            O que a Jeff Veicular <span className="text-accent">resolve pra você</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cuidamos de toda a papelada enquanto você aproveita seu tempo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-accent hover:shadow-card hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary group-hover:bg-accent transition-colors flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
