"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import ContactModal from "@/app/components/ContactModal"; // Ajusta la ruta si es necesario

// 1. Definimos los textos fuera del componente
const content = {
  en: {
    title: "Group classes",
    p1: "More than just a space for movement, it’s a ritual of connection. Each practice is guided with presence, deep listening, and truth.",
    p2: "You don’t need any experience, just your willingness to breathe, feel, and come back to yourself. Because when the body awakens, the soul does too. And that’s where the magic begins.",
    button: "Book a session",
    serviceValue: "Group Classes",
  },
  es: {
    title: "Clases grupales",
    p1: "Más que un espacio de movimiento, es un ritual de conexión. Cada práctica es guiada con presencia, escucha profunda y verdad.",
    p2: "No necesitas experiencia, solo tu voluntad de respirar, sentir y volver a ti. Porque cuando el cuerpo despierta, el alma también lo hace. Y ahí es donde comienza la magia.",
    button: "Reservar sesión",
    serviceValue: "Clases Grupales",
  },
};

export default function GroupClasses({ lang = "en" }: { lang?: string }) {
  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. Seleccionamos el idioma actual
  const t = content[lang as keyof typeof content] || content.en;

  return (
    <section id="group-classes" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#d7bdb3]/10 text-[#d7bdb3]">
              <Users size={32} strokeWidth={1.5} />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">
              {t.title}
            </h2>

            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed max-w-sm">
              <p>{t.p1}</p>
              <p className="relative inline-block">
                {t.p2}
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#d7bdb3]/20 -z-10"></span>
              </p>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-[#8e735b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7a624e] transition-all transform hover:scale-105 shadow-md cursor-pointer"
            >
              {t.button}
            </button>
          </div>

          {/* COLUMNA DERECHA: VIDEOS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tarjeta 1 */}
            <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
              <video
                src="/videos/group1.MOV"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Tarjeta 2 */}
            <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
              <video
                src="/videos/group2.mov"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          </div>

        </div>
      </div>

      {/* Modal de Contacto */}
      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        defaultService={t.serviceValue}
      />
    </section>
  );
}