async function getRandomJoke() {
  const jokeURL = "https://official-joke-api.appspot.com/random_joke";

  const response = await fetch(jokeURL);
  if (!response.ok) throw new Error("Failed to fetch joke.");

  return response.json();
}

export default getRandomJoke;
