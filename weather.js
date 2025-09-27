// all html items
let city = document.querySelector(".city");
let btn = document.querySelector(".get-weather");
let weatherIcon = document.querySelector(".weather-icon");
let loc = document.querySelector(".location");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind-speed");

// core fetch function
function fetchWeather() {
  let input = city.value.trim();

  if (input === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "ed4146785e6b49daa24161520240609";

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Problem with API request");
      }
      return res.json();
    })
    .then((data) => {
      // Update UI
      loc.innerText = `${data.location.name}, ${data.location.country}`;
      weatherIcon.src = data.current.condition.icon;
      temperature.innerText = `${data.current.feelslike_c}°C`;
      humidity.innerText = `Humidity: ${data.current.humidity}%`;
      wind.innerText = `Wind: ${data.current.wind_kph} kph`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });

  city.value = "";
}

// Button click
btn.addEventListener("click", fetchWeather);

// Enter key
city.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    fetchWeather();
  }
});
