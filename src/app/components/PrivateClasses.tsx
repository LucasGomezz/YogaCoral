"use client";

import { useState } from "react";
import { User } from "lucide-react";
import ContactModal from "@/app/components/ContactModal";

// 1. Definimos las traducciones para este componente
const content = {
  en: {
    title: "Private classes",
    p1: "A personalized practice designed to support your physical, emotional, and spiritual journey. We focus on what your body and soul need: to move, release, rest, strengthen, breathe, and reconnect.",
    p2: "Each session is unique, guided by presence and deep listening, so you can fully inhabit yourself and return to your center.",
    button: "Book a session",
    serviceValue: "Private Classes",
  },
  es: {
    title: "Clases privadas",
    p1: "Una práctica personalizada diseñada para acompañar tu proceso físico, emocional y espiritual. Nos enfocamos en lo que tu cuerpo y alma necesiten: mover, soltar, descansar, fortalecer, respirar y reconectar.",
    p2: "Cada encuentro es único, guiado desde la presencia y la escucha profunda, para que puedas habitarte plenamente y volver a tu centro.",
    button: "Reservar sesión",
    serviceValue: "Clases Privadas",
  },
};

export default function PrivateClasses({ lang = "en" }: { lang?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = content[lang as keyof typeof content] || content.en;

  return (
    <section id="private-classes" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* VIDEO CENTRADO */}
          <div className="order-2 lg:order-1 lg:col-span-8 flex justify-center">
            <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-neutral-100 w-full max-w-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              >
                <source
                  src="https://res.cloudinary.com/dax4fjnwx/video/upload/q_auto,f_mp4/v1778294474/nati_figi8x.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          </div>

          {/* TEXTO */}
          <div className="order-1 lg:order-2 lg:col-span-4 space-y-6 lg:pl-8">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#d7bdb3]/10 text-[#d7bdb3]">
              <User size={32} strokeWidth={1.5} />
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
        </div>
      </div>

      {/* MODAL */}
      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        defaultService={t.serviceValue}
      />
    </section>
  );
}