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
let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let WeekDay = document.querySelector("#weekDay");
weekDay.innerHTML = `${day}`;
fullDate.innerHTML = `${date}/${month}, ${hours}:${minutes}`;

// present the searched city

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let showCity = document.querySelector("#search-button");
showCity.addEventListener("click", searchCity);

// current temperature

let apiKey = "c719d1f8f1ff494c66ad9db9e28a5999";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Albufeira&appid=${apiKey}&units=metric`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let weatherElement = document.querySelector("#condition");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
}

axios.get(apiUrl).then(displayTemperature);
