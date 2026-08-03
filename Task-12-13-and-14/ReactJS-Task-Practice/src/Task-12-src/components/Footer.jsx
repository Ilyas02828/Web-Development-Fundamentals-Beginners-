function Footer() {
  return (
    <>
      <footer id="contact" className="bg-dark text-white py-3">
        <div className="container text-center">
          <h4 className="fw-bold mb-4">Follow Us</h4>

          <div className="d-flex justify-content-center flex-wrap gap-4">
            <a href="#" className="text-white text-decoration-none">
              YouTube
            </a>
            <a href="#" className="text-white text-decoration-none">
              Instagram
            </a>
            <a href="#" className="text-white text-decoration-none">
              LinkedIn
            </a>
            <a href="#" className="text-white text-decoration-none">
              Twitter
            </a>
            <a href="#" className="text-white text-decoration-none">
              Facebook
            </a>
          </div>

          <hr className="border-secondary my-4" />

          <p className="mb-0 text-secondary">
            © 2026 SAAS Landing Page. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
