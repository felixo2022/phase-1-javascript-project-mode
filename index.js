let weather = {
    "apikey": "f38ac0cb493bbed636a6fce66516be7b",
    fetchWeather: function (city){
        fetch(
            ""
            + city
            + "&units=metric&appid="
            +this.apikey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));


    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, wind);
        document.querySelector(".city").innerText = "weather in" + name;
        document.qurrySelector(".icon").src =
    }
}