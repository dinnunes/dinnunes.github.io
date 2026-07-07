import { motion } from 'motion/react';
import { useEffect } from 'react';

// Organizei os seus dados aqui para o código ficar limpo!
const categorias = [
  {
    titulo: 'Entretenimento',
    cor: '#FE1818',
    itens: [
      { nome: 'Apple TV', desc: 'O Apple TV é um dos serviços da Apple. É revigorante assistir filmes e séries do streaming. Um potencial enorme.', link: 'https://www.apple.com/br/apple-tv/' },
      { nome: 'HBO Max', desc: 'O HBO Max é simplesmente o lugar onde você encontra grandes histórias para assistir, obras de arte.', link: 'https://www.hbomax.com/br/pt' },
      { nome: 'Steam', desc: 'O Steam é o definitivo para jogar jogos. Seja o protagonista e assuma o controle.', link: 'https://store.steampowered.com' },
    ]
  },
  {
    titulo: 'Dinheiro',
    cor: '#18FF19',
    itens: [
      { nome: 'FNO', desc: 'Uma época muito boa para ter negócios. Com o FNO você pode aprender a ganhar dinheiro online.', link: 'https://hotm.io/fnn' },
      { nome: 'Inter', desc: 'No Inter, eu e você ganhamos pontos Loop se você abrir uma conta com esse meu código de indicação: 332E1384', link: 'https://inter.co' },
    ]
  },
  {
    titulo: 'Saúde',
    cor: '#1889FF',
    itens: [
      { nome: 'Netshoes', desc: 'Está na hora de comprar a camisa do seu time, principalmente a da seleção brasiliana. Bem-vindo a Netshoes.', link: 'https://tiddly.xyz/hhuKy' },
      { nome: 'Olympikus', desc: 'As vezes tudo o que você precisa é de uma boa roupa para treinar. Tenha a qualidade que seus exercícios pedem, meu chinelo que o diga.', link: 'https://tidd.ly/4s39DPK' },
    ]
  },
  {
    titulo: 'Filosofia',
    cor: '#FF7218',
    itens: [
      { nome: 'NordVPN', desc: 'Escolher usar uma VPN para ter mais privacidade é uma filosofia. Te apresento a NordVPN.', link: 'https://nordvpn.com/pt-br/' },
      { nome: 'Kindle', desc: 'Os livros ficaram mais baratos e acessíveis com o Kindle Unlimited. Muitas jornadas começam apenas com um livro.', link: 'https://link.amazon/A04baOg5b' },
      { nome: 'Mercado Livre', desc: 'Temos aqui um ótimo lugar para fazer compras digitais. No Mercado Livre também encontramos livros!', link: 'https://dub.sh/piml' },
    ]
  },
  {
    titulo: 'Língua',
    cor: '#FEEF18',
    itens: [
      { nome: 'YouTube', desc: 'No YouTube você pode descobrir muitas coisas úteis. O canal da Lívia Lobo tem um vídeo sobre língua tão simples que eu amei.', link: 'https://youtu.be/T0iej6lGgJM?si=ra_38L1pzbVQJlkD' },
    ]
  },
  {
    titulo: 'Estilo',
    cor: '#ae18fe',
    itens: [
      { nome: 'Renner', desc: 'No Brasil, as roupas são importantes e valorizadas. A Renner te deixa estiloso.', link: 'https://www.lojasrenner.com.br/' },
      { nome: 'Vivara', desc: 'As joias são que nem os calçados, elas elevam o visual; a Vivara pode provar.', link: 'https://tidd.ly/49eulEO' },
      { nome: 'Beleza na Web', desc: 'A beleza não é só na web, é em você. Opções para todos os gêneros.', link: 'https://www.belezanaweb.com.br/' },
      { nome: 'Camicado', desc: 'Na Camicado, você encontra qualidade e praticidade. O seu lar, o seu estilo.', link: 'https://tidd.ly/4s1ihhB' },
    ]
  },
  {
    titulo: 'Amor',
    cor: '#FF189C',
    itens: [
      { nome: 'Pantynova', desc: 'Uma marca de bem-estar sexual interessante, seja esperta. Na Pantynova você tem privacidade.', link: 'https://www.pantynova.com/' },
    ]
  }
];

export default function Loja() {
  useEffect(() => {
    document.title = "Loja | Pitore";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="px-8 py-20 max-w-4xl mx-auto w-full"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">Loja</h1>
        <p className="text-white/50 font-light text-lg">Alguns dos nossos parceiros.</p>
      </motion.div>

      <div className="space-y-20">
        {categorias.map((categoria, catIdx) => (
          <motion.section 
            key={categoria.titulo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 + catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Título da Categoria com a cor específica */}
            <h2 
              className="text-[10px] uppercase tracking-[0.3em] mb-6 border-b border-white/10 pb-3 inline-block"
              style={{ color: categoria.cor }}
            >
              {categoria.titulo}
            </h2>

            <div className="flex flex-col">
              {categoria.itens.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="group flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/5 gap-6 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-light text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                      {item.nome}
                    </h3>
                    <p className="text-white/50 font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 whitespace-nowrap self-start sm:self-center"
                  >
                    Acessar &rsaquo;
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
