import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const routeLabels: { [key: string]: string } = {
    butique: 'Butique',
    sobre: 'Sobre',
    loja: 'Loja',
    mim: 'Mim',
    etica: 'Ética',
    marca: 'Marca',
    diario: 'Diário',
    juridico: 'Jurídico',
    contato: 'Contato',
    piteni: 'PiTeni',
    pidin: 'PiDin',
    pisau: 'PiSau',
    pisofia: 'PiSofia',
    pilin: 'PiLin',
    pistilo: 'Pistilo',
    pimor: 'PiMor',
  };

  return (
    <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/20 py-8 mb-4">
      <Link to="/" className="hover:text-white transition-colors">▭</Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label = routeLabels[name.toLowerCase()] || name;

        return (
          <span key={name} className="flex items-center gap-2">
            <span className="text-white/10">›</span>
            {isLast ? (
              <span className="text-white/40">{label}</span>
            ) : (
              <Link to={routeTo} className="hover:text-white transition-colors">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
