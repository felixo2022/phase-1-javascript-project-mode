let weather = {
    apiKey: "?lat=35.7796&lon=-78.6382&key002b495ba8404384b359ebc412bf4113",
    getWeather: function ( lat, lon ) {
      get(
        "https://api.weatherbit.io/v2.0/current" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function( data ) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "Weather in " + name;
     
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
     
    },
    search: function () {
      this.getWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.getWeather("Nairobi");