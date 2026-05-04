"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. Traducciones del componente Intro
const content = {
  en: {
    badge: "about me",
    title: "I'm Natalia",
    subtitle: "your yoga teacher",
    paragraphs: [
      "My journey with yoga began over 4 years ago as a personal search for physical and mental well-being. Over time, it became my lifestyle and my passion: guiding others to reconnect with themselves.",
      "My classes combine mindful movement, breath, and presence. I believe in an accessible, loving, and transformative yoga practice.",
    ],
  },
  es: {
    badge: "sobre mí",
    title: "Soy Natalia",
    subtitle: "tu profesora de yoga",
    paragraphs: [
      "Mi camino en el yoga comenzó hace más de 4 años como una búsqueda personal de bienestar físico y mental. Con el tiempo, se convirtió en mi estilo de vida y mi pasión: guiar a otros a reconectar consigo mismos.",
      "Mis clases combinan movimiento consciente, respiración y presencia. Creo en una práctica de yoga accesible, amorosa y transformadora.",
    ],
  },
};

export default function IntroYoga({ lang = "en" }: { lang?: string }) {
  // Seleccionamos el idioma
  const t = content[lang as keyof typeof content] || content.en;

  return (
    <section className="relative bg-[#f8f9fa] text-[#1a1a1a] py-16 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.03, rotate: 12 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 pointer-events-none"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-0 border border-gray-200 bg-white shadow-xl overflow-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative min-h-[500px] bg-[#d7bdb3]"
          >
            <Image
              src="/images/nati.jpg"
              alt="Natalia"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover contrast-125"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3"
              >
                <span className="h-0.5 w-6 bg-[#d7bdb3]" />
                <span className="text-[#d7bdb3] font-extrabold text-xs uppercase tracking-[0.2em] font-body">
                  {t.badge}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="text-4xl md:text-5xl font-title text-[#111] leading-[1.1] tracking-tight"
              >
                {t.title} <br />
                <span className="text-[#d7bdb3]">{t.subtitle}</span>
              </motion.h2>

              <div className="space-y-6">
                {t.paragraphs.map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-lg text-gray-600 leading-relaxed max-w-xl font-body"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}