import PricingCart from "./PricingCart";

function PricingSection() {
  return (
    <>
      <section id="pricing" className="bg-light py-3">
        <div className="container">
          <h2 className="text-center mb-3"> Pricing </h2>

          <div className="row justify-content-center g-4">
            <PricingCart name={"Starter"} price={5} />
            <PricingCart name={"Pro"} price={15} />
            <PricingCart name={"Pro Max"} price={25} />
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSection;
