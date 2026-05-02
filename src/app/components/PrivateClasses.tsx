import Image from "next/image";
import { User, Play } from "lucide-react";

export default function PrivateClasses() {
    return (
        <section id="private-classes" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* COLUMNA IZQUIERDA: VIDEOS */}
                    <div className="order-2 lg:order-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Tarjeta Video 1 */}
                        <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-neutral-100">
                            <video
                                src="/videos/nati.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            />
                            {/* Overlay sutil para que el botón de play resalte */}
                            <div className="absolute inset-0 bg-black/10 group:bg-black/20 transition-colors" />
                        </div>

                        {/* Tarjeta Video 2 */}
                        <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-neutral-100">
                            <video
                                src="/videos/private.mov" // Reemplaza con tu segunda ruta
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group:bg-black/20 transition-colors" />
                        </div>

                    </div>

                    {/* COLUMNA DERECHA: TEXTO */}
                    <div className="order-1 lg:order-2 lg:col-span-4 space-y-6 lg:pl-8">
                        <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#d7bdb3]/10 text-[#d7bdb3]">
                            {/* Icono de una sola persona */}
                            <User size={32} strokeWidth={1.5} />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">
                            Private classes
                        </h2>

                        <div className="space-y-4 text-neutral-600 text-lg leading-relaxed max-w-sm">
                            <p>
                                A personalized practice designed to support your physical, emotional, and spiritual journey. We focus on what your body and soul need: to move, release, rest, strengthen, breathe, and reconnect.
                            </p>
                            <p className="relative inline-block">
                                Each session is unique, guided by presence and deep listening, so you can fully inhabit yourself and return to your center.
                            </p>
                        </div>

                        <button className="mt-4 bg-[#8e735b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7a624e] transition-all transform hover:scale-105 shadow-md">
                            Book a session
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}