import React from 'react';
import { Download, Shield, BarChart3, Bell, CheckCircle2, ChevronRight, PieChart, Headphones, Smartphone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const EMAIL_SOPORTE = "junior.arias04yt@gmail.com";

  // Variantes de Animación
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-[#0D1117] min-h-screen text-slate-200 font-sans selection:bg-brand/30">
      {/* Navbar Minimalista */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 z-50 border-b border-dark-border bg-dark-bg/80 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="Daniq Logo" className="w-9 h-9 rounded-[10px]" />
            <span className="font-bold text-xl tracking-tight text-white mt-1">Daniq</span>
          </div>
          <div className="flex items-center gap-4">
             <a href={`mailto:${EMAIL_SOPORTE}`} className="hidden md:flex text-slate-400 hover:text-white font-medium text-sm transition-colors items-center gap-2">
                Soporte
             </a>
             <a 
               href="/Daniq 1.1.0.apk" 
               download="Daniq_App.apk"
               className="bg-dark-card border border-dark-border hover:border-brand/50 hover:bg-brand/10 text-white px-5 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2">
               Descargar <Download size={16} className="text-brand" />
             </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Glow de fondo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" 
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 text-center md:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Versión 1.1.0 Disponible
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
              Control inteligente de tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-green-600">gastos.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[#94A3B8] text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Daniq es la aplicación de finanzas personales diseñada para darte claridad mental. Registra, controla y domina tu dinero en segundos.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <motion.a 
                href="/Daniq 1.1.0.apk" 
                download="Daniq_App.apk"
                variants={fadeUp} 
                className="w-full sm:w-auto bg-brand hover:scale-105 active:scale-95 text-dark-bg font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-transform shadow-xl shadow-brand/20"
              >
                <Download size={20} />
                Descargar APK
              </motion.a>
              <motion.a 
                href="#galeria" 
                variants={fadeUp} 
                className="w-full sm:w-auto bg-dark-card border border-dark-border hover:bg-dark-border/50 hover:scale-105 transition-transform text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-3"
              >
                Ver la App <ChevronRight size={20} className="text-slate-500" />
              </motion.a>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-slate-600 text-xs font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 size={14} className="text-brand" /> Para Android 9.0+ • Privado • Sin Anuncios
            </motion.p>
          </motion.div>

          {/* Mockup del teléfono (Real) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[320px]"
          >
            <div className="relative z-10 bg-dark-bg border-[8px] border-dark-card rounded-[48px] h-[650px] shadow-2xl shadow-brand/10 overflow-hidden">
                <div className="absolute top-0 w-full h-6 bg-black/20 backdrop-blur-sm z-20" />
                <img 
                   src="/dashboard.jpg" 
                   alt="Daniq App Screenshot"
                   className="w-full h-full object-cover"
                />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Características (Features) */}
      <section className="border-t border-dark-border bg-dark-bg py-24 px-6 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Por qué elegir Daniq</h2>
            <p className="text-slate-500 text-lg">Diseñada para darte la tranquilidad que necesitas cada mes.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-dark-card p-8 rounded-[32px] border border-dark-border hover:border-brand/30 transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-dark-bg rounded-2xl border border-dark-border flex items-center justify-center mb-6 group-hover:bg-brand/10 group-hover:scale-110 transition-all">
                <Shield size={24} className="text-brand" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">100% Local y Segura</h3>
              <p className="text-[#94A3B8] leading-relaxed relative z-10">Tus datos nunca salen de tu teléfono. Operamos con SQLite interno para garantizar tu privacidad absoluta.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-dark-card p-8 rounded-[32px] border border-dark-border hover:border-blue-500/30 transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-dark-bg rounded-2xl border border-dark-border flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all">
                <BarChart3 size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Análisis Visual Avanzado</h3>
              <p className="text-[#94A3B8] leading-relaxed relative z-10">Visualiza tu flujo de dinero con gráficas interactivas y reportes exportables a Excel (CSV).</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-dark-card p-8 rounded-[32px] border border-dark-border hover:border-purple-500/30 transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-dark-bg rounded-2xl border border-dark-border flex items-center justify-center mb-6 group-hover:bg-purple-500/10 group-hover:scale-110 transition-all">
                <PieChart size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Bolsillos y Metas</h3>
              <p className="text-[#94A3B8] leading-relaxed relative z-10">Organiza sobres de ahorro y pon límites para controlar de forma inteligente los gastos no planificados.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Galería (Screenshots Reales) */}
      <section id="galeria" className="py-24 px-6 bg-gradient-to-b from-dark-bg to-dark-card border-t border-dark-border">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
             className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
               <span className="text-brand font-bold uppercase tracking-widest text-xs mb-2 block">Por Dentro</span>
               <h2 className="text-3xl md:text-5xl font-black text-white">Diseño Premium</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
               {[
                 { src: '/reportes avanzados.jpg', title: 'Análisis Pro' },
                 { src: '/bolsillo.jpg', title: 'Bolsillos' },
                 { src: '/sidebar.jpg', title: 'Menú Navegación' },
                 { src: '/movimientos.jpg', title: 'Movimientos' }
               ].map((img, i) => (
                  <motion.div 
                     key={i} 
                     variants={fadeUp}
                     whileHover={{ y: -10, scale: 1.02 }}
                     className="group relative rounded-[32px] overflow-hidden border-4 border-dark-border shadow-xl hover:border-brand/50 transition-colors duration-300 cursor-pointer"
                  >
                     <img src={img.src} alt="Daniq Screenshot" className="w-full h-auto" />
                     <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <p className="text-white font-bold text-center text-sm">{img.title}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
          </motion.div>
      </section>

      {/* Soporte y CTA */}
      <section className="py-24 px-6 relative bg-dark-bg border-t border-dark-border overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center relative z-10 bg-dark-card border border-dark-border p-10 md:p-16 rounded-[48px] shadow-2xl"
         >
            <div className="w-20 h-20 bg-dark-bg border border-dark-border rounded-3xl items-center justify-center flex mx-auto mb-6">
                <Headphones size={36} className="text-brand" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">¿Tienes sugerencias o dudas?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
               Daniq es un proyecto vivo y queremos que sea la mejor app para ti. Si algo falla o quieres una nueva función, escríbenos directamente.
            </p>
            <motion.a 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               href={`mailto:${EMAIL_SOPORTE}`}
               className="inline-flex items-center gap-3 bg-white text-dark-bg font-black px-8 py-4 rounded-2xl cursor-pointer"
            >
               <Mail size={20} />
               Contactar a Soporte
            </motion.a>
         </motion.div>
      </section>

      {/* Footer minimalista */}
      <footer className="border-t border-dark-border bg-dark-bg py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-3">
              <img src="/icon.png" className="w-6 h-6 rounded-md opacity-50 grayscale" />
              <p className="text-slate-600 text-sm font-medium">© {new Date().getFullYear()} Daniq App. Creada por Junior Arias.</p>
           </div>
           <p className="text-slate-700 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
             <Smartphone size={14} /> Tu aliada financiera local
           </p>
        </div>
      </footer>
    </div>
  );
}
