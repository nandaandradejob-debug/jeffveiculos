import { useEffect, useState } from "react";
import { Car, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/5531982927747";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Car className="w-5 h-5 text-primary" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl tracking-wide text-foreground">
            JEFF <span className="text-accent">VEICULAR</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in-up">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 hover:text-accent py-2 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-3 rounded-lg font-semibold mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
