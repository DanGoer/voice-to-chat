//hero image for landing page
import heroImage from "../../images/hero.jpg";
import "./HeroImage.modules.scss";

function HeroImage() {
  return (
    <section className="hero-section">
      <div
        className="text-center h-100"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-4">Willkommen zu YAIM!</h1>
              <p className="lead">
                Dies ist dein persönlicher Assistent für alles Mögliche!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
