export default async function getWeather(userInput) {
  if (!userInput) {
    alert("Please enter a City");
    return;
  }
  const url = `https://wttr.in/${userInput}?format=j1`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch weather.");

  const data = await response.json();

  return data.current_condition[0];
}
