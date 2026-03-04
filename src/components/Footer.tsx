import { useEffect } from 'react';

export default function Footer() {
  
  useEffect(() => {
    function setupSharing() {
      const url = window.location.href;
      const title = document.title;

      const threadsBtn = document.getElementById('share-threads') as HTMLAnchorElement;
      const emailBtn = document.getElementById('share-email') as HTMLAnchorElement;
      const copyBtn = document.getElementById('share-copy');
      const feedback = document.getElementById('copy-feedback');

      if (threadsBtn) threadsBtn.href = `https://www.threads.net/intent/post?text=${encodeURIComponent(title + " " + url)}`;
      if (emailBtn) emailBtn.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("Veja isso na Pitore: " + url)}`;

      if (copyBtn && feedback) {
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(url).then(() => {
            feedback.style.opacity = '1';
            setTimeout(() => { feedback.style.opacity = '0'; }, 2000);
          });
        };
      }
    }

    setupSharing();
    window.addEventListener('hashchange', setupSharing);
    return () => window.removeEventListener('hashchange', setupSharing);
  }, []);

  return (
    <footer className="w-full px-8 py-12 flex flex-col items-center text-center text-[10px] text-white/30 uppercase tracking-[0.2em] mt-auto">
      
      {/* Container de Ícones - Aumentei o destaque aqui */}
      <div className="flex gap-6 items-center mb-8">
        {/* Threads */}
        <a id="share-threads" href="#" target="_blank" rel="noopener noreferrer" title="Threads" className="block w-5 h-5 text-white/50 hover:text-white transition-all duration-300 hover:scale-110">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        </a>

        {/* Email */}
        <a id="share-email" href="#" title="E-mail" className="block w-5 h-5 text-white/50 hover:text-white transition-all duration-300 hover:scale-110">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>

        {/* Clipboard */}
        <div id="share-copy" title="Copiar Link" className="relative cursor-pointer w-5 h-5 text-white/50 hover:text-white transition-all duration-300 hover:scale-110">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span id="copy-feedback" className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[7px] px-2 py-1 rounded opacity-0 transition-opacity duration-300 pointer-events-none lowercase tracking-normal">copiado</span>
        </div>
      </div>

      <p className="max-w-xs">Pitore &copy; {new Date().getFullYear()} por Din está licenciado sob CC BY 4.0</p>
    </footer>
  );
}
