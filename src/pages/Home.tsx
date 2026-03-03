import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      /* Mudamos de justify-center para um padding vertical consistente (py-20) */
      className="flex-grow flex flex-col items-center px-8 py-20 text-center"
    >
      {/* Adicionei uma margem superior (mt-12) para o título descer exatamente como nas outras páginas */}
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 mt-12"
      >
        Pitore
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-xl text-white/50 font-light max-w-2xl mb-16 leading-relaxed"
      >
        Arquitetando os 7 pilares da experiência humana. <br/>
        Seja a sua melhor versão.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/butique" className="px-10 py-4 bg-white text-black text-sm font-medium tracking-[0.1em] uppercase hover:scale-105 transition-transform duration-500 inline-block">
          Butique
        </Link>
      </motion.div>
    </motion.div>
  );
}
