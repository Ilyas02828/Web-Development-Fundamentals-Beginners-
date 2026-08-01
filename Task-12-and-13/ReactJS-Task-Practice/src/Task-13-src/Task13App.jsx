import { useState } from "react";
import "./Task13App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";

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

  return (
    <>
      <div className={darkMode ? "dark" : "theme-btn"}>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <section class="pricing">
          <Cart title="Free" price="0" storage="500 MB" functionality="Email" />

          <Cart title="Basic" price="10" storage="1 GB" functionality="Email" />

          <Cart
            title="Pro"
            price="20"
            storage="10 GB"
            functionality="Priority"
          />

          <Cart
            title="Enterprise"
            price="50"
            storage="Unlimited"
            functionality="24/7"
          />
        </section>

        <section className="contact">
          <h2>Contact Us</h2>

          <Form
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            nameError={nameError}
            setNameError={setNameError}
            emailError={emailError}
            setEmailError={setEmailError}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
          />
        </section>
      </div>
    </>
  );
}

export default App;
