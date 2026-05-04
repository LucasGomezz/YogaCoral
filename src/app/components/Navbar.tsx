"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "@/app/components/ContactModal";

// 1. Definimos las traducciones
const content = {
  en: {
    home: "Home",
    group: "Group Classes",
    private: "Private Classes",
    button: "Book a class",
    defaultService: "Select service",
  },
  es: {
    home: "Inicio",
    group: "Clases Grupales",
    private: "Clases Privadas",
    button: "Reservar clase",
    defaultService: "Seleccionar servicio",
  },
};

export default function Navbar({ lang = "en" }: { lang?: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [contactOpen, setContactOpen] = useState(false);

  // 3. Seleccionamos el contenido basado en el idioma
  const t = content[lang as keyof typeof content] || content.en;

  useEffect(() => {
    const TOP_OFFSET = 150;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= TOP_OFFSET) {
        setVisible(true);
      } else if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(currentScroll);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const isNearTop = e.clientY <= 80;
      const isInsideNavbar = navRef.current?.contains(e.target as Node);
      if (window.scrollY > TOP_OFFSET && !mobileOpen) {
        if (isNearTop || isInsideNavbar) setVisible(true);
        else setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScroll, mobileOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const getColorPrimary = () => "text-[#d7bdb3]";
  const navLinkClass = (path: string) =>
    `transition ${isActive(path) 
      ? `${getColorPrimary()} font-semibold underline underline-offset-8` 
      : "hover:text-[#d7bdb3]/70"
    }`;

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        <div className="bg-white/75 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* LOGO */}
            <Link href={`/?lang=${lang}`} className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={160}
                height={80}
                className="h-10 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* NAV DESKTOP */}
            <nav className={`hidden xl:flex items-center gap-10 font-medium text-base xl:text-lg ${getColorPrimary()}`}>
              <Link href={`/?lang=${lang}`} className={navLinkClass("/")}>
                {t.home}
              </Link>
              <Link href={`/?lang=${lang}#group-classes`} className={navLinkClass("/#group-classes")}>
                {t.group}
              </Link>
              <Link href={`/?lang=${lang}#private-classes`} className={navLinkClass("/#private-classes")}>
                {t.private}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* CTA DESKTOP */}
              <button
                className="hidden xl:block bg-[#8e735b] text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-all cursor-pointer shadow-sm active:scale-95"
                onClick={() => setContactOpen(true)}
              >
                {t.button}
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`xl:hidden ${getColorPrimary()} cursor-pointer`}
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MENU MOBILE */}
          {mobileOpen && (
            <div className="xl:hidden pt-5 pb-2 border-t mt-4 space-y-4">
              <Link href={`/?lang=${lang}`} onClick={() => setMobileOpen(false)} className={`block ${navLinkClass("/")}`}>
                {t.home}
              </Link>
              <Link href={`/?lang=${lang}#group-classes`} onClick={() => setMobileOpen(false)} className={`block ${navLinkClass("/#group-classes")}`}>
                {t.group}
              </Link>
              <Link href={`/?lang=${lang}#private-classes`} onClick={() => setMobileOpen(false)} className={`block ${navLinkClass("/#private-classes")}`}>
                {t.private}
              </Link>
              <button
                className="w-full mt-2 bg-[#8e735b] text-white px-5 py-3 rounded-xl font-semibold cursor-pointer active:scale-95 transition-transform"
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
              >
                {t.button}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* MODAL DE CONTACTO */}
      <ContactModal 
        open={contactOpen} 
        onClose={() => setContactOpen(false)} 
        lang={lang}
        defaultService={t.defaultService}
      />
    </>
  );
}