const apiKey = "018a49105f7480661e17d2d8766bcbbb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.inp');
const searchBtn = document.querySelector('.btn');
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    // console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.scr = "images/clouds.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.scr = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.scr = "images/rain.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.scr = "images/clear.png"
    }
    else if(data.weather[0].main == "Storm"){
        weatherIcon.scr = "images/storm.png"
    }
    else if(data.weather[0].main == "Cold"){
        weatherIcon.scr = "images/cold.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
})



