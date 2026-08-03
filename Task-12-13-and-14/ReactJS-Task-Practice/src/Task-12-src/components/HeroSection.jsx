import heroSectionImage from "../assets/images/hero-section-image.jpg";
import HeroTextSection from "./HeroTextSection";

function HeroSection() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center mt-3 mb-3">
            <HeroTextSection />

            <div className="col-lg-6 text-center mt-3">
              <img
                src={heroSectionImage}
                className="img-fluid rounded"
                alt="Hero Section Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
