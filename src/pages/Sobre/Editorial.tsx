import { useEffect } from 'react';

export default function Editorial() {
  
  // SEO e Título da Página
  useEffect(() => {
    document.title = "Editorial — Pitore";
    window.scrollTo(0, 0); // Garante que a página comece no topo
  }, []);

  const secoes = [
    {
      id: "redacao",
      titulo: "Redação",
      descricao: "Onde a ideia toma forma através da escrita. Ensaios profundos e comunicações diretas.",
      categorias: [
        { rotulo: "Artigo", links: [
          { nome: "LinkedIn", url: "#" },
          { nome: "Threads", url: "#" }
        ]},
        { rotulo: "Boletim", links: [
          { nome: "Substack", url: "#" }
        ]}
      ]
    },
    {
      id: "acustica",
      titulo: "Acústica",
      descricao: "A voz e a frequência da Pitore. Conteúdo em áudio para audição atenta.",
      categorias: [
        { rotulo: "Fala", links: [
          { nome: "Telegram", url: "#" }
        ]}
      ]
    },
    {
      id: "estetica",
      titulo: "Estética",
      descricao: "A curadoria visual e o registro de cenas. Onde a imagem fala pelo silêncio.",
      categorias: [
        { rotulo: "Nota", links: [
          { nome: "Pinterest", url: "#" }
        ]},
        { rotulo: "Tomada", links: [
          { nome: "YouTube", url: "#" }
        ]}
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-24 min-h-screen">
      {/* Cabeçalho Minimalista */}
      <header className="mb-24">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-3 font-medium">Departamento</p>
        <h1 className="text-3xl font-light tracking-tight text-white/90 italic">Editorial</h1>
      </header>

      {/* Grid de Seções */}
      <div className="flex flex-col gap-24">
        {secoes.map((secao) => (
          <section key={secao.id} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
            
            {/* Título da Seção (Redação, Acústica, Estética) */}
            <div className="md:col-span-1">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-2">
                {secao.titulo}
              </h2>
            </div>

            {/* Conteúdo e Links */}
            <div className="md:col-span-3">
              <p className="text-white/60 font-light leading-relaxed mb-10 max-w-lg">
                {secao.descricao}
              </p>
              
              <div className="flex flex-col gap-8">
                {secao.categorias.map((cat, cIndex) => (
                  <div key={cIndex} className="flex flex-col gap-3">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-white/20 italic">
                      {cat.rotulo}
                    </span>
                    <div className="flex gap-6">
                      {cat.links.map((link, lIndex) => (
                        <a 
                          key={lIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white border-b border-white/5 hover:border-white transition-all pb-1"
                        >
                          {link.nome}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        ))}
      </div>
    </div>
  );
}
