import axios from "axios";
import refs from './refs.js'
const {weatherWrapper, input} = refs
console.log(input);

input.addEventListener("change", (e) => {
  console.log(e.target.value);
  getWeather(e.target.value)
});

// const key = "0a61bb2f5eb2f37828fb583ecf641a01";
// let city = "";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

// console.log(weatherWrapper);

function getWeather(city) {
  const key = "0a61bb2f5eb2f37828fb583ecf641a01";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  input.value = "";
  weatherWrapper.innerHTML = "";

  return axios
    .get(url)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .then((data) => {
      console.log(data);
      weatherWrapper.classList.remove("loading");
      let x = `
  <h2 class="city">${data.name}</h2>
  <h1 class="temp">${Math.round(data.main.temp - 273.15)}°C</h1>
  <div class="flex">
    <img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }.png" alt="" class="icon" />
    <div class="description">${data.weather[0].description}</div>
  </div>
  <div class="humidity">Humidity:${data.main.humidity}%</div>
  <div class="wind">Wind speed:${data.wind.speed} km/h</div>
`;
      weatherWrapper.insertAdjacentHTML("afterbegin", x);
      console.log(weatherWrapper);
      return weatherWrapper;
    });

}



