"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroYoga() {
  return (
    <section className="relative bg-[#f8f9fa] text-[#1a1a1a] py-16 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.03, rotate: 12 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 pointer-events-none"
      >
      </motion.div>

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
              alt="nati"
              fill
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
                  about me
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="text-4xl md:text-5xl font-title text-[#111] leading-[1.1] tracking-tight"
              >
                I'm Natalia <br />
                <span className="text-[#d7bdb3]">your yoga teacher</span>
              </motion.h2>

              <div className="space-y-6">
                {[
                  <>
                    My journey with yoga began over 4 years ago as a personal search for physical and mental well-being. Over time, it became my lifestyle and my passion: guiding others to reconnect with themselves.
                  </>,
                  <>
                    My classes combine mindful movement, breath, and presence. I believe in an accessible, loving, and transformative yoga practice.
                  </>,
                ].map((text, i) => (
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