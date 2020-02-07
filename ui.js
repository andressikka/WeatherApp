class UI{
    constructor(){
        this.viewwindow = document.getElementById("viewwindow");
    }

    showWeather(weatherData){
        let tempCelc = ((weatherData.currently.temperature - 32) * 5/9).toFixed(1);
        let appearentTempCelc = ((weatherData.currently.apparentTemperature - 32) * 5/9).toFixed(1);
        this.viewwindow.innerHTML = `
            <h3>Location: ${weatherData.timezone}</h3>
            <h3>Temperature: ${tempCelc}°C</h3>
            <h3>Appearent temperature: ${appearentTempCelc}°C</h3>
            <h3>Description: ${weatherData.currently.summary}</h3>
        `;
    }
}