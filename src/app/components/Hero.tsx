"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importamos Link para la redirección
import { usePathname } from "next/navigation"; // Para saber en qué ruta estamos
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
  const pathname = usePathname();

  // Función simple para determinar si estamos en ES o EN basado en la URL
  // Asumiendo estructura /es/pagina o /en/pagina
  const isSpanish = pathname.startsWith("/es");

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        
        {/* SELECTOR DE IDIOMA - Arriba a la derecha */}
        <div className="absolute top-6 right-6 z-50 flex gap-3 text-sm font-bold">
          <Link 
            href="/en" 
            className={`transition-colors ${!isSpanish ? 'text-white underline decoration-coral underline-offset-4' : 'text-white/60 hover:text-white'}`}
          >
            EN
          </Link>
          <span className="text-white/40">|</span>
          <Link 
            href="/es" 
            className={`transition-colors ${isSpanish ? 'text-white underline decoration-coral underline-offset-4' : 'text-white/60 hover:text-white'}`}
          >
            ES
          </Link>
        </div>

        {/* VIDEO */}
        {mediaType === "video" && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover contrast-125"
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        )}

        {/* IMAGE */}
        {mediaType === "image" && (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        {/* OVERLAY */}
        <div className={`absolute inset-0 ${overlayOpacity}`} />

        {/* GRADIENT */}
        {gradient && (
          <div
            className={`absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[55%] bg-linear-to-r ${gradientColor} to-transparent`}
          />
        )}

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-5">
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/85 mb-8 max-w-lg leading-relaxed">
              {description}
            </p>

            <button
              onClick={() => setContactOpen(true)}
              className={`inline-flex items-center gap-2 ${buttonColor} text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-md text-sm sm:text-lg md:text-xl lg:text-2xl cursor-pointer transition`}
            >
              {buttonText}
              <span className="text-base md:text-lg">→</span>
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={defaultService}
      />
    </>
  );
}