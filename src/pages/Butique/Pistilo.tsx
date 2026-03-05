import ProductTemplate from '../../components/ProductTemplate';
import FAQ from '../../components/FAQ';

export default function Pistilo() {
  return (
    <>
      <ProductTemplate 
        category="Liivro" 
        name="Pistilo"
        image="/pistilo.jpg"
        description="O estilo é o que resta quando a moda passa. É a sua primeira palavra. Dita antes mesmo de você abrir a boca. Pistilo." 
        price="R$ 78" 
        link="https://pay.kiwify.com.br/qh7pDSq" 
      />
      <div className="pb-20">
        <FAQ />
      </div>
    </>
  );
}
