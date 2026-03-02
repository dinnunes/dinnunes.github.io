import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react'; // 1. Adicionado o import

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
  
  // 2. Comando para mudar o nome da aba
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
              className
