// give the current date

let now = new Date();
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getMinutes());
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

let WeekDay = document.querySelector("#weekDay");
weekDay.innerHTML = `${day}`;
fullDate.innerHTML = `${date}/${month}, ${hours}:${minutes}`;

//show Forecast

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];

  forecastElement.innerHTML = `
  <div class="col-sm-2" class="col-xs-4">
  <h4>${formatHours(forecast.dt * 1000)}</h4>
  <img class ="forecast-image" src="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"/>
  <p><strong>${Math.round(forecast.main.temp_max)}º</strong> / ${Math.round(
    forecast.main.temp_min
  )}º</p>`;

  forecast = response.data.list[1];

  forecastElement.innerHTML += `
  <div class="col-sm-2" class="col-xs-4">
  <h4>${formatHours(forecast.dt * 1000)}</h4>
  <img class ="forecast-image" src="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"/>
  <p><strong>${Math.round(forecast.main.temp_max)}º</strong> / ${Math.round(
    forecast.main.temp_min
  )}º</p>`;

  forecast = response.data.list[2];

  forecastElement.innerHTML += `
  <div class="col-sm-2" class="col-xs-4">
  <h4>${formatHours(forecast.dt * 1000)}</h4>
  <img class ="forecast-image" src="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"/>
  <p><strong>${Math.round(forecast.main.temp_max)}º</strong> / ${Math.round(
    forecast.main.temp_min
  )}º</p>`;

  forecast = response.data.list[3];

  forecastElement.innerHTML += `
  <div class="col-sm-2" class="col-xs-4">
  <h4>${formatHours(forecast.dt * 1000)}</h4>
  <img class ="forecast-image" src="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"/>
  <p><strong>${Math.round(forecast.main.temp_max)}º</strong> / ${Math.round(
    forecast.main.temp_min
  )}º</p>`;

  forecast = response.data.list[4];

  forecastElement.innerHTML += `
  <div class="col-sm-2" class="col-xs-4">
  <h4>${formatHours(forecast.dt * 1000)}</h4>
  <img class ="forecast-image" src="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"/>
  <p><strong>${Math.round(forecast.main.temp_max)}º</strong> / ${Math.round(
    forecast.main.temp_min
  )}º</p>`;

  forecast = response.data.list[5];

  forecastElement.innerHTML += `
  <div class="col-sm-2" class="col-xs-4">
  <h4>${formatHours(forecast.dt * 1000)}</h4>
  <img class ="forecast-image" src="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"/>
  <p><strong>${Math.round(forecast.main.temp_max)}º</strong> / ${Math.round(
    forecast.main.temp_min
  )}º</p>`;
}

// present the searched city

function search(city) {
  let apiKey = "c719d1f8f1ff494c66ad9db9e28a5999";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  search(cityInput.value);
}

let showCity = document.querySelector("#search-button");
showCity.addEventListener("click", searchCity);

// current location

function getCurrentLocation() {
  let currentLatitude;
  let currentLongitude;
  navigator.geolocation.getCurrentPosition((position) => {
    currentLatitude = position.coords.latitude;
    currentLongitude = position.coords.longitude;
  });
  return new Promise((resolve) => {
    setInterval(() => {
      if (currentLongitude && currentLatitude) {
        resolve({ longitude: currentLongitude, latitude: currentLatitude });
      }
    }, 500);
  });
}

async function searchCurrentLocation() {
  const { longitude, latitude } = await getCurrentLocation();

  let apiKey = "c719d1f8f1ff494c66ad9db9e28a5999";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

let currentButton = document.querySelector("#current-position");
currentButton.addEventListener("click", () => searchCurrentLocation());

// current data

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let weatherElement = document.querySelector("#condition");
  let maxTempElement = document.querySelector("#max-temp");
  let minTempElement = document.querySelector("#min-temp");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon-present-day");
  celsiusTemp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = celsiusTemp;
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
  maxTempElement.innerHTML = Math.round(response.data.main.temp_max);
  minTempElement.innerHTML = Math.round(response.data.main.temp_min);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  celsiusTemp = Math.round(response.data.main.temp);
}
// conversion to fahrenheit

let celsiusTemp = null;

function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahTemperature = (celsiusTemp * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

// conversion to celsius

function showCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = celsiusTemp;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

search("Lisbon");
