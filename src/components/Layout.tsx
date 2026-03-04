import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';

export default function Layout() {
  const [copiado, setCopiado] = useState(false);

  // Lógica para saudação
  const getSaudacao = () => {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return "Bom dia";
    if (hora >= 12 && hora < 18) return "Boa tarde";
    return "Boa noite";
  };

  // Funções de compartilhamento
  const urlAtual = window.location.href;
  const tituloAtual = document.title;

  const copiarLink = () => {
    navigator.clipboard.writeText(urlAtual);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="px-8 mt-40 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* ÍCONES DE COMPARTILHAMENTO - Logo acima do breadcrumbs */}
          <div className="pt-12 flex gap-6 items-center">
            {/* Threads */}
            <a 
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(tituloAtual + " " + urlAtual)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-all duration-300"
              title="Threads"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
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

          <div className="py-8">
            <Breadcrumbs /> 
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <p>Pitore © {new Date().getFullYear()} por Din — CC BY 4.0</p>
            <p className="font-light opacity-80">{getSaudacao()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
