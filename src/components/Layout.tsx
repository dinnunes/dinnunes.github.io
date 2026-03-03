import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';

export default function Layout() {
  return (
    /* Trocamos bg-black por bg-[#111111] para recuperar a cor original */
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

<footer className="px-8 mt-40 pb-12 border-t border-white/10"> {/* Linha mais visível */}
  <div className="max-w-7xl mx-auto w-full">
    <div className="py-12">
      <Breadcrumbs /> 
    </div>
    
    {/* Aumentamos a opacidade do texto para white/40 e a linha para white/10 */}
    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
      <p>Pitore © {new Date().getFullYear()} por Din — CC BY 4.0</p>
      <p className="font-light italic opacity-80">Enigma Sublime</p>
    </div>
  </div>
</footer>
    </div>
  );
}
