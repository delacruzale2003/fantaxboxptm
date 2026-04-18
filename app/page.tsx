'use client';

import Image from "next/image";
import { motion } from "framer-motion";

// Definimos las tiendas y sus URLs para iterar fácilmente
const stores = [
  { 
    name: "Tambo", 
    url: "https://promofantaxbox-tambo.ptm.pe",
    color: "bg-[#942180]", // Color Tambo
    delay: 0.2
  },
  { 
    name: "Oxxo", 
    url: "https://promofantaxbox-oxxo.ptm.pe",
    color: "bg-[#e21b22]", // Color Oxxo
    delay: 0.4
  },
  { 
    name: "Listo", 
    url: "https://fantaxbox-listo.ptm.pe",
    color: "bg-[#00529b]", // Color Listo
    delay: 0.6
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#5c3471] relative overflow-hidden selection:bg-white/30">
      
      {/* Elementos decorativos de fondo (Opcional, le da un toque premium) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"
        />
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-md">
        
        {/* Logo Principal con animación flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative w-64 h-40 sm:w-80 sm:h-48 flex items-center justify-center"
          >
            {/* Reemplaza "/fantaxbox-logo.png" por tu logo real en la carpeta public */}
            <Image
              src="/fantaicon.svg" // Usando el icono que ya tienes como fallback
              alt="Fanta x Xbox Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Texto de llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wide leading-tight drop-shadow-lg">
            ¡Participa realizando <br/> tus compras!
          </h1>
          <p className="text-white/80 mt-3 text-sm sm:text-base font-medium">
            Selecciona la tienda donde adquiriste tu combo y registra tu voucher.
          </p>
        </motion.div>

        {/* Contenedor de Botones de Tiendas */}
        <div className="w-full space-y-4">
          {stores.map((store) => (
            <motion.a
              key={store.name}
              href={store.url}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20, 
                delay: store.delay 
              }}
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-between w-full p-4 px-8 rounded-full shadow-xl text-white no-underline border border-white/10 ${store.color} relative overflow-hidden group`}
            >
              {/* Brillo al pasar el hover */}
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12" />
              
              <span className="text-xl font-black uppercase tracking-widest relative z-10">
                {store.name}
              </span>
              
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>

      </div>
    </main>
  );
}