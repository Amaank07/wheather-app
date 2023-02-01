const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3ef6d787a9msh2485b852a9a4b2dp193adejsnd1d766b09bc6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    CityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}


const Fixweather = (cit) => {
    CitName.innerHTML = cit
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pctShn
            temp.innerHTML = response.tempShn
            feels_like.innerHTML = response.feels_likeShn
            humidity.innerHTML = response.humidityShn
            min_temp.innerHTML = response.min_tempShn
            max_temp.innerHTML = response.max_tempShn
            wind_speed.innerHTML = response.wind_speedShn
            sunrise.innerHTML = response.sunriseShn
            sunset.innerHTML = response.sunsetShn


        })
        .catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")
Fixweather("Shanghai")

