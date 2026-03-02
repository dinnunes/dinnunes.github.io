import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs'; // Certifique-se de que o arquivo Breadcrumbs.tsx existe

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="px-8 pt-24 pb-12 border-t border-white/5"> 
         <div className="max-w-7xl mx-auto w-full">
           {/* Breadcrumbs com mais espaço */}
           <Breadcrumbs /> 
    
           {/* Aumentamos o mt-12 para dar mais distância do breadcrumb para o texto final */}
           <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
             <p>Pitore © 2026 por Din — CC BY 4.0</p>
             <p className="font-light italic opacity-50">Enigma Sublime...</p>
           </div>
         </div>
       </footer>
    </div>
  );
}
