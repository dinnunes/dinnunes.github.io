import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';

export default function Layout() {
  const [copiado, setCopiado] = useState(false);
  const location = useLocation(); // Isso força o React a "ouvir" as mudanças de página

  const getSaudacao = () => {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return "Bom dia";
    if (hora >= 12 && hora < 18) return "Boa tarde";
    return "Boa noite";
  };

  const copiarLink = () => {
    // Pega a URL completa e atualizada do navegador no momento do clique
    const urlParaCopiar = window.location.href;
    navigator.clipboard.writeText(urlParaCopiar);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  // Prepara os links dinamicamente baseado na localização atual
  const urlAtual = window.location.href;
  const tituloAtual = document.title;

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="px-8 mt-40 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* 1. COMPARTILHAMENTO (ACIMA DA LINHA) */}
          <div className="flex gap-6 items-center mb-6">
            {/* Ícone Threads Real */}
            <a 
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(tituloAtual + " " + urlAtual)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-all duration-300"
              title="Threads"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14.88 11.53c-.07-.02-.15-.04-.22-.05-1.16-.18-1.84-.71-1.84-1.52 0-.71.55-1.22 1.34-1.22.84 0 1.43.51 1.43 1.25 0 .21-.04.42-.11.63l1.83.5c.21-.52.33-1.07.33-1.64 0-1.78-1.42-3.13-3.48-3.13-2.01 0-3.38 1.29-3.38 3.03 0 1.63 1.13 2.76 3.07 3.12 1.31.23 1.95.73 1.95 1.57 0 .86-.71 1.45-1.73 1.45-1.07 0-1.87-.58-1.99-1.51l-1.91.43c.24 1.77 1.72 2.97 3.87 2.97 2.37 0 3.79-1.41 3.79-3.33 0-1.87-1.3-2.97-3.23-3.27l.29.02zm-2.88-9.53C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </a>

            {/* Email */}
            <a 
              href={`mailto:?subject=${encodeURIComponent(tituloAtual)}&body=Olha isso: ${urlAtual}`}
              className="text-white/20 hover:text-white transition-all duration-300"
              title="E-mail"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>

            {/* Clipboard */}
            <button 
              onClick={copiarLink}
              className="relative text-white/20 hover:text-white transition-all duration-300 focus:outline-none"
              title="Copiar Link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              
              <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[7px] px-2 py-1 rounded-sm uppercase tracking-[0.1em] transition-opacity duration-300 ${copiado ? 'opacity-100' : 'opacity-0'}`}>
                copiado
              </span>
            </button>
          </div>

          {/* 2. LINHA E BREADCRUMBS */}
          <div className="py-8 border-t border-white/10">
            <Breadcrumbs /> 
          </div>
          
          {/* 3. RODAPÉ FINAL */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <p>Pitore © {new Date().getFullYear()} por Din — CC BY 4.0</p>
            <p className="font-light opacity-80">{getSaudacao()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
