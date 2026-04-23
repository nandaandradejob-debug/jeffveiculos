import { Car, MapPin, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary text-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl tracking-wide">
                JEFF <span className="text-accent">VEICULAR</span>
              </span>
            </div>
            <p className="text-foreground/85 leading-relaxed text-sm">
              Despachante veicular especializado em soluções rápidas e eficientes. Atendemos BH e região com agilidade, segurança e total transparência, eliminando burocracias desnecessárias e focando em um método Estratégico, Consistente, Confiável e com Resultado Previsível.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-foreground/80">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                Belo Horizonte, MG
              </li>
              <li>
                <a
                  href="https://wa.me/5531982927747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  (31) 98292-7747
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@jeffveicular.com.br"
                  className="inline-flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  contato@jeffveicular.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Links + social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Navegação</h4>
            <ul className="space-y-2 text-sm mb-6">
              {["Início", "Serviços", "Como funciona", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/jeffveicularbh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Jeff Veicular. Todos os direitos reservados.</p>
          <p className="font-medium text-foreground/60">
            Desenvolvido por Sanzony Tech&trade;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
