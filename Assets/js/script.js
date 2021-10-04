// Functions we want to use: 
// One to clear the history (which involves clearing local storage, and dynamically updating the page) window.location.reload
var APIKey = "82ac2344f2e5c302a7e22c8d20174a65";

var city = "";

var currentCity = $('#current');
var currentTemp = $("#temp");
var windSpeed = $('#wind');
var currentHumidity = $('#humidity');
var uvIndex = $('#uv')

var searchBtn = $("#search-button");
var clearHistory = $("#clear-history");

var cityInput = document.querySelector('#search-input');
var searchedCities = document.querySelector('searched-cities');

function currentWeather(event) {
    event.preventDefault();
    if ()


}










// var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + APIKey;

// var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + APIKey;
