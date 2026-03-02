import { motion } from 'motion/react';
import { useEffect } from 'react';

// Organizei os seus dados aqui para o código ficar limpo!
const categorias = [
  {
    titulo: 'Entretenimento',
    cor: '#FE1818',
    itens: [
      { nome: 'Apple TV', desc: 'O melhor do cinema e das produções originais para o seu repertório visual.', link: '#' },
      { nome: 'HBO Max', desc: 'O melhor do cinema e das produções originais para o seu repertório visual.', link: '#' },
      { nome: 'Steam', desc: 'Tecnologia, hardware e o universo dos jogos para o seu setup de alta performance.', link: '#' },
    ]
  },
  {
    titulo: 'Dinheiro',
    cor: '#18FF19',
    itens: [
      { nome: 'FNO', desc: 'Ferramentas para construção de liberdade geográfica, trabalho digital e gestão inteligente.', link: '#' },
      { nome: 'Inter', desc: 'Ferramentas para construção de liberdade geográfica, trabalho digital e gestão inteligente.', link: '#' },
    ]
  },
  {
    titulo: 'Saúde',
    cor: '#1889FF',
    itens: [
      { nome: 'Olympikus', desc: 'Equipamentos para o corpo em movimento e cuidados para a vida doméstica e animal.', link: '#' },
      { nome: 'Netshoes', desc: 'Equipamentos para o corpo em movimento e cuidados para a vida doméstica e animal.', link: '#' },
    ]
  },
  {
    titulo: 'Filosofia',
    cor: '#FF7218',
    itens: [
      { nome: 'Surfshark', desc: 'Privacidade digital, leitura infinita e o acesso rápido a qualquer objeto de estudo.', link: '#' },
      { nome: 'Kindle', desc: 'Privacidade digital, leitura infinita e o acesso rápido a qualquer objeto de estudo.', link: '#' },
      { nome: 'Mercado Livre', desc: 'Privacidade digital, leitura infinita e o acesso rápido a qualquer objeto de estudo.', link: '#' },
    ]
  },
  {
    titulo: 'Língua',
    cor: '#FEEF18',
    itens: [
      { nome: 'YouTube', desc: 'A maior plataforma de conhecimento em vídeo e oratória do mundo.', link: '#' },
    ]
  },
  {
    titulo: 'Estilo',
    cor: '#ae18fe',
    itens: [
      { nome: 'Shein', desc: 'Do estilo acessível à alta joalheria. Estética e ornamentação pessoal.', link: '#' },
      { nome: 'Monte Carlo', desc: 'Cuidados com a imagem pessoal e a harmonia estética do seu ambiente.', link: '#' },
      { nome: 'Vivara', desc: 'Cuidados com a imagem pessoal e a harmonia estética do seu ambiente.', link: '#' },
      { nome: 'Beleza na Web', desc: 'Cuidados com a imagem pessoal e a harmonia estética do seu ambiente.', link: '#' },
      { nome: 'Camicado', desc: 'Cuidados com a imagem pessoal e a harmonia estética do seu ambiente.', link: '#' },
    ]
  },
  {
    titulo: 'Amor',
    cor: '#FF189C',
    itens: [
      { nome: 'Miess', desc: 'Exploração, desejo e o aprofundamento da intimidade e do prazer.', link: '#' },
      { nome: 'Panty Nova', desc: 'Exploração, desejo e o aprofundamento da intimidade e do prazer.', link: '#' },
    ]
  }
];

export default function Loja() {
  useEffect(() => {
    document.title = "Loja | Pitore";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="px-8 py-20 max-w-4xl mx-auto w-full"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">Loja</h1>
        <p className="text-white/50 font-light text-lg">Alguns dos nossos parceiros.</p>
      </motion.div>

      <div className="space-y-20">
        {categorias.map((categoria, catIdx) => (
          <motion.section 
            key={categoria.titulo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 + catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Título da Categoria com a cor específica */}
            <h2 
              className="text-[10px] uppercase tracking-[0.3em] mb-6 border-b border-white/10 pb-3 inline-block"
              style={{ color: categoria.cor }}
            >
              {categoria.titulo}
            </h2>

            <div className="flex flex-col">
              {categoria.itens.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="group flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/5 gap-6 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-light text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                      {item.nome}
                    </h3>
                    <p className="text-white/50 font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 whitespace-nowrap self-start sm:self-center"
                  >
                    Acessar &rsaquo;
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
