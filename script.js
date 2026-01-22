const apiKey = "b03eb6d67f8d826ee1603f520d830023";

// Weather
function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("weather").innerHTML = "City not found";
        return;
      }

      document.getElementById("weather").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h1>${data.main.temp}°C</h1>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;

      setWeatherBackground(data.weather[0].main);
      getForecast(city);
    });
}

function getForecast(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      const daily = data.list.filter(i => i.dt_txt.includes("12:00:00"));
      let html = `<h3>5-Day Forecast</h3><div class="forecast-container">`;

      daily.slice(0,5).forEach(day => {
        html += `
          <div class="day-card">
            <strong>${new Date(day.dt_txt).toDateString().slice(0,3)}</strong>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
            <div>${day.main.temp.toFixed(1)}°C</div>
          </div>`;
      });

      html += `</div>`;
      document.getElementById("forecast").innerHTML = html;
    });
}

// Background change
function setWeatherBackground(condition) {
  document.body.className = "";
  if (condition.includes("Clear")) document.body.classList.add("clear");
  else if (condition.includes("Cloud")) document.body.classList.add("clouds");
  else if (condition.includes("Rain")) document.body.classList.add("rain");
  else if (condition.includes("Snow")) document.body.classList.add("snow");
  else document.body.classList.add("default");
}

// ⭐ GitHub Stars
fetch("https://api.github.com/repos/Sujal-Sonii/Weather-Dashboard")
  .then(res => res.json())
  .then(data => {
    document.getElementById("starCount").textContent = `⭐ ${data.stargazers_count}`;
  });
