let weather = {
    apiKey: "e89b90c9b992fec8c9378500c0e7b870",
    
      fetchWeather: function (city){
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=Nairobi&limit=5&appid=e89b90c9b992fec8c9378500c0e7b870")
        + city
        + "&units=metric&appid="
        + this.appkey;

      
      }

      
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    displayWeather: function(data) {
      const { name } = data,
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
     
    }
    search: function () {
      this.getWeather(document.querySelector(".search-bar").value);
    }
  ;
  
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