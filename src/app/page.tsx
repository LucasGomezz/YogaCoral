import GroupClasses from "./components/GroupClasses";
import Hero from "./components/Hero";
import IntroYoga from "./components/IntroYoga";
import PrivateClasses from "./components/PrivateClasses";
import Classes from "./components/Classes";
import Footer from "./components/Footer";
import VideosCarousel from "./components/VideosCarousel";
import EndYoga from "./components/EndYoga";
import Navbar from "./components/Navbar"; // 1. Importa el Navbar aquí

const content = {
  en: {
    title: "Find balance, strength and well-being",
    description: "Yoga classes to connect body, mind and soul.",
    button: "View classes",
    defaultService: "Select a service"
  },
  es: {
    title: "Encuentra equilibrio, fuerza y bienestar",
    description: "Clases de yoga para conectar cuerpo, mente y alma.",
    button: "Ver clases",
    defaultService: "Seleccionar servicio"
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = params.lang === "es" ? "es" : "en";
  const t = content[lang];

  return (
    <>
      {/* 2. Le pasamos el lang al Navbar */}
      <Navbar lang={lang} />
      
      <Hero 
        title={t.title}
        description={t.description}
        buttonText={t.button}
        buttonColor="bg-coral hover:bg-coral/90"
        mediaType="video"
        mediaSrc="/videos/hero.mp4"
        overlayOpacity="bg-black/30"
        gradient={true} 
        defaultService={t.defaultService}
      />
      
      <IntroYoga lang={lang} />
      <Classes lang={lang} />
      <PrivateClasses lang={lang} />
      <GroupClasses lang={lang} />
      <EndYoga lang={lang} />
      <VideosCarousel />
      <Footer />
    </>
  );
}