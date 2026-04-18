'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Colores oficiales exactos y URLs para SEO
const stores = [
  { 
    name: "Tambo", 
    url: "https://promofantaxbox-tambo.ptm.pe",
    logoPath: "/logotambo.png", 
    color: "bg-[#942180]", 
    
    delay: 0.2
  },
  { 
    name: "Oxxo", 
    url: "https://promofantaxbox-oxxo.ptm.pe",
    logoPath: "/logoOXXO.png", 
    color: "bg-[#e42320]", 
    
    delay: 0.4
  },
  { 
    name: "Listo", 
    url: "https://fantaxbox-listo.ptm.pe",
    logoPath: "/logoLISTO.png", 
    color: "bg-[#ff5100]", 
    
    delay: 0.6
  }
];

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center p-4 sm:p-6 bg-[#5c3471] relative overflow-hidden selection:bg-white/30">
      
      {/* Fondo animado sutil */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          className="absolute -top-[30%] -right-[20%] w-[600px] h-[600px] bg-[#961cd9]/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute -bottom-[30%] -left-[20%] w-[500px] h-[500px] bg-black/20 rounded-full blur-[80px]"
        />
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-sm sm:max-w-md mt-4 sm:mt-8 pb-10">
        
        {/* Logo Fanta x Xbox Flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-[240px] h-[130px] sm:w-[300px] sm:h-[160px] flex items-center justify-center"
          >
            <Image
              src="/logofantaxbox.png" 
              alt="Fanta x Xbox Logo"
              fill
              className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Textos Mejorados para SEO y legibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8 sm:mb-10 w-full px-2"
        >
          {/* H1 crítico para SEO */}
          <h1 className="text-white text-[26px] sm:text-[32px] font-black uppercase tracking-tight leading-[1.1] drop-shadow-lg">
            ¡Participa realizando <br/> tus compras!
          </h1>
          <p className="text-white mt-4 text-[16px] sm:text-[18px] font-bold px-2 sm:px-6 leading-snug drop-shadow-md">
            Participa de los sorteos registrándote y subiendo la foto de tu voucher.
          </p>
        </motion.div>

        {/* Botones / Tarjetas Clickables (Puestos en fila verticalmente) */}
        <nav className="w-full space-y-5 px-2" aria-label="Navegación de tiendas">
          {stores.map((store) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 20, 
                delay: store.delay 
              }}
            >
              {/* Usamos Link para buen SEO. Toda el área es clickable.
                Aplicamos el color específico de la tienda al fondo.
              */}
              <Link 
                href={store.url}
                title={`Ingresar a la promoción de Fanta Xbox en ${store.name}`}
                className={`group flex items-center justify-center w-full h-[90px] sm:h-[100px] rounded-3xl ${store.color} shadow-xl ${store.shadowColor} relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/10`}
              >
                
                {/* Contenedor del Logo centrado */}
                <div className="relative w-36 h-14 sm:w-44 sm:h-16 flex items-center justify-center z-10">
                  <Image
                    src={store.logoPath}
                    alt={`Promoción Fanta Xbox en ${store.name}`}
                    fill
                    className="object-contain drop-shadow-md" 
                  />
                </div>
                
                {/* Texto invisible para lectores de pantalla y bots de Google */}
                <span className="sr-only">Registrar voucher de {store.name}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

      </div>
    </main>
  );
}