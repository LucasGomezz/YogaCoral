"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
};

export default function ContactModal({
  open,
  onClose,
  defaultService,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    defaultService || "Seleccionar servicio"
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrors({
        name: false,
        email: false,
        message: false,
      });

      setService(defaultService || "Seleccionar servicio");
      document.body.style.overflow = "auto";
      return;
    }

    setErrors({
      name: false,
      email: false,
      message: false,
    });

    setService(defaultService || "Seleccionar servicio");

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose, defaultService]);

  const sendWhatsapp = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) return;

    const text = `Hola, soy ${name}

Empresa: ${company}
Email: ${email}
Servicio solicitado: ${service}

Consulta:
${message}`;

    window.open(
      `https://wa.me/541135925567?text=${encodeURIComponent(text)}`,
      "_blank"
    );
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
            className="fixed inset-0 z-100 bg-black/45 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-101 grid place-items-center p-4"
          >
            <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 rounded-full p-2 text-gray-500 hover:bg-gray-100 transition cursor-pointer"
              >
                <X size={22} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block bg-navy text-white px-6 sm:px-8 lg:px-10 py-10">
                  <p className="text-coral text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                    MS Group
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Hablemos de tu proximo envio
                  </h2>

                  <p className="text-white/80 mb-10">
                    Soluciones integrales de logística internacional.
                  </p>

                  <div className="space-y-6 text-sm sm:text-base">
                    <div className="flex gap-4">
                      <MapPin className="text-coral mt-1" size={16} />
                      <div>
                        Tte. Gral. Juan D. Perón 683, 3° piso
                        <br />
                        Buenos Aires, Argentina
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="text-coral mt-1" size={16} />
                      <a href="tel:+54 11 4322-4902">+54 11 4322-4902</a>
                    </div>

                    <div className="flex gap-4">
                      <Mail className="text-coral mt-1" size={16} />
                      <a href="mailto:maritima@maritima-group.com">
                        maritima@maritima-group.com
                      </a>
                    </div>

                    <div className="flex gap-4">
                      <Clock3 className="text-coral mt-1" size={16} />
                      <div>Lunes a Viernes · 9:00 a 18:00</div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 lg:px-10 py-10">
                  <div className="block lg:hidden mb-6">
                    <h3 className="text-2xl font-semibold text-navy mb-2">
                      Hablemos de tu próximo envio
                    </h3>
                    <p className="text-md font-semibold text-navy">
                      Completa el formulario y un especialista te contactará de
                      inmediato.
                    </p>
                  </div>

                  <div className="hidden lg:block mb-6">
                    <h3 className="text-2xl font-semibold text-navy mb-2">
                      Solicitar contacto
                    </h3>
                    <p className="text-md font-semibold text-navy">
                      Completa el formulario y un especialista te contactará de
                      inmediato.
                    </p>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Nombre *"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((prev) => ({ ...prev, name: false }));
                      }}
                      className={`w-full border rounded-xl my-2 px-4 py-3 outline-none transition ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-coral"
                      }`}
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mb-2">
                        Este campo es obligatorio
                      </p>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Empresa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-coral"
                  />

                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((prev) => ({ ...prev, email: false }));
                      }}
                      className={`w-full border space-y-4 rounded-xl px-4 py-3 my-2 outline-none transition ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-coral"
                      }`}
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        Este campo es obligatorio
                      </p>
                    )}
                  </div>

                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 my-2 outline-none focus:border-coral text-gray-600 cursor-pointer"
                  >
                    <option>Seleccionar servicio</option>
                    <option>MS Shipping</option>
                    <option>MS Forwarding</option>
                    <option>MS Trading</option>
                  </select>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Contanos qué necesitás... *"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setErrors((prev) => ({ ...prev, message: false }));
                      }}
                      className={`w-full border rounded-xl px-4 py-3 outline-none resize-none transition ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-coral"
                      }`}
                    />

                    {errors.message && (
                      <p className="text-red-500 text-sm mb-2">
                        Este campo es obligatorio
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={sendWhatsapp}
                    className="w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    Enviar consulta por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}