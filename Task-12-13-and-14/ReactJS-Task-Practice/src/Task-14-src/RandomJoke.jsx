import { useEffect, useState } from "react";
import getRandomJoke from "./services/joke-api";

function RandomJoke() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  async function loadJoke() {
    const data = await getRandomJoke();

    setSetup(data.setup);
    setPunchline(data.punchline);
  }

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <>
      <title>Random Joke App Using ReactJS</title>

      <div className="container">
        <div className="card">
          <h2>Random Joke API</h2>
          <h5>Click the button to load a joke.</h5>

          <p className="joke">{setup}</p>
          <p className="joke">{punchline}</p>

          <button className="btn" onClick={loadJoke}>
            Get Joke
          </button>
        </div>
      </div>
    </>
  );
}

export default RandomJoke;
