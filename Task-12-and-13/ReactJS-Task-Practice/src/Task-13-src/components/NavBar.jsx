function NavBar(props) {
  return (
    <header>
      <div className="header-left">
        <h2 className="logo">Logo</h2>

        <button
          id="menu-btn"
          className="menu-btn"
          onClick={() => {
            props.setMenuOpen(!props.menuOpen);
          }}
        >
          ☰
        </button>

        <nav className={props.menuOpen ? "nav-bar active" : "nav-bar"}>
          <a href="#">HTML</a>
          <a href="#">CSS</a>
          <a href="#">JavaScript</a>
          <a href="#">SQL</a>
          <a href="#">Java</a>
          <a href="#">Python</a>
          <a href="#">C++</a>
        </nav>
      </div>

      <button
        id="theme-btn"
        className={props.darkMode ? "dark" : "theme-btn"}
        onClick={() => {
          props.setDarkMode(!props.darkMode);
        }}
      >
        {props.darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
}

export default NavBar;
