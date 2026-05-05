"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock3, MessageCircle } from "lucide-react";

const content = {
  en: {
    subtitle: "Inner balance starts here",
    desc: "A sacred space to move, breathe, and reconnect with your essence.",
    formTitle: "Connect with Nati",
    formDesc: "Leave your details and let's coordinate your next session.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    serviceLabel: "How can I guide you?",
    services: ["Group Classes", "Private Classes"],
    modeLabel: "Choose modality",
    modes: ["Online", "In-person"],
    messagePlaceholder: "Your message or intention for the practice...",
    whatsappBtn: "Send via WhatsApp",
    hours: "Available: Mon - Fri · 09:00 - 18:00",
    wpGreeting: "Hi Nati! how are you??",
    wpName: "My name is",
    wpService: "Service",
    wpMode: "Modality",
    wpMessage: "Inquiry",
    wpGeneral: "General Inquiry"
  },
  es: {
    subtitle: "El equilibrio comienza aquí",
    desc: "Un espacio sagrado para moverte, respirar y reconectar con tu esencia.",
    formTitle: "Conectá con Nati",
    formDesc: "Dejá tus datos y coordinemos tu próxima sesión.",
    nameLabel: "Nombre completo",
    emailLabel: "Correo electrónico",
    serviceLabel: "¿Cómo puedo guiarte?",
    services: ["Clases Grupales", "Clases Privadas"],
    modeLabel: "Elegir modalidad",
    modes: ["Online", "Presencial"],
    messagePlaceholder: "Tu mensaje o intención para la práctica...",
    whatsappBtn: "Enviar por WhatsApp",
    hours: "Disponible: Lun - Vie · 09:00 - 18:00",
    wpGreeting: "¡Hola Nati! cómo estás??",
    wpName: "Soy",
    wpService: "Servicio",
    wpMode: "Modalidad",
    wpMessage: "Consulta",
    wpGeneral: "Consulta General"
  }
};

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
  lang?: string;
};

export default function ContactModal({
  open,
  onClose,
  defaultService,
  lang = "en",
}: ContactModalProps) {
  const t = content[lang as keyof typeof content] || content.en;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [mode, setMode] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  useEffect(() => {
    if (open) {
      if (defaultService && t.services.includes(defaultService)) {
        setService(defaultService);
      } else {
        setService(t.serviceLabel);
      }
      setMode(t.modeLabel);
      setErrors({ name: false, email: false, message: false });
    }
  }, [open, lang, defaultService, t.services, t.serviceLabel, t.modeLabel]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "auto";
      return;
    }
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  const sendWhatsapp = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim() || !email.includes("@"),
      message: !message.trim()
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) return;

    const selectedService = service === t.serviceLabel ? t.wpGeneral : service;
    const selectedMode = mode === t.modeLabel ? "Not specified" : mode;

    const text = `${t.wpGreeting}\n\n${t.wpName}: *${name}*\nEmail: ${email}\n${t.wpService}: ${selectedService}\n${t.wpMode}: ${selectedMode}\n\n${t.wpMessage}: ${message}`;

    window.open(`https://wa.me/35677146309?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-neutral-900/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] pointer-events-auto flex flex-col lg:flex-row">

              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-30 rounded-full p-2 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer group"
              >
                <X size={20} className="text-neutral-600 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Columna Izquierda */}
              <div className="hidden lg:flex lg:w-[40%] bg-[#2d3a4b] p-12 flex-col justify-between relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#d7bdb3]/15 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#d7bdb3] mb-6">
                    <img src="/images/coral.png" alt="Icono" style={{ width: '48px', height: '48px' }} />
                    <span className="text-xs font-bold uppercase tracking-[0.4em]">Coral Reef</span>
                  </div>
                  <h2 className="text-4xl font-serif text-white leading-tight mb-4">{t.subtitle}</h2>
                  <p className="text-neutral-400 font-light leading-relaxed">{t.desc}</p>
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin size={18} className="text-[#d7bdb3]" />
                    </div>
                    <span>Malta</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Clock3 size={18} className="text-[#d7bdb3]" />
                    </div>
                    <span>{t.hours}</span>
                  </div>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="flex-1 p-8 md:p-14 overflow-y-auto">
                <div className="max-w-md mx-auto">
                  <header className="mb-10 text-center lg:text-left">
                    <h3 className="text-3xl font-serif text-neutral-800 mb-2">{t.formTitle}</h3>
                    <p className="text-neutral-500 text-sm">{t.formDesc}</p>
                  </header>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder={t.nameLabel}
                      value={name}
                      onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: false })); }}
                      className={`w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-4 outline-none transition-all text-neutral-800 placeholder-neutral-500 focus:bg-white focus:ring-4 focus:ring-[#d7bdb3]/10 focus:border-[#d7bdb3] ${errors.name ? "border-red-400 bg-red-50" : ""}`}
                    />

                    <input
                      type="email"
                      placeholder={t.emailLabel}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, email: false })); }}
                      className={`w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-4 outline-none transition-all text-neutral-800 placeholder-neutral-500 focus:bg-white focus:ring-4 focus:ring-[#d7bdb3]/10 focus:border-[#d7bdb3] ${errors.email ? "border-red-400 bg-red-50" : ""}`}
                    />

                    {/* Selector de Servicio */}
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-4 outline-none appearance-none cursor-pointer text-neutral-800 focus:bg-white focus:ring-4 focus:ring-[#d7bdb3]/10 focus:border-[#d7bdb3]"
                      >
                        <option value={t.serviceLabel}>{t.serviceLabel}</option>
                        {t.services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <span className="text-xs">▼</span>
                      </div>
                    </div>

                    {/* Selector de Modalidad */}
                    <div className="relative">
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-4 outline-none appearance-none cursor-pointer text-neutral-800 focus:bg-white focus:ring-4 focus:ring-[#d7bdb3]/10 focus:border-[#d7bdb3]"
                      >
                        <option value={t.modeLabel}>{t.modeLabel}</option>
                        {t.modes.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <span className="text-xs">▼</span>
                      </div>
                    </div>

                    <textarea
                      rows={3}
                      placeholder={t.messagePlaceholder}
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); setErrors(p => ({ ...p, message: false })); }}
                      className={`w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-4 outline-none resize-none transition-all text-neutral-800 placeholder-neutral-500 focus:bg-white focus:ring-4 focus:ring-[#d7bdb3]/10 focus:border-[#d7bdb3] ${errors.message ? "border-red-400 bg-red-50" : ""}`}
                    />

                    <button
                      type="button"
                      onClick={sendWhatsapp}
                      className="w-full mt-4 bg-neutral-900 text-white py-5 rounded-[1.25rem] font-bold flex items-center justify-center gap-3 transition-all hover:bg-black hover:shadow-2xl active:scale-[0.97] cursor-pointer group shadow-lg shadow-neutral-200"
                    >
                      <MessageCircle size={20} className="text-[#d7bdb3] group-hover:scale-110 transition-transform" />
                      <span>{t.whatsappBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}