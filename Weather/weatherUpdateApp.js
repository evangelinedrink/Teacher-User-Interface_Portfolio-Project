const api = {
    key: "fdf7d6aaa372dda5421649588df97049",
    baseurl: "https://api.openweathermap.org/data/2.5" 
}

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
    if (evt.keyCode==13){ //Key 13 is the enter key on the keyboard. 
        getResults(searchbox.value); //Value that was typed in the searchbox is a parameter for the function getResults
        console.log(searchbox.value); //Used to check to see if above code is working
    }
}

function getResults (query) { //query is the value that was entered in the searchbox.value
    //fetch("${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}")
    //https://openweathermap.org/current#current_JSON
    fetch("api.openweathermap.org/data/2.5/weather?id=${query}&appid=${api.key}") //Fetch request takes the api.base url and attaches weather at the end of the website link. This is then passed through the query (which is our searchbox.value). Units is set in Fahrenheit. APPID is equal to the api,ley
        .then(weather => { //This returns our value for weather that was found with our api (using Open Weather Map)    
        return weather.json(); //The value of weather for that city will pass through the .json file.
        }).then(displayResults); //The value of weather for that city in the searchbox.value will then be displayed in the results.
}

function displayResults (weather) {
    console.log(weather);
    let city= document.querySelector(".location .city");
    city.innerText="${weather.name}, ${weather.sys.country}";

    //Get the date of the city that was searched for
    let now= new Date();
    let date= document.querySelector(".location .date");
    date.innterTExt= dateBuilder(now);

    let temp= document.querySelector(".current .temp");
    temp.innerHTML ="${Math.round(weather.main.temp)}<span>°F</span>";
    
    let weather_el= document.querySelector(".current .weather");
    weather_el.innerText= weather.weater[0].main;

    let hilow= document.querySelector(".hi-low");
    hilow.innerText= "${weather.main.temp_min}°F / ${weather.main.temp_max}°F"


}

function dateBuilder (d) {
    let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day= days[d.getDay()];
    let date= d.getDate();
    let month= months[d.getMonth()];
    let year =d.getFullYear();

    return "${day} ${date} ${month} ${year}";
}