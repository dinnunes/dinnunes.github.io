import ProductTemplate from '../../components/ProductTemplate';
import FAQ from '../../components/FAQ';

export default function PiSofia() {
  return (
    <>
      <ProductTemplate 
        category="Liivro" 
        name="PiSofia"
        image="/pisofia.jpg"
        description="Você é o autor da sua história? Onde termina a sua natureza e começa a sua máscara? PiSofia." 
        price="R$ 8" 
        link="https://pay.kiwify.com.br/CqPNhIl" 
      />
      <div className="pb-20">
        <FAQ />
      </div>
    </>
  );
}
