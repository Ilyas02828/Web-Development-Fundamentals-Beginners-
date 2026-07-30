import FeatureCart from "./FeatureCart";

function FeatureSection() {
  return (
    <>
      <section className="py-4" id="features">
        <div className="container">
          <h2 className="text-center mb-3">Features</h2>

          <div className="row g-4">
            <FeatureCart
              type={"Fast"}
              description={"Lightning fast performance with cloud hosting."}
            />

            <FeatureCart
              type={"Secure"}
              description={"Enterprise-grade security for your business."}
            />

            <FeatureCart
              type={"Easy to Use"}
              description={"Clean dashboard with intuitive design."}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
