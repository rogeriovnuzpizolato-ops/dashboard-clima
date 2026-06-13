const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityInfo = document.querySelector(".city-info");
const cityWeather = document.querySelector(".weather-details");
const details= document.querySelector(".detail")
const cityTemperature= document.querySelector(".temperature");

let cityName= document.getElementById("city-name");
let weatherDescription= document.getElementById("weather-description");
let temperature= document.getElementById("temperature");
let humidity= document.getElementById("humidity");
let windSpeed= document.getElementById("wind-speed")


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
     details.innerHTML= `
     <h3>💧 Umidade</h3>
     ${humidity= `<p id="humidity">${data.main.humidity}%</p>`}

     <h3>🌬 Vento</h3>
     ${windSpeed= `<p id="humidity">${data.wind.speed}km</p>`}
     
     `
     cityWeather.append(details.value);
    });
}

  searchBtn.addEventListener("click", () => {
    searchCity();
  });

