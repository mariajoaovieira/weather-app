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

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let showCity = document.querySelector("#search-button");
showCity.addEventListener("click", searchCity);

function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitElement = document.querySelector("#fahrenheit-link");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = "66";
}

function showCelsius(event) {
  event.preventDefault();
  let celsiusElement = document.querySelector("#celsius-link");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = "19";
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFahrenheit);
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", showCelsius);
