import ProductTemplate from '../../components/ProductTemplate';
import FAQ from '../../components/FAQ';

export default function PiLin() {
  return (
    <>
      <ProductTemplate 
        category="Liivro" 
        name="PiLin"
        image="/pilin.jpg"
        description="Estudar é um esforço consciente e cansativo. Adquirir é um processo invisível e inevitável. O PiLin não é sobre gramática, regras ou decoreba." 
        price="R$ 88" 
        link="https://pay.kiwify.com.br/9poKbxG" 
      />
      <div className="pb-20">
        <FAQ />
      </div>
    </>
  );
}
