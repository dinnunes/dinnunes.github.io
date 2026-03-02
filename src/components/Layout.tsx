import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs'; // Importe aqui
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="px-8 py-12 border-t border-white/5">
        {/* As Breadcrumbs aparecem aqui, estilo Apple */}
        <Breadcrumbs /> 
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>Pitore © 2026 por Din — CC BY 4.0</p>
          <p>Enigma Sublime</p>
        </div>
      </footer>
    </div>
  );
}
