import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-8 flex justify-between items-center z-50">
      <Link to="/" className="text-xl font-medium tracking-[0.2em] uppercase">
        ▭
      </Link>
      <div className="flex gap-8 text-xs uppercase tracking-[0.15em] text-white/60">
        <Link to="/butique" className="hover:text-white transition-colors duration-300">
          Butique
        </Link>
        <Link to="/sobre" className="hover:text-white transition-colors duration-300">
          Sobre
        </Link>
      </div>
    </nav>
  );
}
