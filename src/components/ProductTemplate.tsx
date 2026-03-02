import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ProductTemplateProps {
  name: string;
  description: string;
  category?: string;
  price?: string;
  link?: string;
  image?: string; // Adicionamos a imagem aqui
}

export default function ProductTemplate({ name, description, category, price, link, image }: ProductTemplateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="px-8 py-20 max-w-6xl mx-auto w-full"
    >
      <Link to="/butique" className="text-white/40 hover:text-white mb-24 inline-block text-[10px] uppercase tracking-[0.2em]">
        &larr; Voltar para Butique
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Espaço da Imagem */}
        <div className="aspect-[4/5] bg-white/5 flex items-center justify-center border border-white/5 overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white/10 uppercase tracking-[0.3em] text-[10px]">Pitore Studio</span>
          )}
        </div>
        
        <div className="flex flex-col">
          {category && (
            <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">
              {category}
            </span>
          )}
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8">{name}</h1>
          <p className="text-xl text-white/50 font-light leading-relaxed mb-8">{description}</p>
          
          {price && <p className="text-2xl font-light mb-10">{price}</p>}
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-center px-10 py-5 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all w-full sm:w-max"
            >
              Adquirir
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
