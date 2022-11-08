const searchbox = document.getElementById('city');
const APIkey = "4ab55ec96aeb47baa2457edf5e49043e";

$("#search").click(function() {
    var cityInput = searchbox.value;
    console.log(cityInput);

    const geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=" + APIkey;

    //Fetch Method
    fetch(geoURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for (i in data) {
    console.log(data[i].lat, data[i].lon);
    }
})
})