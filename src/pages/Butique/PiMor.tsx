import ProductTemplate from '../../components/ProductTemplate';
import FAQ from '../../components/FAQ';

export default function PiMor() {
  return (
    <>
      <ProductTemplate 
        category="Liivro" 
        name="PiMor"
        image="/pimor.jpg"
        description="A maioria das pessoas toca apenas a pele. Poucas têm a chave para tocar a alma. PiMor." 
        price="R$ 98" 
        link="https://pay.kiwify.com.br/yfcSxNI" 
      />
      <div className="pb-20">
        <FAQ />
      </div>
    </>
  );
}
