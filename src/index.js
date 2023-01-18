/*
sunny = url('https://images.pexels.com/photos/1303216/pexels-photo-1303216.jpeg?auto=compress&cs=tinysrgb&w=1600');
cloudy = url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1600");
https://images.pexels.com/photos/14944496/pexels-photo-14944496.jpeg?auto=compress&cs=tinysrgb&w=1600;

partly-cloudy = url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1600');
snowy = url('https://images.pexels.com/photos/6618008/pexels-photo-6618008.jpeg?auto=compress&cs=tinysrgb&w=1600');
https://images.pexels.com/photos/3334473/pexels-photo-3334473.jpeg?auto=compress&cs=tinysrgb&w=1600
https://images.pexels.com/photos/6617796/pexels-photo-6617796.jpeg?auto=compress&cs=tinysrgb&w=1600
https://images.pexels.com/photos/760110/pexels-photo-760110.jpeg?auto=compress&cs=tinysrgb&w=1600
https://images.pexels.com/photos/2423351/pexels-photo-2423351.jpeg?auto=compress&cs=tinysrgb&w=1600

rainy = url('https://images.pexels.com/photos/9065305/pexels-photo-9065305.jpeg?auto=compress&cs=tinysrgb&w=1600');
*/
let theme = {
  Clouds: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1600')",

    iconSrc: "images/cloudy.png",
  },
  partlyCloudy: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/partly-cloudy.png",
  },
  Clear: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/1303216/pexels-photo-1303216.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/sunny.png",
  },
  Atmosphere: {
    backgroundUrl: "",
    iconSrc: "http://openweathermap.org/img/wn/50d@2x.png",
  },
  Snow: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/2423351/pexels-photo-2423351.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/snowy.png",
  },
  Rain: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/9065305/pexels-photo-9065305.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/rainy.png",
  },
  Thunderstorm: {
    backgroundUrl: "",
    iconSrc: "http://openweathermap.org/img/wn/11d@2x.png",
  },
};

function getTheme(id) {
  if (id < 300) {
    return theme.Thunderstorm;
  } else if (id >= 300 && id < 600) {
    return theme.Rain;
  } else if (id >= 600 && id < 700) {
    return theme.Snow;
  } else if (id >= 700 && id < 800) {
    return theme.Atmosphere;
  } else if (id == 800) {
    return theme.Clear;
  } else if (id == 801) {
    return theme.partlyCloudy;
  } else if (id >= 802) {
    return theme.Clouds;
  }
}

//get current Date and Time
function nextDays(index) {
  let nextdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  if (index == 0) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[1];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[2];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[3];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[4];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[5];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[6];
  } else if (index == 1) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[2];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[3];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[4];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[5];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[6];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[0];
  } else if (index == 2) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[3];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[4];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[5];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[6];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[0];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[1];
  } else if (index == 3) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[4];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[5];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[6];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[0];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[1];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[2];
  } else if (index == 4) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[5];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[6];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[0];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[1];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[2];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[3];
  } else if (index == 5) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[6];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[0];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[1];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[2];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[3];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[4];
  } else if (index == 6) {
    document.querySelector(".nextDay1 .dayName").innerHTML = nextdays[0];
    document.querySelector(".nextDay2 .dayName").innerHTML = nextdays[1];
    document.querySelector(".nextDay3 .dayName").innerHTML = nextdays[2];
    document.querySelector(".nextDay4 .dayName").innerHTML = nextdays[3];
    document.querySelector(".nextDay5 .dayName").innerHTML = nextdays[4];
    document.querySelector(".nextDay6 .dayName").innerHTML = nextdays[5];
  }
}
function getDateAndTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "	January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "	November",
    "December",
  ];
  nextDays(date.getDay());
  document.querySelector(".date").innerHTML = `${
    days[date.getDay()]
  }, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  document.getElementById("currentTime").innerHTML = strTime;
  document.getElementById("statusTime").innerHTML = ampm;
  document.querySelector(".dateMobileShow .date").innerHTML = `${
    days[date.getDay()]
  }${strTime}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
  utc = date.getTime() + date.getTimezoneOffset() * 60000;
  console.log(new Date(utc));
}

getDateAndTime(new Date());

//get user location
let currentLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("cityName").innerHTML = currentLocation.split("/")[1];
document.getElementById("country").innerHTML = currentLocation.split("/")[0];
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeatherInCurrentPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showWeatherInCurrentPosition(position) {
  let apiKey = "30a656996750d42d88b01c05992431b9";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  axios
    .get(
      `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
    .then((response) => {
      document.querySelector(
        ".currentStatusTemperature .temperature"
      ).innerHTML = Math.floor(response.data.main.temp);
      document.getElementById("cityName").innerHTML = response.data.name;
      document.getElementById("country").innerHTML = response.data.sys.country;
      document.querySelector(".weatherDescription").innerHTML =
        response.data.weather[0].description;
      document.querySelectorAll(".humidity").forEach((item) => {
        item.innerHTML = `${response.data.main.humidity}%`;
      });
      document.querySelectorAll(".wind").forEach((item) => {
        item.innerHTML = `${response.data.wind.speed}km/h`;
      });
      //set theme
      document.querySelector(".currentStatusLogo img").src = getTheme(
        response.data.weather[0].id
      ).iconSrc;
      document.querySelector(
        ".theme"
      ).style.backgroundImage = `linear-gradient(black, black),${
        getTheme(response.data.weather[0].id).backgroundUrl
      }`;
      document.querySelector(".container").style.backgroundImage = getTheme(
        response.data.weather[0].id
      ).backgroundUrl;
    });
}

document
  .querySelector(".fa-location-dot")
  .addEventListener("click", getLocation);

//get weather status by search city name

function weatherInCity(cityName) {
  let apiKey = "30a656996750d42d88b01c05992431b9";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  if (cityName) {
    axios
      .get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`)
      .then((response) => {
        document.querySelector(
          ".currentStatusTemperature .temperature"
        ).innerHTML = Math.floor(response.data.main.temp);
        document.getElementById("cityName").innerHTML = response.data.name;
        document.getElementById("country").innerHTML =
          response.data.sys.country;
        document.querySelector(".weatherDescription").innerHTML =
          response.data.weather[0].description;
        document.querySelectorAll(".humidity").forEach((item) => {
          item.innerHTML = `${response.data.main.humidity}%`;
        });
        document.querySelectorAll(".wind").forEach((item) => {
          item.innerHTML = `${response.data.wind.speed}km/h`;
        });
        //set theme
        document.querySelector(".currentStatusLogo img").src = getTheme(
          response.data.weather[0].id
        ).iconSrc;
        document.querySelector(
          ".theme"
        ).style.backgroundImage = `linear-gradient(black, black),${
          getTheme(response.data.weather[0].id).backgroundUrl
        }`;
        document.querySelector(".container").style.backgroundImage = getTheme(
          response.data.weather[0].id
        ).backgroundUrl;
        dailyForecast(response.data.coord.lat, response.data.coord.lon, apiKey);
      });
  } else {
    alert("City not found,Please try again!");
  }

  document.getElementById("searchCityInp").value = "";
}
https: document
  .getElementById("searchCityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let cityName = document.getElementById("searchCityInp").value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    let country = "";
    weatherInCity(cityName);
  });

//weather forecast
function dailyForecast(lat, lon, apiKey) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&cnt=6&units=metric`
    )
    .then((response) => {
      //set icon
      document.querySelector(".nextDay1 img").src = getTheme(
        response.data.list[0].weather[0].id
      ).iconSrc;
      document.querySelector(".nextDay2 img").src = getTheme(
        response.data.list[1].weather[0].id
      ).iconSrc;
      document.querySelector(".nextDay3 img").src = getTheme(
        response.data.list[2].weather[0].id
      ).iconSrc;
      document.querySelector(".nextDay4 img").src = getTheme(
        response.data.list[3].weather[0].id
      ).iconSrc;
      document.querySelector(".nextDay5 img").src = getTheme(
        response.data.list[4].weather[0].id
      ).iconSrc;
      document.querySelector(".nextDay6 img").src = getTheme(
        response.data.list[5].weather[0].id
      ).iconSrc;

      //set temperature
      document.querySelector(".nextDay1 .max").innerHTML = Math.floor(
        response.data.list[0].main.temp_max
      );

      document.querySelector(".nextDay1 .min").innerHTML = Math.floor(
        response.data.list[0].main.temp_min
      );

      document.querySelector(".nextDay2 .max").innerHTML = Math.floor(
        response.data.list[1].main.temp_max
      );

      document.querySelector(".nextDay2 .min").innerHTML = Math.floor(
        response.data.list[1].main.temp_min
      );

      document.querySelector(".nextDay3 .max").innerHTML = Math.floor(
        response.data.list[2].main.temp_max
      );

      document.querySelector(".nextDay3 .min").innerHTML = Math.floor(
        response.data.list[2].main.temp_min
      );

      document.querySelector(".nextDay4 .max").innerHTML = Math.floor(
        response.data.list[3].main.temp_max
      );

      document.querySelector(".nextDay4 .min").innerHTML = Math.floor(
        response.data.list[3].main.temp_min
      );

      document.querySelector(".nextDay5 .max").innerHTML = Math.floor(
        response.data.list[4].main.temp_max
      );

      document.querySelector(".nextDay5 .min").innerHTML = Math.floor(
        response.data.list[4].main.temp_min
      );

      document.querySelector(".nextDay6 .max").innerHTML = Math.floor(
        response.data.list[5].main.temp_max
      );

      document.querySelector(".nextDay6 .min").innerHTML = Math.floor(
        response.data.list[5].main.temp_min
      );
    });
}
//convert temperature
function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = Math.floor((cTemp * 9) / 5 + 32);
  var result = `${cToFahr}`;
  return result;
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = Math.ceil(((fTemp - 32) * 5) / 9);
  var result = `${fToCel}`;
  return result;
}
//convert to fahrenheit
let ctfBtn = document.getElementById("btnradio2");
ctfBtn.addEventListener("click", () => {
  let tempList = document.querySelectorAll(".temperature");
  tempList.forEach((elm) => {
    elm.innerHTML = cToF(elm.innerHTML);
  });
  document.querySelector(".temperatureUnit").innerHTML = "°F";
});

//convert to celsius
let ftcBtn = document.getElementById("btnradio1");
ftcBtn.addEventListener("click", () => {
  let tempList = document.querySelectorAll(".temperature");
  tempList.forEach((elm) => {
    elm.innerHTML = fToC(elm.innerHTML);
  });
  document.querySelector(".temperatureUnit").innerHTML = "°C";
});

weatherInCity("Mashhad");
