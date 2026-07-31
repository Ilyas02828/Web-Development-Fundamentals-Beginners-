import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleNameChange(e) {
    const value = e.target.value;

    setName(value);

    if (value.trim() === "") {
      setNameError("Name is required");
    } else if (value.length < 3) {
      setNameError("Name must be at least 3 characters");
    } else {
      setNameError("");
    }
  }

  function handleEmailChange(e) {
    const value = e.target.value;

    setEmail(value);

    if (value.trim() === "") {
      setEmailError("Email is required");
    } else if (!value.includes("@")) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (nameError || emailError) {
      return;
    }
    alert("Form Submitted Successfully!");

    setName("");
    setEmail("");

    setNameError("");
    setEmailError("");
  }

  return (
    <>
      <div className={darkMode ? "dark" : "theme-btn"}>
        <header>
          <div className="header-left">
            <h2 className="logo">Logo</h2>

            <button
              id="menu-btn"
              className="menu-btn"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              ☰
            </button>

            <nav className={menuOpen ? "nav-bar active" : "nav-bar"}>
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
            className={darkMode ? "dark" : "theme-btn"}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </header>

        <section class="pricing">
          <div class="card">
            <h2>Free</h2>
            <h3>$0/mo</h3>
            <p>500 MB Storage</p>
            <p>Email Support</p>
            <button>Choose Plan</button>
          </div>

          <div class="card">
            <h2>Basic</h2>
            <h3>$10/mo</h3>
            <p>1 GB Storage</p>
            <p>Email Support</p>
            <button>Choose Plan</button>
          </div>

          <div class="card">
            <h2>Pro</h2>
            <h3>$20/mo</h3>
            <p>10 GB Storage</p>
            <p>Priority Support</p>
            <button>Choose Plan</button>
          </div>

          <div class="card">
            <h2>Enterprise</h2>
            <h3>$50/mo</h3>
            <p>Unlimited Storage</p>
            <p>24/7 Support</p>
            <button>Choose Plan</button>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleNameChange}
            />

            {nameError && <p className="error">{nameError}</p>}

            <input
              type="email"
              className="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />

            {emailError && <p className="error">{emailError}</p>}

            <button
              type="submit"
              disabled={nameError || emailError || !name || !email}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
