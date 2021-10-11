## Purpose

The purpose of this README is to explain the objective of the homework, and how it has been achieved:

The Open Weather One Call API has been used to retrieve weather data and construct a dashboard, displaying current and future weather conditions for a given city.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Installation/Viewing the Files

Download the files contained in the McNary-Homework-6 repository, either through Github or by making a clone of the repository and downloading it locally. Once downloaded, open the file index.html to view the webpage. The published site can be found here: https://mcnaryj.github.io/McNary-Homework-6/.

## Acceptance Criteria

```md
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
When the planner is opened, the current day is displayed at the top of the calendar.
When the user scrolls down, they are presented with timeblocks for standard business hours.
The timeblocks are color coded to indicate whether the event is in the present, past or the future.
When a timeblock is clicked, the user may enter an event and save it (if the timeblock is green). The file is saved in local storage if the timeblock is green, and the saved events persist.


## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for a given city.](Assets/images/06-server-side-apis-homework-demo.png)


## Notes

This was a difficult assignment, and I found it less intuitive than the previous homework. I come away with a much better understanding of API calls, and I would have done well to start simpler on this one. Another go at this and I think the operation would be a lot smoother. I couldn't quite get the event listeners for the prevous city search to work, but otherwise it meets most of the requirements. Definitely not a beautiful page, but I was more concerned with getting the functionality set.

## Contributing
I will be providing the url for the site via the GitHub repository, and it can also be found here: https://mcnaryj.github.io/McNary-Homework-6/ however any pull requests are welcome.

