import { MapPin } from "lucide-react"; // Importamos solo los iconos necesarios
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa"; 

export default function Footer() {
  return (
    // Mantenemos el fondo navy y texto blanco original
    <footer className="bg-navy text-white border-t border-white/10">
      
      {/* Contenedor principal: Max-width estándar, centrado, padding vertical reducido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Flex container: En móvil se apila (col), en sm+ se pone en fila y separa */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          {/* 1. SECCIÓN LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                // Usamos la ruta de tu logo original
                src={"/images/logo.png"} 
                alt="MS Group Logo"
                // Ajusta el ancho y alto según necesites para que se vea bien
                width={120} 
                height={40}
                className="h-10 w-auto" // Mantiene la altura fija, ancho automático
                priority
              />
            </Link>
          </div>

          {/* 2. SECCIÓN INFO (Instagram y Ubicación) */}
          {/* Otro flex container para alinear iconos y texto */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-300">
            
            <a 
              href="https://www.instagram.com/natiyogacoral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-coral transition-colors duration-200"
            >
              {/* Icono de Instagram de Lucide */}
              <FaInstagram size={18} className="text-coral" />
              <span>natiyogacoral</span> 
            </a>

            <span className="hidden sm:block text-white/20" aria-hidden="true">|</span>

            <a 
              href="https://maps.app.goo.gl/tu_enlace_a_google_maps"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-coral transition-colors duration-200"
            >
              <MapPin size={18} className="text-coral" />
              <span>Malta</span>
            </a>
          </div>

        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Coral Reef
        </div>

      </div>
    </footer>
  );
}