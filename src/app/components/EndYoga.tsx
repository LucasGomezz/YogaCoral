"use client";

import { motion } from "framer-motion";

// 1. Traducciones del componente
const content = {
  en: {
    headline: (
      <>
        Connect your <span className="font-bold text-[#8e735b]">body</span>, calm your <span className="font-bold text-[#8e735b]">mind</span>, and awaken your <span className="font-bold text-[#8e735b]">soul</span>
      </>
    ),
  },
  es: {
    headline: (
      <>
        Conectá tu <span className="font-bold text-[#8e735b]">cuerpo</span>, calma tu <span className="font-bold text-[#8e735b]">mente</span> y despertá tu <span className="font-bold text-[#8e735b]">alma</span>
      </>
    ),
  },
};

export default function EndYoga({ lang = "en" }: { lang?: string }) {
  // Seleccionamos el idioma
  const t = content[lang as keyof typeof content] || content.en;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6 }
  };

  return (
    <div
      className="relative bg-[#f6f4f0] bg-cover bg-center bg-no-repeat py-16 px-6 text-center"
      style={{ backgroundImage: "url('/images/textures/soft-waves.png')" }}
    >
      <motion.div {...fadeInUp}>
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Párrafo: Frase de cierre con spans dinámicos */}
          <p className="max-w-2xl mx-auto leading-snug font-body font-medium text-[#8e735b] text-3xl md:text-4xl">
            {t.headline}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            {/* Línea Izquierda */}
            <div className="h-px w-24 md:w-48 bg-[#8e735b]/50" />

            {/* Icono de Coral */}
            <div className="text-[#8e735b]">
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22C12 22 12 18 11 15C10 12 7 13 6 10C5 7 7 4 9 5C10 5.5 10.5 7 11 9" />
                <path d="M12 22C12 22 13 17 15 15C17 13 20 14 21 11C22 8 19 6 17 7C16 7.5 15 9 14.5 11" />
                <path d="M12 22V19C12 17 14 16 14 13C14 10 12 8 10 9" />
                <circle cx="9" cy="5" r="0.5" fill="currentColor" />
                <circle cx="17" cy="7" r="0.5" fill="currentColor" />
                <circle cx="12" cy="8" r="0.5" fill="currentColor" />
              </svg>
            </div>

            {/* Línea Derecha */}
            <div className="h-px w-24 md:w-48 bg-[#8e735b]/50" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}