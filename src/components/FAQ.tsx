import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      pergunta: "O que é um Liivro?",
      resposta: "Um Liivro é um novo conceito \"surpresa\", que só vai ser revelado em um futuro próximo. Hoje, o que eu posso te dizer é: Pense que é um livro, ou ebook."
    },
    {
      pergunta: "O produto é para todas as idades?",
      resposta: "Não exatamente. Os liivros foram pensados principalmente para os brasilianos entre 16 e 45 anos."
    },
    {
      pergunta: "Quanto tempo leva para ler um liivro?",
      resposta: "Os liivros possuem uma leitura direta, envolvente e pitoresca. A maioria das pessoas consegue ler um liivro em poucos momentos curtos, sem pressa."
    },
    {
      pergunta: "Preciso comprar todos os liivros?",
      resposta: "Cada liivro é independente. Você pode começar pelo tema que mais faz sentido para o seu momento de vida — amor, saúde, dinheiro, filosofia, entretenimento, estilo ou língua."
    },
    {
      pergunta: "Os liivros são teóricos ou práticos?",
      resposta: "Os liivros combinam reflexão e aplicação. A proposta é simples: ideias que fazem pensar, mas também ajudam você a enxergar a vida com mais clareza no dia a dia."
    },
    {
      pergunta: "Em quais dispositivos posso ler meu liivro?",
      resposta: "Design responsivo. Nossos liivros são otimizados para qualquer tela, sim, do celular ao e-reader, garantindo uma leitura fluida em qualquer lugar."
    },
    {
      pergunta: "Como recebo o produto após a compra?",
      resposta: "O acesso é imediato. Após a compra confirmada, enviamos o link de acesso para o seu e-mail via Kiwify. Uma compra super segura."
    },
    {
      pergunta: "O liivro é meu para sempre?",
      resposta: "Sim. Após a compra, o liivro passa a fazer parte da sua biblioteca digital de forma permanente — e, esperamos, também da sua mente."
    },
    {
      pergunta: "E se o conteúdo não for o que eu esperava?",
      resposta: (
        <>
          Sem problemas. Você pode solicitar reembolso em até 7 dias, conforme a garantia na Kiwify.<br/><br/>
          Uma dica: Experimente ler um liivro da <a href="https://dinnunes.github.io/#/butique" className="underline decoration-white/30 hover:decoration-white transition-colors">butique</a> a cada três meses. Pequenas reflexões ao longo do tempo podem gerar grandes transformações!
        </>
      ),
      respostaTextoParaSEO: "Sem problemas. Você pode solicitar reembolso em até 7 dias, conforme a garantia na Kiwify. Uma dica: Experimente ler um liivro da butique a cada três meses. Pequenas reflexões ao longo do tempo podem gerar grandes transformações!"
    },
    {
      pergunta: "Gostei da ideia.",
      resposta: (
        <>
          Que bom que você gostou! Se tiver outra dúvida, envia no meu <a href="https://ig.me/m/noitepi" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:decoration-white transition-colors">direct</a>.
        </>
      ),
      respostaTextoParaSEO: "Que bom que você gostou! Se tiver outra dúvida, envia no meu direct."
    }
  ];

  // Gerador do Schema Markup (JSON-LD) para o Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respostaTextoParaSEO || faq.resposta
      }
    }))
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-20 mb-10 px-6">
      {/* Script Invisível para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8 text-center">
        Perguntas Frequentes
      </h2>

      <div className="flex flex-col border-t border-white/10">
        {faqs.map((faq, index) => (
          <details key={index} className="group border-b border-white/10 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex justify-between items-center cursor-pointer list-none py-6 text-white/80 hover:text-white transition-colors">
              <span className="font-light pr-4">{faq.pergunta}</span>
              <span className="text-white/40 group-open:rotate-45 transition-transform duration-300 text-xl font-light">
                +
              </span>
            </summary>
            <div className="text-white/50 font-light text-sm pb-6 leading-relaxed opacity-0 group-open:opacity-100 transition-opacity duration-500">
              {faq.resposta}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
