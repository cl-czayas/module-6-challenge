const searchbox = document.getElementById('city');
const currentD = document.getElementById('currentD');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
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
            console.log(data2.city.name, data2.list[0].dt_txt, data2.list[0].weather.icon, data2.list[0].main.temp, data2.list[0].wind.speed, data2.list[0].main.humidity);
            
            const currentDay = [data2.city.name, data2.list[0].dt_txt,  data2.list[0].weather.icon, data2.list[0].main.temp, data2.list[0].wind.speed, data2.list[0].main.humidity];
            const Day1 = [data2.city.name, data2.list[7].dt_txt,  data2.list[7].weather.icon, data2.list[7].main.temp, data2.list[7].wind.speed, data2.list[7].main.humidity]
            const Day2 = [data2.city.name, data2.list[7].dt_txt,  data2.list[7].weather.icon, data2.list[7].main.temp, data2.list[7].wind.speed, data2.list[7].main.humidity]
            const Day3 = [data2.city.name, data2.list[14].dt_txt,  data2.list[14].weather.icon, data2.list[14].main.temp, data2.list[14].wind.speed, data2.list[14].main.humidity]
            const Day4 = [data2.city.name, data2.list[21].dt_txt,  data2.list[21].weather.icon, data2.list[21].main.temp, data2.list[21].wind.speed, data2.list[21].main.humidity]
            const Day5 = [data2.city.name, data2.list[28].dt_txt,  data2.list[28].weather.icon, data2.list[28].main.temp, data2.list[28].wind.speed, data2.list[28].main.humidity];

            const Days = [currentDay, Day1, Day2, Day3, Day4, Day5];

            for (var i = 0; i<Days.length; i++) {
                var cityName = document.createElement('h1');
                cityName.setAttribute("class", "card-title")
                var date = document.createElement('p');
                var icon = document.createElement('p');
                var temp = document.createElement('p');
                var speed = document.createElement('p');
                var hum = document.createElement('p');

            cityName.textContent = Days[i][0];
            date.textContent = Days[i][1];
            icon.textContent = Days[i][2];
            temp.textContent ="Temp: " + Days[i][3];
            speed.textContent ="Wind Speed: " + Days[i][4];
            hum.textContent="Humidity: " + Days[i][5];
            
            // if(i < 1) {
            currentD.append(cityName);
            currentD.append(date);
            currentD.append(icon);
            currentD.append(temp);
            currentD.append(speed);
            currentD.append(hum);
            // } else if (i = 1) {
            //     first.append(cityName)
            //     first.append(date);
            //     first.append(icon);
            //     first.append(temp);
            //     first.append(speed);
            //     first.append(hum);
            // } else if (i = 2) {
            //     second.append(cityName)
            //     second.append(date);
            //     second.append(icon);
            //     second.append(temp);
            //     second.append(speed);
            //     second.append(hum);
            // } else if (i = 3) {
            //     third.append(cityName)
            //     third.append(date);
            //     third.append(icon);
            //     third.append(temp);
            //     third.append(speed);
            //     third.append(hum);
            // } else if (i = 4) {
            //     fourth.append(cityName)
            //     fourth.append(date);
            //     fourth.append(icon);
            //     fourth.append(temp);
            //     fourth.append(speed);
            //     fourth.append(hum);
            // } else if (i = 5) {
            //     fifth.append(cityName)
            //     fifth.append(date);
            //     fifth.append(icon);
            //     fifth.append(temp);
            //     fifth.append(speed);
            //     fifth.append(hum);
            // }
        }
    })
}
})
})
