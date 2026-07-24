const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const button = document.getElementById("btn");

const jokeURL = "https://official-joke-api.appspot.com/random_joke";

async function getRandomJoke() {
  try {
    setup.textContent = "Loading...";
    punchline.textContent = "";

    const response = await fetch(jokeURL);
    if (!response.ok) {
      throw new Error("Failed to fetch joke.");
    }

    const data = await response.json();

    console.log(data);

    setup.textContent = data.setup;
    punchline.textContent = data.punchline;
  } catch (error) {
    setup.textContent = "Something went wrong!";
    punchline.textContent = error.message;
  }
}

button.addEventListener("click", getRandomJoke);
