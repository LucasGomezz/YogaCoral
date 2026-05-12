import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google"; 
import "./globals.css";

// Títulos: Súper moderna, limpia y "cara"
const titlesFont = Plus_Jakarta_Sans({
  variable: "--font-titles",
  subsets: ["latin"],
  weight: ["500", "700"], 
  display: "swap",
});

// Cuerpo: El que te gustó
const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coral Reef",
  description: "Coral Reef Yoga",
  icons: {
    icon: "/images/logoIcon.png",
    shortcut: "/images/logoIcon.png",
    apple: "/images/logoIcon.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${titlesFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
