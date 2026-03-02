import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const links = [
  { id: 'mim', name: 'Mim' },
  { id: 'etica', name: 'Ética' },
  { id: 'marca', name: 'Marca' },
  { id: 'diario', name: 'Diário' },
  { id: 'juridico', name: 'Jurídico' },
  { id: 'contato', name: 'Contato' },
];

export default function Sobre() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="px-8 py-20 max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center"
    >
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-6xl font-light tracking-tighter mb-24 text-center"
      >
        Sobre
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {links.map((link, idx) => (
          <motion.div 
            key={link.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              to={`/sobre/${link.id}`}
              className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/40 transition-all duration-500 ease-out"
            >
              <span className="text-xl font-light text-white/60 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 ease-out">
                {link.name}
              </span>
              <span className="text-white/20 group-hover:text-white/60 transition-colors duration-500">
                &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
