import ProductTemplate from '../../components/ProductTemplate';
import FAQ from '../../components/FAQ'; // Importando o nosso novo componente

export default function PiTeni() {
  return (
    <>
      <ProductTemplate 
        category="Liivro" 
        name="PiTeni"
        image="/piteni.jpg"
        description="A maioria usa o entretenimento para fugir da realidade. O PiTeni é para quem quer expandi-la." 
        price="R$ 88" 
        link="https://pay.kiwify.com.br/LPKOeCU" 
      />
      
      {/* O FAQ vai aparecer logo abaixo da estrutura do produto */}
      <div className="pb-20">
        <FAQ />
      </div>
    </>
  );
}
