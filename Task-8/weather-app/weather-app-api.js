const cityInput = document.getElementById("city");
const cityLocation = document.getElementById("location");
const cityTemperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");

const button = document.getElementById("btn");

async function getWeather() {
  const cityInputValue = cityInput.value.trim();
  if (!cityInputValue) {
    alert("Please enter a City");
    return;
  }

  const url = `https://wttr.in/${cityInputValue}?format=j1`;

  try {
    cityLocation.textContent = "Loading...";

    cityTemperature.textContent = "";
    condition.textContent = "";
    humidity.textContent = "";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch weather.");
    }

    const data = await response.json();

    const weather = data.current_condition[0];

    cityLocation.textContent = cityInputValue;
    cityTemperature.textContent = `Temperature: ${weather.temp_C} °C`;
    condition.textContent = `Condition: ${weather.weatherDesc[0].value}`;
    humidity.textContent = `Humidity: ${weather.humidity}%`;
  } catch (error) {
    cityLocation.textContent = "Something went wrong.";

    cityTemperature.textContent = "";
    condition.textContent = "";
    humidity.textContent = "";

    console.log(error);
  }
}

button.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeather();
  }
});
