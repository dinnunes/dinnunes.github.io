import { useEffect } from 'react';

export default function Redacao() {
  
  // Atualiza o SEO (Título da Página)
  useEffect(() => {
    document.title = "Redação — Pitore";
  }, []);

  const secoes = [
    {
      titulo: "Artigo",
      descricao: "Reflexões profundas e ensaios sobre a intersecção entre elemento, filosofia e o cotidiano pitoresco.",
      links: [
        { nome: "LinkedIn", url: "#" },
        { nome: "Threads", url: "#" }
      ]
    },
    {
      titulo: "Boletim",
      descricao: "Uma curadoria quinzenal de ideias, referências e bastidores enviada diretamente para sua caixa de entrada.",
      links: [
        { nome: "Substack", url: "#" }
      ]
    },
    {
      titulo: "Nota",
      descricao: "Fragmentos visuais e lampejos de crítica para você saber o que assistir no cinema ou TV.",
      links: [
        { nome: "Pinterest", url: "#" }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-24 min-h-[60vh]">
      {/* Cabeçalho da Página */}
      <header className="mb-20">
        <h1 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">Sobre</h1>
        <h2 className="text-2xl font-light tracking-tight text-white/90">Redação</h2>
      </header>

      {/* Seções */}
      <div className="space-y-24">
        {secoes.map((secao, index) => (
          <section key={index} className="flex flex-col md:flex-row gap-8 md:gap-20 border-t border-white/5 pt-12">
            
            {/* Título da Seção */}
            <div className="md:w-1/4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                {secao.titulo}
              </h3>
            </div>

            {/* Conteúdo e Links */}
            <div className="md:w-3/4">
              <p className="text-white/60 font-light leading-relaxed mb-8 max-w-lg">
                {secao.descricao}
              </p>
              
              <div className="flex gap-6">
                {secao.links.map((link, lIndex) => (
                  <a 
                    key={lIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white border-b border-white/10 hover:border-white transition-all pb-1"
                  >
                    {link.nome}
                  </a>
                ))}
              </div>
            </div>

          </section>
        ))}
      </div>
    </div>
  );
}
