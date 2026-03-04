import { useState } from 'react';

export default function Footer() {
  const [copiado, setCopiado] = useState(false);

  // Pega a URL e o Título de forma segura para o React
  const urlAtual = typeof window !== 'undefined' ? window.location.href : '';
  const tituloAtual = typeof window !== 'undefined' ? document.title : 'Pitore';

  const copiarLink = () => {
    navigator.clipboard.writeText(urlAtual);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <footer className="w-full px-8 py-16 flex flex-col items-center text-center mt-auto border-t border-white/5 bg-transparent">
      
      {/* Container dos Ícones - Aqui está o trio secreto */}
      <div className="flex gap-10 items-center justify-center mb-10">
        
        {/* Threads */}
        <a 
          href={`https://www.threads.net/intent/post?text=${encodeURIComponent(tituloAtual + " " + urlAtual)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110"
          title="Compartilhar no Threads"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        </a>

        {/* E-mail */}
        <a 
          href={`mailto:?subject=${encodeURIComponent(tituloAtual)}&body=Veja isso na Pitore: ${urlAtual}`}
          className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110"
          title="Enviar por E-mail"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>

        {/* Clipboard (Copiar Link) */}
        <button 
          onClick={copiarLink}
          className="relative text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none"
          title="Copiar Link"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          
          {/* Feedback de Copiado */}
          <span className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] px-2 py-1 rounded-sm uppercase tracking-widest transition-opacity duration-300 ${copiado ? 'opacity-100' : 'opacity-0'}`}>
            Copiado
          </span>
        </button>

      </div>

      {/* Texto de Licença */}
      <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] leading-loose">
        Pitore &copy; {new Date().getFullYear()} por Din <br/> 
        Licenciado sob CC BY 4.0
      </p>
    </footer>
  );
}
