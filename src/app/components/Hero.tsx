"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ContactModal from "@/app/components/ContactModal";

type HeroProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonColor?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  overlayOpacity?: string;
  gradient?: boolean;
  gradientColor?: string;
  defaultService?: string;
};

export default function Hero({
  title,
  description,
  buttonText = "Contactanos",
  buttonColor = "bg-coral hover:bg-coral/90",
  mediaType,
  mediaSrc,
  overlayOpacity = "bg-black/30",
  gradient = true,
  gradientColor = "from-navy via-navy/80",
  defaultService = "Seleccionar servicio",
}: HeroProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const isSpanish = lang === "es";

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        
        {/* SELECTOR DE IDIOMA DESKTOP (Solo visible en pantallas grandes) */}
        <div className="hidden xl:flex absolute top-10 right-10 z-50 gap-3 text-sm font-bold">
          <Link 
            href="/?lang=en" 
            className={`transition-colors ${!isSpanish ? 'text-white underline decoration-[#d7bdb3] underline-offset-4' : 'text-white/60 hover:text-white'}`}
          >
            EN
          </Link>
          <span className="text-white/40">|</span>
          <Link 
            href="/?lang=es" 
            className={`transition-colors ${isSpanish ? 'text-white underline decoration-[#d7bdb3] underline-offset-4' : 'text-white/60 hover:text-white'}`}
          >
            ES
          </Link>
        </div>

        {/* BACKGROUND MEDIA */}
        {mediaType === "video" ? (
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover contrast-125">
            <source src={mediaSrc} type="video/MOV" />
          </video>
        ) : (
          <Image src={mediaSrc} alt={title} fill priority className="object-cover" sizes="100vw" />
        )}

        <div className={`absolute inset-0 ${overlayOpacity}`} />
        {gradient && (
          <div className={`absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[55%] bg-linear-to-r ${gradientColor} to-transparent`} />
        )}

        {/* CONTENT - SWISS STYLE / BOLD MINIMAL */}
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col justify-end pb-24 min-h-[85vh]">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
    
    {/* Columna del Título */}
    <div className="lg:col-span-8">
      <h1 className="text-[clamp(2.5rem,10vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight text-white mb-0">
        {title}<span className="text-coral">.</span>
      </h1>
    </div>

    {/* Columna de Descripción y Acción */}
    <div className="lg:col-span-4 flex flex-col gap-8">
      <p className="text-base sm:text-lg text-white/80 leading-relaxed border-l-2 border-white/20 pl-6 font-medium">
        {description}
      </p>
      
      <button
        onClick={() => setContactOpen(true)}
        className="group w-fit flex items-center gap-6 bg-transparent border border-white/30 hover:border-white text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <span className="text-sm font-bold uppercase tracking-widest">{buttonText}</span>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-coral group-hover:text-[#8e735b] transition-colors duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </button>
    </div>

  </div>
</div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} lang={lang} defaultService={defaultService} />
    </>
  );
}