const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityInfo = document.querySelector(".city-info");
const cityWeather = document.querySelector(".weather-details");
const details= document.querySelector(".detail")
const umidityDiv= document.querySelector(".umidity");
const windDiv= document.querySelector(".wind");
const feelsDiv= document.querySelector(".feels");
const cityTemperature= document.querySelector(".temperature");

let cityName= document.getElementById("city-name");
let weatherDescription= document.getElementById("weather-description");
let temperature= document.getElementById("temperature");
let humidity= document.getElementById("humidity");
let windSpeed= document.getElementById("wind-speed");
let feelsLike= document.getElementById("feels-like");


const apiKey = "bd4b54e2cd361f225ec1cc3db59e923a";

function searchCity() {
  const cityValue = cityInput.value;
  console.log(cityValue);
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric&lang=pt_br`;

  fetch(api)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      cityInfo.innerHTML= `
     ${cityName= ` <h2 id="city-name">${data.name}</h2>`}
     ${weatherDescription=  `<p id="weather-description">${data.weather[0].description}</p>`}
      `
     cityTemperature.innerHTML= `
     ${temperature=  `<span id="temperature">${Math.round(data.main.temp)}°C</span>`}
     `
     umidityDiv.innerHTML= `
     <h3>💧 Umidade</h3>
     ${humidity= `<p id="humidity">${data.main.humidity}%</p>`}
     `
     windDiv.innerHTML= `
     <h3>🌬 Vento</h3>
     ${windSpeed= `<p id="wind-speed">${data.wind.speed} km/h</p>`}
     `
     feelsDiv.innerHTML= `
     <h3>🌡 Sensação</h3>
     ${feelsLike= `<p id="feels-like">${Math.round(data.main.feels_like)}°C</p>`}
     `

     cityWeather.append(umidityDiv, windDiv,feelsDiv);
    });
}

  searchBtn.addEventListener("click", () => {
    searchCity();
  });

