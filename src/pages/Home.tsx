import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex-grow flex flex-col items-center justify-center px-8 text-center"
    >
      <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8">
        Pitore
      </motion.h1>
      <motion.p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mb-16 leading-relaxed">
        A estética do pensamento e a ordem do obrar. <br/>
        Seja a sua melhor versão.
      </motion.p>
      <Link to="/butique" className="px-10 py-4 bg-white text-black text-sm font-medium tracking-[0.1em] uppercase hover:scale-105 transition-transform duration-500">
        Butique
      </Link>
    </motion.div>
  );
}
