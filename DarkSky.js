class DarkSky{
    constructor(){
        this.key = "e095c12ff0a1253825f1ba3a5c99a990";
        this.latitude = 59.43696;
        this.longitude = 24.75353;
        this.apiUrl = "https://api.darksky.net/forecast/";
    }

    async getWeatherData(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let url = `${proxyUrl}${this.apiUrl}${this.key}/${this.latitude},${this.longitude}`;
        // const urlResponse = await fetch(url, {mode: 'no-cors'});
        const urlResponse = await fetch(url);
        const urlJson = await urlResponse.json();
        return {urlJson}
    }
}
// https://api.darksky.net/forecast/e095c12ff0a1253825f1ba3a5c99a990/59.43696,24.75353