import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ReactNode, useEffect } from 'react'; // 1. Adicionamos o useEffect aqui

interface PageTemplateProps {
  title: string;
  children: ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  
  // 2. Este bloco faz a mágica de mudar o nome na aba do navegador
  useEffect(() => {
    document.title = `${title} | Pitore`;
  }, [title]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="px-8 py-20 max-w-3xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/sobre" className="inline-flex items-center gap-4 text-white/40 hover:text-white mb-24 transition-colors duration-500 text-xs uppercase tracking-[0.2em]">
          &larr; Voltar
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-16">{title}</h1>
        <div className="prose prose-invert prose-p:font-light prose-p:text-white/60 prose-p:leading-relaxed prose-p:text-lg max-w-none">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
