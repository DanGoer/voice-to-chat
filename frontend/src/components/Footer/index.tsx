//footer for landing page
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Über uns</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eleifend, odio at commodo fermentum, dolor magna gravida urna, ac
              consectetur risus sapien nec est.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Startseite</a>
              </li>
              <li>
                <a href="#">Über uns</a>
              </li>
              <li>
                <a href="#">Dienstleistungen</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Kontakt</h5>
            <p>Adresse: 123 Musterstraße, Musterstadt</p>
            <p>E-Mail: devgoergens@gmail.com</p>
            <div className="social-icons">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2024 D. Goergens</p>
      </div>
    </footer>
  );
}

export default Footer;
