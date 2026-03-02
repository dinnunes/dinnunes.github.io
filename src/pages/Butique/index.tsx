import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';

const products = [
  { id: 'piteni', name: 'PiTeni', desc: 'Entretenimento, por gentileza.', image: '/piteni.jpg' },
  { id: 'pidin', name: 'PiDin', desc: 'Dinheirooooo…', image: '/pidin.jpg' },
  { id: 'pisau', name: 'PiSau', desc: 'A saúde, do vermelho para o azul.', image: '/pisau.jpg' },
  { id: 'pisofia', name: 'PiSofia', desc: 'Qual é a sua filosofia?', image: '/pisofia.jpg' },
  { id: 'pilin', name: 'PiLin', desc: 'There is not just one language.', image: '/pilin.jpg' },
  { id: 'pistilo', name: 'Pistilo', desc: 'Indo com estilo.', image: '/pistilo.jpg' },
  { id: 'pimor', name: 'PiMor', desc: 'Ah, o amor!', image: '/pimor.jpg' },
];

export default function Butique() {
  useEffect(() => {
    document.title = "Butique | Pitore";
  }, []);

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
              <div className="aspect-[4/5] bg-white/5 mb-8 flex items-center justify-center overflow-hidden relative border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">
                    {product.name}
                  </span>
                )}
              </div>

              <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                  {product.name}
                </h2>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors duration-500">
                  Ver Detalhes
                </span>
              </div>
              <p className="text-white/40 font-light text-sm mt-3 leading-relaxed">
                {product.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
