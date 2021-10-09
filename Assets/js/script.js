// declaring the API key:
var APIKey = "82ac2344f2e5c302a7e22c8d20174a65";
var savedCities = window.localStorage.getItem('cities') || [];
var apiUrlOneCall = "https://api.openweathermap.org/data/2.5/onecall?"
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "";
searchedCity = document.querySelector("#search-city");
currentWeatherContainer = document.querySelector("#current-weather");
fiveDayContainer = document.querySelector("#five-day-container");
recentSearches = document.querySelector("#recent-searches");

localStorage.getItem("Stored City");
function getLatLon(cityInput) {
    // var city = localStorage.getItem("city");
    var searchedCity = localStorage.getItem("cities");
    var search = apiURL + searchedCity + "&units=imperial" + "&appid=" + APIKey;
    console.log(search);
    fetch(search)
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                response.json().then(function (data) {
                    var latitude = data.coord.lat;
                    var longitude = data.coord.lon;
                    // storing latitude and longitude for UV url
                    localStorage.setItem("Longitude", longitude);
                    localStorage.setItem("Latitude", latitude);
                    console.log(latitude, longitude);
                    var exclude = "&exclude=minutely,hourly";
                    var units = "&units=imperial";
                    var newSearch = apiUrlOneCall + "lat=" + latitude + "&lon=" + longitude + units + exclude + "&appid=" + APIKey;
                    console.log(newSearch);
                    console.log(data);

                    displayWeather(newSearch);

                });
            } else {
                alert('Error: ' + response.statusText);
            }

        })

    uvIndex();
}


function displayWeather(newSearch) {
    fetch(newSearch)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(newSearch);
            dataObj = data;
            console.log(dataObj);

            for (var i = 1; i < dataObj.daily.length - 2; i++) {
                var weatherCard = document.createElement('div');
                weatherCard.classList.add('col-2', 'card', 'weatherCard');
                weatherCard.style.marginLeft = '25px';
                var weatherBody = document.createElement('div');
                weatherBody.classList.add('card-body');
                var weatherList = document.createElement('ul');
                weatherList.style.listStyle = 'none'
                weatherList.style.paddingLeft = '0px'

                var dateEl = document.createElement('h5');
                dateEl.textContent = moment.unix(dataObj.daily[i].dt).format("MM/DD/YYYY");

                var weatherIcon = document.createElement("img");
                var iconcode = data.daily[i].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                weatherIcon.setAttribute('src', iconurl);

                var tempEl = document.createElement('li');
                tempEl.textContent = "Temp: " + dataObj.daily[i].temp.day + " °F";

                var windEl = document.createElement('li');
                windEl.textContent = "Wind: " + dataObj.daily[i].wind_speed + " MPH";

                var humidityEl = document.createElement('li');
                humidityEl.textContent = "Humidity: " + dataObj.daily[i].humidity + "%";

                weatherList.append(tempEl, windEl, humidityEl);
                weatherBody.append(dateEl, weatherIcon, weatherList);
                weatherCard.append(weatherBody);
                fiveDayContainer.append(weatherCard);

            }
        });
}

function uvIndex() {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial" + "&appid=" + APIKey;
    // fetch(queryURL1)
    // let latitude = localStorage.getItem("Longitude");
    // let longitude = localStorage.getItem("Latitude");
    // let uvQueryURL = "api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;
    // console.log(queryURL);
    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            let uvIndex = response.value;
            $('#uvIndex').html(`UV Index: <span id="uvVal"> ${uvIndex}</span>`);
            if (uvIndex >= 0 && uvIndex < 3) {
                $('#uvVal').attr("class", "uv-favorable");
            } else if (uvIndex >= 3 && uvIndex < 8) {
                $('#uvVal').attr("class", "uv-moderate");
            } else if (uvIndex >= 8) {
                $('#uvVal').attr("class", "uv-severe");
            }
        });
}

// created function to get the current weather in a given city from the OWM API
function currentWeather() {
    // let city = $('#search-city').val();
    searchedCity = $('#search-city').val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial" + "&appid=" + APIKey;
    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            let weatherIcon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            let currentTimeUTC = response.dt;
            let currentTimeZoneOffset = response.timezone;
            let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60 / 60;
            let currentMoment = moment.unix(currentTimeUTC).utc().utcOffset(currentTimeZoneOffsetHours);
            $('#header-text').text(response.name);


            let currentWeatherHTML = `
            <h3>${response.name} ${currentMoment.format("(MM/DD/YY)")}<img src="${weatherIcon}"></h3>
            <div class="list-unstyled">
                <div>Temperature: ${response.main.temp}&#8457;</div>
                <div>Humidity: ${response.main.humidity}%</div>
                <div>Wind Speed: ${response.wind.speed} mph</div>
                <div class="uvIndex">UV Index: ${response.value}</div>
            </div>`;
            // <div id="uvIndex">UV Index: ${uvIndex}</div>
            // UVbtn.textContent = data.current.uvi;
            // console.log(data.current.uvi);
            $('#current-weather').html(currentWeatherHTML);

        })
}

function getPastSearch() {
    localStorage.getItem("Stored Cities")
    $('#recent-searches').append(previousSearch)



}
function addCity(storedCity) {
    storedCity = localStorage.getItem("cities");
    {
        var previousSearch = $('<div>').text(storedCity);
        $('#recent-searches').append(previousSearch)
        localStorage.setItem("Stored Cities", JSON.stringify(previousSearch));

    }

}

$('#search-button').on("click", (event) => {
    event.preventDefault();
    searchedCity = $('#search-city').val();
    console.log(searchedCity);
    currentWeather(searchedCity);
    localStorage.setItem("cities", searchedCity)
    getLatLon();
    addCity();

});

$('#clear-history').on('click', (event) => {
    event.preventDefault();
    localStorage.removeItem("cities");
    document.location.reload();
});