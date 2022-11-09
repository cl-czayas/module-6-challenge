const searchbox = document.getElementById('city');
const APIkey = "4ab55ec96aeb47baa2457edf5e49043e";

    //Search button click event
$("#search").click(function() {
    var cityInput = searchbox.value;
    console.log(cityInput);
    localStorage.setItem("previous", cityInput)

    const geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=" + APIkey;

    //Fetch the coordinates first
    fetch(geoURL)
        .then(function (response) {
            return response.json();
})
    //With that data I can specifically pull lat & lon
        .then(function (data) {
            for (i in data) {
            console.log(data[i].lat, data[i].lon);
    // Declare variables & the weather API link
            var pulledLat = data[i].lat;
            var pulledLon = data[i].lon;
            const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + pulledLat + "&lon=" + pulledLon + "&appid=" + APIkey;

    fetch(weatherURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data2) { 
            console.log(data2)
            console.log(data2.city.name, data2.list[0].dt_txt,  data2.list[0].weather.icon, data2.list[0].main.temp, data2.list[0].wind.speed, data2.list[0].main.humidity);
            const currentDay = [data2.city.name, data2.list[0].dt_txt,  data2.list[0].weather.icon, data2.list[0].main.temp, data2.list[0].wind.speed, data2.list[0].main.humidity];
            const Day1 = [data2.city.name, data2.list[7].dt_txt,  data2.list[7].weather.icon, data2.list[7].main.temp, data2.list[7].wind.speed, data2.list[7].main.humidity]
            const Day2 = [data2.city.name, data2.list[7].dt_txt,  data2.list[7].weather.icon, data2.list[7].main.temp, data2.list[7].wind.speed, data2.list[7].main.humidity]
            const Day3 = [data2.city.name, data2.list[14].dt_txt,  data2.list[14].weather.icon, data2.list[14].main.temp, data2.list[14].wind.speed, data2.list[14].main.humidity]
            const Day4 = [data2.city.name, data2.list[21].dt_txt,  data2.list[21].weather.icon, data2.list[21].main.temp, data2.list[21].wind.speed, data2.list[21].main.humidity]
            const Day5 = [data2.city.name, data2.list[28].dt_txt,  data2.list[28].weather.icon, data2.list[28].main.temp, data2.list[28].wind.speed, data2.list[28].main.humidity];

            const Days = [currentDay, Day1, Day2, Day3, Day4, Day5]

            // for ( var i = 0; i<Days.length; i++) {

                // }
            })
        }
    })
})