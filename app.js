const darksky = new DarkSky;
const ui = new UI;

darksky.getWeatherData()
.then(data => {
    console.log(data.urlJson);
    ui.showWeather(data.urlJson);
});