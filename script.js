const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityInfo = document.querySelector(".city-info");

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
      <h2 id="city-name">${data.name}</h2>
      <p id="weather-description">${data.weather[0].description}</p>

      `
    });
}

  searchBtn.addEventListener("click", () => {
    searchCity();
  });

