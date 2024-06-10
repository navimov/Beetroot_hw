import { setCookey, getCookey } from "./cookies.js";

const FORM = document.querySelector(".weather");
const API_KEY = "2018c9990419832059c8fc993f25823b";
const WEATHER_LIST = document.querySelector(".weather_list");
const CITY = "Rivne";
const LATITUDE = "50.61975398650493";
const LONGTITUDE = "26.251508921368444";

const isCashedReq = getCookey(CITY);
WEATHER_LIST.innerHTML = "";
if (isCashedReq) {
  let weatherFromStorage = JSON.parse(localStorage.getItem(CITY));
  displayWeather(weatherFromStorage);
} else {
  fetchWeather(LATITUDE, LONGTITUDE);
}

function fetchWeather(lat, lon) {
  const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
      setCookey(CITY, true);
      localStorage.setItem(CITY, JSON.stringify(data));
    })
    .catch((err) => console.error(err));
}

function displayWeather(data) {
  console.log(data);
  const TEMP = Math.round(data.list[0].main.temp);
  const HUMIDITY = Math.round(data.list[0].main.humidity);
  const PRESSURE = Math.round(data.list[0].main.pressure);
  const VISIBILITY = Math.round(data.list[0].visibility);
  const WIND = Math.round(data.list[0].wind.speed);

  let markup = `
    <li>
      <h2>Weather in Rivne, Ukraine</h2>
      <p>Temperature: ${TEMP}°C</p>
     <p>Humidity: ${HUMIDITY}%</p>
     <p>Pressure: ${PRESSURE} mm</p>
     <p>Visibility: ${VISIBILITY} m</p>
         <p>Wind speed: ${WIND} m/s</p>
    </li>
  `;

  WEATHER_LIST.innerHTML = markup;
}
