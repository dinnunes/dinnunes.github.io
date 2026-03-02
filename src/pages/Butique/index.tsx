import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const products = [
  { id: 'piteni', name: 'PiTeni', desc: 'A elegância em movimento.' },
  { id: 'pidin', name: 'PiDin', desc: 'Design estruturado e minimalista.' },
  { id: 'pisau', name: 'PiSau', desc: 'Conforto atemporal.' },
  { id: 'pisofia', name: 'PiSofia', desc: 'Delicadeza e sofisticação.' },
  { id: 'pilin', name: 'PiLin', desc: 'Linhas puras e essenciais.' },
  { id: 'pistilo', name: 'Pistilo', desc: 'A expressão do estilo.' },
  { id: 'pimor', name: 'PiMor', desc: 'Amor em cada detalhe.' },
];

export default function Butique() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="px-8 py-20 max-w-7xl mx-auto w-full"
    >
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-6xl font-light tracking-tighter mb-24 text-center"
      >
        Butique
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              to={`/butique/${product.id}`}
              className="group block"
            >
              <div className="aspect-[4/5] bg-white/5 rounded-none mb-8 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-white/20 text-xs tracking-[0.2em] uppercase font-medium">Imagem {product.name}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">{product.name}</h2>
                <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors duration-500">Ver detalhes</span>
              </div>
              <p className="text-white/40 font-light text-sm mt-3">{product.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
