function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            SaaS Product
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link link-color" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link link-color" href="#features">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link link-color" href="#pricing">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link link-color" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
