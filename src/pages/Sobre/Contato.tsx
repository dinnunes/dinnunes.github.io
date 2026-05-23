import PageTemplate from '../../components/PageTemplate';

export default function Contato() {
  return (
    <PageTemplate title="Contato">
      <p>
        Se tiver qualquer dúvida, sugestão ou simplesmente quiser dizer olá, entre em contato.
      </p>
      <div className="mt-12">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Email</p>
        <a href="mailto:dinnuness@gmail.com" className="text-xl font-light hover:text-white/70 transition-colors">dinnuness@gmail.com</a>
      </div>
      <div className="mt-8">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Instagram</p>
        <a href="https://ig.me/m/noitepi" className="text-xl font-light hover:text-white/70 transition-colors">@noitepi</a>
      </div>
    </PageTemplate>
  );
}
