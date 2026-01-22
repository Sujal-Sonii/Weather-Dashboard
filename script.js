const apiKey = "b03eb6d67f8d826ee1603f520d830023";

const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");

const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const condition = document.getElementById("condition");
const icon = document.getElementById("icon");
const localTime = document.getElementById("local-time");

const searchHistory = document.getElementById("search-history");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim().toLowerCase();
  if (city !== "") {
    getWeather(city);
    saveToHistory(city);
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then((data) => {
      console.log("✅ Weather data:", data);

      const weatherMain = data.weather[0].main;
      const weatherDescription = data.weather[0].description;

      cityName.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = data.main.temp;
      humidity.textContent = data.main.humidity;
      windSpeed.textContent = data.wind.speed;
      condition.textContent = weatherDescription;
      updateBackground(weatherMain);

      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      icon.alt = weatherDescription;

      const timezoneOffset = data.timezone;
      const localDate = new Date(Date.now() + timezoneOffset * 1000);
      localTime.textContent = `Local Time: ${localDate.toUTCString().slice(17, 25)}`;

     

            weatherInfo.classList.remove("hidden");
    })
    .catch((err) => {
      console.error("❌ Fetch error:", err);
      alert("Error fetching weather: " + err.message);
    });
}

function saveToHistory(city) {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  if (!cities.includes(city)) {
    cities.unshift(city);
    if (cities.length > 5) cities.pop();
    localStorage.setItem("cities", JSON.stringify(cities));
  }
  renderHistory();
}

function renderHistory() {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  searchHistory.innerHTML = "";

  cities.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => {
      cityInput.value = city;
      getWeather(city);
    });
    searchHistory.appendChild(li);
  });
}

function updateBackground(condition) {
  const body = document.body;
  condition = condition.toLowerCase();

  if (condition.includes("clear")) {
    body.style.background = "linear-gradient(to right, #fceabb, #f8b500)";
  } else if (condition.includes("cloud")) {
    body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
  } else if (condition.includes("rain")) {
    body.style.background = "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)";
  } else if (condition.includes("thunder")) {
    body.style.background = "linear-gradient(to right, #141e30, #243b55)";
  } else if (condition.includes("snow")) {
    body.style.background = "linear-gradient(to right, #e0eafc, #cfdef3)";
  } else if (condition.includes("mist") || condition.includes("fog")) {
    body.style.background = "linear-gradient(to right, #d7d2cc, #304352)";
  } else {
    body.style.background = "linear-gradient(to right, #83a4d4, #b6fbff)";
  }
}

// Load history on startup
renderHistory();
