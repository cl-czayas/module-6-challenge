const searchbox = document.getElementById('city');
const currentD = document.getElementById('currentD');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
const APIkey = "4ab55ec96aeb47baa2457edf5e49043e";
var cityName = document.createElement('h1');
var date = document.createElement('p');
var icon = document.createElement('p');
var temp = document.createElement('p');
var speed = document.createElement('p');
var hum = document.createElement('p');


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

            const Days = [0, 1, 2, 3, 4, 5];

            for (var i = 0; i<Days.length; i++) {
            if (Days[i] = 0) {
                var cityName = document.createElement('h1');
                var date = document.createElement('p');
                var icon = document.createElement('p');
                var temp = document.createElement('p');
                var speed = document.createElement('p');
                var hum = document.createElement('p');

            cityName.textContent =currentDay[0]
            date.textContent =currentDay[1]
            icon.textContent =currentDay[2]
            temp.textContent ="Temp: " + currentDay[3]
            speed.textContent ="Wind Speed: " + currentDay[4]
            hum.textContent="Humidity: " + currentDay[5]

            currentD.append(cityName);
            currentD.append(date);
            currentD.append(icon);
            currentD.append(temp);
            currentD.append(speed);
            currentD.append(hum);

                } if (Days[i]= 1) {
                var cityName1 = document.createElement('h1');
                var date1 = document.createElement('p');
                var icon1 = document.createElement('p');
                var temp1 = document.createElement('p');
                var speed1 = document.createElement('p');
                var hum1 = document.createElement('p');

                        cityName1.textContent =Day1[0]
                        date1.textContent =Day1[1]
                        icon1.textContent =Day1[2]
                        temp1.textContent ="Temp: " + Day1[3]
                        speed1.textContent ="Wind Speed: " + Day1[4]
                        hum1.textContent="Humidity: " + Day1[5]
            
                        first.append(cityName1);
                        first.append(date1);
                        first.append(icon1);
                        first.append(temp1);
                        first.append(speed1);
                        first.append(hum1);
                    }
                }
            })  
        }
    })
})
