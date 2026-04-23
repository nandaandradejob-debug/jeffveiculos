import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5531982927747?text=Olá!%20Vim%20pelo%20site%20da%20Jeff%20Veicular."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" aria-hidden />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp text-foreground shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" strokeWidth={2.2} />
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
