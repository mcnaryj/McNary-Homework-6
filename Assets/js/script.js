// declaring the API key:
var APIKey = "82ac2344f2e5c302a7e22c8d20174a65";

// declaring the city variable, to be filled in by the user
var city = "";

var searchCity = $('#search-city');
var currentTemp = $("#temp");
var windSpeed = $('#wind');
var currentHumidity = $('#humidity');
var uvIndex = $('#uv')
var currentCity = $('#current');

var searchBtn = $("#search-button");
var clearHistory = $("#clear-history");


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial' + APIKey;

function todaysWeather(city) {
    // using the API key for the current weather, pulling via the following URL:


    fetch(queryURL)
        .then(function (response) {
            console.log(response);
            var weatherImg = response.weather[0].icon;
            var imgURL = "https://openweathermap.org/img/wn/" + weatherImg + "@2x.png";
            // turning the date into an Object, pulled from the MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
            var date = new Date(response.dt * 1000).toLocaleDateString();
            // grabbing current city
            $(currentCity).html(response.name + "(" + date + ")" + "<img src=" + imgURL + ">");
            // grabbing humidity
            $(currentHumidity).html(response.main.humidity + "%");
            // grabbing wind speed response
            var windSpeed = response.wind.speed;
            // converting the response into MPH
            var windMPH = (ws * 2.237).toFixed(1);
            $(currentWindSpeed).html(windMPH + "MPH");
            // UV Index
            uvIndex(response.coord.lat, response.coord.lon);
            forecast(response.id);

            if (response.status === 200) {
                storedCity = JSON.parse(localStorage.getItem("city"));

                console.log(storedCity);
                if (storedCity == null) {
                    storedCity = [];
                    localStorage.setItem("city", JSON.stringify(storedCity));
                    cityList(city);


                }
                else {
                    if (find(city) > 0) {
                        localStorage.setItem("city", JSON.stringify(storedCity));
                        cityList(city);
                    }
                }
            }
        });
}

function showWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
        city = searchCity.val().trim();
        todaysWeather(city);
    }

}

// function to obtain the UV index
function uvIndex(ln, lt) {
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lt + "&lon=" + ln;
    fetch(uvURL)
        .then(function (response) {
            $(uvIndex).html(response.value);
        });
}

// function to add each searched city to the list underneath the search bar
function addSearchedCity(c) {
    var searchCity = $('<li>' + c + '</li>');
    $(searchCity).attr("class", "tbd")
    $(searchCity).attr("data-value", c);
    $(".list-group").append(searchCity);
}

function fiveDayForecast(cityid) {
    var dayOver = false;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityid + "&appid=" + APIKey;
    fetch(forecastURL)
        .then(function (response) {
            for (i = 0; i < 5; i++) {

                var date = new Date((response.list[((i + 1) * 8) - 1].dt) * 1000).toLocaleDateString();
                var iconcode = response.list[((i + 1) * 8) - 1].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                var tempK = response.list[((i + 1) * 8) - 1].main.temp;
                var tempF = (((tempK - 273.5) * 1.80) + 32).toFixed(2);
                var humidity = response.list[((i + 1) * 8) - 1].main.humidity;

                $("#fDate" + i).html(date);
                $("#fImg" + i).html("<img src=" + iconurl + ">");
                $("#fTemp" + i).html(tempF + "&#8457");
                $("#fHumidity" + i).html(humidity + "%");
            }

        });

}
//         }
// function to clear existing search history
function clearHistory(event) {
    event.preventDefault();
    storedCity = [];
    localStorage.removeItem("city");
    document.location.reload();
}


// var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + APIKey;

// var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + APIKey;

$('#search-button').on('click', showWeather);
$('#clear-history').on('click', clearHistory);
// $(window).on("load", loadLast);
// $(document).on('click', showPastSearch);
