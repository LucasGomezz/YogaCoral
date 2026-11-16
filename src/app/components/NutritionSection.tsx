"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Apple, Leaf, UserRound, Dumbbell, Droplet, Heart, ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";
import { nutritionContent, nutritionServices } from "./nutritionContent";

const icons = [Apple, Leaf, UserRound, Dumbbell, Droplet, Heart];

export default function NutritionSection({ lang }: { lang: "es" | "en" }) {
  const t = nutritionContent[lang];
  const [contactOpen, setContactOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const bookButton = (filled = false) => (
    <button
      type="button"
      onClick={() => setContactOpen(true)}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#985f43] px-6 py-3 text-sm font-medium motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#985f43] ${filled ? "bg-[#985f43] text-white hover:bg-[#78452e]" : "text-[#744b3e] hover:bg-[#f1e4dc]"}`}
    >
      {t.book}<ArrowRight size={18} aria-hidden="true" />
    </button>
  );

  return (
    <>
      <section id="nutrition" aria-labelledby="nutrition-title" lang={lang} className="scroll-mt-28 overflow-hidden bg-[#fdfbf9] py-20 text-[#69483e] md:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-6 md:space-y-20 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#985f43]">{t.eyebrow}</p>
              <h2 id="nutrition-title" style={{ fontFamily: "Georgia, serif", fontWeight: 400 }} className="mb-6 text-4xl leading-[1.08] md:text-5xl xl:text-6xl">
                {t.headline}<span className="mt-2 block italic text-[#a76d54]">{t.headlineAccent}</span>
              </h2>
              <p className="mb-8 max-w-xl text-base leading-relaxed md:text-lg">{t.introduction}</p>
              {bookButton()}
            </div>
            <motion.div initial={false} whileInView={reduceMotion ? {} : { y: [12, 0] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-3xl bg-[#eee3d8]">
              <Image src="/images/nutrition/berry-bowl.webp" alt={t.photos.bowl} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
            </motion.div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-5 gap-3" aria-label={lang === "es" ? "Alimentos reales y comidas caseras" : "Real food and homemade meals"}>
              <div className="relative col-span-3 row-span-2 min-h-72 overflow-hidden rounded-2xl md:min-h-96"><Image src="/images/nutrition/balanced-meal.webp" alt={t.photos.meal} fill sizes="(min-width: 1024px) 300px, 55vw" className="object-cover" /></div>
              <div className="relative col-span-2 aspect-square overflow-hidden rounded-2xl"><Image src="/images/nutrition/breakfast.webp" alt={t.photos.breakfast} fill sizes="(min-width: 1024px) 200px, 35vw" className="object-cover" /></div>
              <div className="relative col-span-2 aspect-square overflow-hidden rounded-2xl"><Image src="/images/nutrition/fruit.webp" alt={t.photos.fruit} fill sizes="(min-width: 1024px) 200px, 35vw" className="object-cover" /></div>
              <div className="relative col-span-5 h-32 overflow-hidden rounded-2xl md:h-40"><Image src="/images/nutrition/vegetable-tart.webp" alt={t.photos.tart} fill sizes="(min-width: 1024px) 500px, 90vw" className="object-cover object-[center_45%]" /></div>
            </div>
            <div className="space-y-6 text-base leading-relaxed md:text-lg">{t.approach.map(p => <p key={p}>{p}</p>)}</div>
          </div>

          <div>
            <h3 style={{ fontFamily: "inherit", fontWeight: 400 }} className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-[#985f43]">{t.principlesTitle}</h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {t.principles.map((principle, i) => { const Icon = icons[i]; return (
                <li key={principle} className="flex flex-col items-center gap-4 rounded-2xl bg-[#f4eae3] px-4 py-6 text-center text-sm leading-relaxed"><Icon aria-hidden="true" size={32} strokeWidth={1.2} className="text-[#985f43]" />{principle}</li>
              ); })}
            </ul>
          </div>
        </div>

        <div className="relative my-16 overflow-hidden rounded-[50%_10%_50%_10%/8%_8%_8%_8%] py-14 md:my-20 md:py-20">
          <Image src="/images/nutrition/vegetables.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#38291e]/70" />
          <div className="relative mx-auto max-w-5xl space-y-4 px-6 text-center text-white">
            <p className="font-serif text-3xl italic leading-snug md:text-4xl">{t.realFood}</p>
            <p className="text-base leading-relaxed md:text-lg">{t.lifelong}</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-16 px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#985f43]">{t.movement}</p>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400 }} className="mb-6 text-3xl italic leading-tight md:text-4xl">{t.wellbeing}</h3>
              <div className="space-y-5 text-base leading-relaxed md:text-lg">{t.guidance.map(p => <p key={p}>{p}</p>)}</div>
            </div>
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400 }} className="mb-7 text-3xl leading-tight">{t.guideTitle}</h3>
              <ol className="mb-8 space-y-4">{t.consultations.map((item, i) => <li key={item} className="flex items-center gap-4 leading-relaxed"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0dcd0] text-sm text-[#874e35]">{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
              {bookButton(true)}
            </div>
          </div>
          <div className="rounded-3xl bg-[#f4eae3] p-8 text-center md:px-16 md:py-12">
            <p className="mx-auto mb-5 max-w-3xl font-serif text-2xl italic leading-relaxed md:text-3xl">{t.learn}</p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed md:text-lg">{t.purpose}</p>
          </div>
          <p className="text-center font-serif text-2xl italic leading-relaxed text-[#985f43] md:text-3xl">{t.wellbeing}</p>
        </div>
      </section>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} lang={lang} defaultService={nutritionServices[lang]} />
    </>
  );
}
