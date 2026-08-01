function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();

    if (props.nameError || props.emailError) return;
    alert("Form Submitted Successfully!");

    props.setName("");
    props.setEmail("");

    props.setNameError("");
    props.setEmailError("");
  }

  return (
    <form className="contact-form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        className="name"
        placeholder="Enter Name"
        value={props.name}
        onChange={props.handleNameChange}
      />

      {props.nameError && <p className="error">{props.nameError}</p>}

      <input
        type="email"
        className="email"
        placeholder="Enter Email"
        value={props.email}
        onChange={props.handleEmailChange}
      />

      {props.emailError && <p className="error">{props.emailError}</p>}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
