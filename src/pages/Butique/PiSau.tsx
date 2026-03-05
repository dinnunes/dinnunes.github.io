import ProductTemplate from '../../components/ProductTemplate';
import FAQ from '../../components/FAQ';

export default function PiSau() {
  return (
    <>
      <ProductTemplate 
        category="Liivro" 
        name="PiSau"
        image="/pisau.jpg"
        description="Existe um estado de existência que você ainda não acessou. Uma harmonia que se encontra no PiSau." 
        price="R$ 108" 
        link="https://pay.kiwify.com.br/giILQS6" 
      />
      <div className="pb-20">
        <FAQ />
      </div>
    </>
  );
}
