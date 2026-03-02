
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ProductTemplateProps {
  name: string;
  description: string;
  price?: string; // Preço opcional
  buyLink?: string; // Link de compra opcional
}

export default function ProductTemplate({ name, description, price, buyLink }: ProductTemplateProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-8 py-20 max-w-6xl mx-auto w-full">
      <Link to="/butique" className="text-white/40 hover:text-white mb-24 inline-block text-xs uppercase tracking-[0.2em]">&larr; Voltar</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="aspect-[4/5] bg-white/5 flex items-center justify-center">
          <span className="text-white/20 uppercase tracking-[0.2em] text-xs">Liivro {name}</span>
        </div>
        <div>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8">{name}</h1>
          <p className="text-xl text-white/50 mb-8">{description}</p>
          {price && <p className="text-2xl mb-12 font-light">{price}</p>}
          {buyLink && (
            <a href={buyLink} target="_blank" className="inline-block px-10 py-5 bg-white text-black text-sm font-medium uppercase hover:bg-white/90 transition-colors">
              Comprar Agora
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
