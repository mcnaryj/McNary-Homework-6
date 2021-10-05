// declaring the API key:
var APIKey = "82ac2344f2e5c302a7e22c8d20174a65";

// declaring the city variable, to be filled in by the user
var currentTemp = $("#temp");
var windSpeed = $('#wind');
var currentHumidity = $('#humidity');
var uvIndex = $('#uv')


// var clearHistory = $("#clear-history");
// var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;


// using the API key for the current weather, pulling via the following URL:


// // function to clear existing search history
// function clearHistory(event) {
//             event.preventDefault();
//             storedCity = [];
//             localStorage.removeItem("city");
//             document.location.reload();
//         }

// created function to get the current weather in a given city from the OWM API
var currentWeather = (event) => {
    let city = $('#search-city').val();
    var currentCity = $('#search-city').val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;
    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })

}


function displayWeather() {
}




// // var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + APIKey;

// // var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + APIKey;

// ('#clear-history').on('click', clearHistory);
// $(window).on("load", loadLast);
// $(document).on('click', showPastSearch);
$('#search-city').on("click", (event) => {
    event.preventDefault();
    searchedCity = $('#search-city').val();
    currentWeather(event);
});

currentWeather();