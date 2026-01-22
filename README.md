# 🌤️ Weather Dashboard – Real-Time Weather App

A clean and responsive **Weather Dashboard** built using **HTML, CSS, JavaScript**, and **OpenWeatherMap API**. This project displays real-time weather data for any searched city with animated weather icons and a beautiful UI.

---

## 📸 Preview - peppy-daifuku-bb1b29.netlify.app

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/fb85db59-c6d8-48ac-ae8e-c0ae8930ed2e" alt="Weather UI 1" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/8b3cef6f-4d3e-4c09-ada5-068a129ec58c" alt="Weather UI 2" width="100%"/></td>
  </tr>
</table>

---

## 🧠 Features

- 🔍 Search weather by city name  
- 🌡️ Real-time temperature, humidity, wind speed  
- 🌥️ Animated weather condition icons  
- 🕒 Local time display with dynamic timezone  
- 📌 Saves recent searches using Local Storage  
- 🚫 Error handling for wrong inputs or failed API  
- 📱 Fully responsive on all devices  

---

## 🚀 Tech Stack

| Tech             | Role                             |
|------------------|----------------------------------|
| HTML5, CSS3      | Structure & Styling              |
| JavaScript (ES6) | Logic & API Fetching             |
| OpenWeatherMap   | Real-time weather API            |
| Lottie Animations| Weather icons (via lottie.host)  |
| LocalStorage     | Save search history              |

---

## 🛠️ How It Works

1. User enters a city in the search bar.  
2. JavaScript fetches data from OpenWeatherMap API.  
3. JSON response is parsed and weather details are shown dynamically.  
4. Local time and Lottie icons are displayed based on the weather type.  
5. Previous search is saved in browser local storage.  

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/weather-dashboard.git

# Open the folder
cd weather-dashboard

# Launch index.html in your browser
