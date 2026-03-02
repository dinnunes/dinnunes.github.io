import PageTemplate from '../../components/PageTemplate';

export default function Etica() {
  return (
    <PageTemplate title="Ética">
      <div className="max-w-3xl space-y-10 mb-20">
        <p className="text-white/60 text-lg font-light leading-relaxed">
          Nossos valores não são estáticos; são o movimento que dá ordem ao nosso obrar. 
          Abaixo, os pilares que sustentam a essência da Pitore.
        </p>

        <div className="space-y-12">
          
          {/* Educação */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Educação</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Orientar a vaidade para os objetivos certos. O conhecimento como ferramenta de refinamento do ego.
            </p>
          </section>

          {/* Tempo */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Tempo</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Um recurso preciosíssimo. Gerir bem o tempo não é apenas produtividade, é investir em felicidade e presença.
            </p>
          </section>

          {/* Meio Ambiente */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Meio Ambiente</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Cuidando do nosso lar. Sustentabilidade, preservação e uma conexão profunda com o mundo que nos acolhe.
            </p>
          </section>

          {/* Sexy */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Sexy</h2>
            <p className="text-white/50 font-light leading-relaxed">
              A celebração da vida e do sexy de maneira sutil, elegante e intrinsecamente humano.
            </p>
          </section>

          {/* Acessibilidade */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Acessibilidade</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Somos todos diferentes e, por isso, iguais. Criamos experiências inclusivas onde todos podem habitar.
            </p>
          </section>

          {/* Arte */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Arte</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Derramando cores sobre o cinza. Transformamos visões abstratas em realidade tangível e estética.
            </p>
          </section>

          {/* Equidade */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Equidade</h2>
            <p className="text-white/50 font-light leading-relaxed">
              As devidas adequações para uma sociedade justa. Olhar para a necessidade do outro com precisão.
            </p>
          </section>

          {/* Luxo */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Luxo</h2>
            <p className="text-white/50 font-light leading-relaxed">
              A trindade do nosso padrão: Qualidade impecável, conforto absoluto e a exclusividade do que é único.
            </p>
          </section>

          {/* Privacidade */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Privacidade</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Requisito absoluto. Um direito fundamental e inegociável de cada criaturinha que interage conosco.
            </p>
          </section>

          {/* Diversidade */}
          <section>
            <hr className="border-white/10 mb-8" />
            <h2 className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4">Diversidade</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Cores, culturas, gêneros e talentos. Entendemos que cada trajetória compõe uma história única.
            </p>
            <hr className="border-white/10 mt-12" />
          </section>

        </div>
      </div>
    </PageTemplate>
  );
}
