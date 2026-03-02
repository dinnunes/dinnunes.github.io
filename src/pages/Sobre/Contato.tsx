import PageTemplate from '../../components/PageTemplate';

export default function Contato() {
  return (
    <PageTemplate title="Contato">
      <p>
        Estamos sempre à disposição para ouvir você. Se tiver alguma dúvida, sugestão ou simplesmente quiser dizer olá, entre em contato conosco.
      </p>
      <div className="mt-12">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Email</p>
        <a href="mailto:contato@pitore.com" className="text-xl font-light hover:text-white/70 transition-colors">contato@pitore.com</a>
      </div>
      <div className="mt-8">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Telefone</p>
        <p className="text-xl font-light">+55 11 99999-9999</p>
      </div>
    </PageTemplate>
  );
}
