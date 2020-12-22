export default {
  baseUrl: "",
  _query: "",

  get query() {
    return this._query;
  },
  set query(value) {
    return (this._query = value);
  },

  showWeather(data, div) {
    div.classList.remove("loading");

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
    div.insertAdjacentHTML("afterbegin", x);
    // console.log(div);
    return div;
  },

  async getFetch(div, input) {
    this.reset(div, input);
    const key = "0a61bb2f5eb2f37828fb583ecf641a01";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this._query}&appid=${key}`;
    let response = await fetch(url);
    // console.log(response);

    let result = await response.json();
    // console.log(result);
    this.showWeather(result, div)
  },

  reset(div, input) {
    return (div.innerHTML = ""), (input.value = "");
  },
};
