
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
