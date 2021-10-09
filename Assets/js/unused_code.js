
var getCurrentConditions = (event) => {

    var responseText = document.getElementById('response-text');

    function getApi(request) {
        fetch(requestUrl)
            .then(function (response) {
                // Check the console first to see the response.status
                console.log(response.status);
                if (response.status === 404) {
                    responseText.textContent = response.status;
                }
                return response.json();
                // Then write the conditional based on that response.status value
                // Make sure to display the response on the page
            })
            .then(function (data) {
                console.log(data);

            });
    }

    getApi(requestUrl);


    // function citySearch() {
    // }




    searchBtn.addEventListener('click',)



    // Temperature: 47 °F

    // Humidity: 72%

    // Wind Speed: 0.45 MPH

    // UV Index: 5.38

    // fetch(queryURL)

    // var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=82ac2344f2e5c302a7e22c8d20174a65';

    $('#search').on('click', (event) => {
        event.preventDefault();
        currentCity = $('#search-city').val();
    })
}

// var storeCity = (newCity) => {
//     let cityExists = false;
//     // Check if City exists in local storage
//     for (let i = 0; i < localStorage.length; i++) {
//         // go to local storage activity on storing arrays
//         if (localStorage["cities" + i] === newCity) {
//             cityExists = true;
//             break;
//         } // one key that can store an array of cities
//         // stringify/parsing for the conversion 
//     }
//     // Save to localStorage if city is new
//     if (cityExists === false) {
//         localStorage.setItem('cities' + localStorage.length, newCity);
//     }

// }


//         fetch(queryURL)
//             .then(function (response) {
//                 console.log(response);
//                 var weatherImg = response.weather[0].icon;
//                 var imgURL = "https://openweathermap.org/img/wn/" + weatherImg + "@2x.png";
//                 // turning the date into an Object, pulled from the MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//                 var date = new Date(response.dt * 1000).toLocaleDateString();
//                 // grabbing current city
//                 $(currentCity).html(response.name + "(" + date + ")" + "<img src=" + imgURL + ">");
//                 // grabbing humidity
//                 $(currentHumidity).html(response.main.humidity + "%");
//                 // grabbing wind speed response
//                 var windSpeed = response.wind.speed;
//                 // converting the response into MPH
//                 var windMPH = (ws * 2.237).toFixed(1);
//                 $(currentWindSpeed).html(windMPH + "MPH");
//                 // UV Index
//                 uvIndex(response.coord.lat, response.coord.lon);
//                 forecast(response.id);

//                 if (response.status === 200) {
//                     storedCity = JSON.parse(localStorage.getItem("city"));

//                     console.log(storedCity);
//                     if (storedCity == null) {
//                         storedCity = [];
//                         localStorage.setItem("city", JSON.stringify(storedCity));
//                         cityList(city);


//                     }
//                     else {
//                         if (find(city) > 0) {
//                             localStorage.setItem("city", JSON.stringify(storedCity));
//                             cityList(city);
//                         }
//                     }
//                 }
//             });
//     }


//         // var searchBtn = $("#search-button")
//         //     .attr({
//         //         // Found save icon on fontawesome.com, had fas first, changed to far. Added fa-lg because the icon was tiny at first.
//         //         "class": "<i class = fas fa-search>"

//         //     });

//         function showWeather(event) {
//             event.preventDefault();
//             if (searchCity.val().trim() !== "") {
//                 city = searchCity.val().trim();
//                 todaysWeather(city);
//             }

//         }

// // function to obtain the UV index
// function uvIndex(ln, lt) {
//             var uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lt + "&lon=" + ln;
//             fetch(uvURL)
//                 .then(function (response) {
//                     $(uvIndex).html(response.value);
//                 });
//         }

// // function to add each searched city to the list underneath the search bar
// function addSearchedCity(c) {
//             var searchCity = $('<li>' + c + '</li>');
//             $(searchCity).attr("class", "tbd")
//             $(searchCity).attr("data-value", c);
//             $(".list-group").append(searchCity);
//         }

// function fiveDayForecast(cityid) {
//             var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityid + "&appid=" + APIKey;
//             fetch(forecastURL)
//                 .then(function (response) {
//                     //     $(".container").append(five-day cards);
//                 });

//         }
// //         }
