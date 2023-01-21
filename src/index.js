let theme = {
  Clouds: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/14944496/pexels-photo-14944496.jpeg?auto=compress&cs=tinysrgb&w=1600')",

    iconSrc: "images/cloudy.png",
  },
  partlyCloudy: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/partly-cloudy.png",
  },
  Clear: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/sunny.png",
  },
  Atmosphere: {
    backgroundUrl:
      "https://images.pexels.com/photos/355810/pexels-photo-355810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    iconSrc:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
  },
  Snow: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/760110/pexels-photo-760110.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/snowy.png",
  },
  Rain: {
    backgroundUrl:
      "url('https://images.pexels.com/photos/9065305/pexels-photo-9065305.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    iconSrc: "images/rainy.png",
  },
  Thunderstorm: {
    backgroundUrl:
      "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1600",
    iconSrc:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png",
  },
};

function getTheme(weatherDescription) {
  if (weatherDescription.includes("thunderstorm")) {
    return theme.Thunderstorm;
  } else if (weatherDescription.includes("rain")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#eae9ec";
    });
    return theme.Rain;
  } else if (weatherDescription.includes("snow")) {
    return theme.Snow;
  } else if (weatherDescription.includes("mist")) {
    return theme.Atmosphere;
  } else if (weatherDescription.includes("haze")) {
    return theme.Atmosphere;
  } else if (weatherDescription.includes("clear sky")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#eae9ec";
    });
    return theme.Clear;
  } else if (weatherDescription.includes("few clouds")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#eae9ec";
    });
    return theme.partlyCloudy;
  } else if (weatherDescription.includes("clouds")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#99979d";
    });

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
}
getDateAndTime(new Date());
function getDateBasedOnTimestamp(unixTimestamp) {
  var date_unixTimestamp = new Date(unixTimestamp * 1000);
  getDateAndTime(date_unixTimestamp);
}

//get user location
let currentLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("cityName").innerHTML = currentLocation.split("/")[1];
document.getElementById("country").innerHTML = currentLocation.split("/")[0];
window.addEventListener("load", () => {
  document.querySelector(".content").style.display = "none";
  weatherInCity(currentLocation.split("/")[1]);
});
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeatherInCurrentPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showWeatherInCurrentPosition(position) {
  let apiKey = "5fd3056eb5affa9b30928e4047a72otd";
  let apiUrl = "https://api.shecodes.io/weather/v1/forecast";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  axios
    .get(
      `${apiUrl}?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`
    )
    .then((response) => {
      if (response.status === 200) {
        setTimeout(function () {
          getDateBasedOnTimestamp(response.data.time);
          document.querySelector(
            ".currentStatusTemperature .temperature"
          ).innerHTML = Math.floor(response.data.temperature.current);
          document.getElementById("cityName").innerHTML = response.data.city;
          document.getElementById("country").innerHTML = response.data.country;
          document.querySelector(".weatherDescription").innerHTML =
            response.data.condition.description;
          document.querySelectorAll(".humidity").forEach((item) => {
            item.innerHTML = `${response.data.temperature.humidity}%`;
          });
          document.querySelectorAll(".wind").forEach((item) => {
            item.innerHTML = `${response.data.wind.speed}km/h`;
          });
          //set theme
          document.querySelector(".currentStatusLogo img").src = getTheme(
            response.data.condition.description.toLowerCase()
          ).iconSrc;
          document.querySelector(
            ".theme"
          ).style.backgroundImage = `linear-gradient(black, black),${
            getTheme(response.data.condition.description.toLowerCase())
              .backgroundUrl
          }`;
          document.querySelector(".container").style.backgroundImage = getTheme(
            response.data.condition.description.toLowerCase()
          ).backgroundUrl;
          dailyForecast(latitude, longitude, apiKey);
        }, 3000);
      }
    });
}

document
  .querySelector(".fa-location-dot")
  .addEventListener("click", getLocation);

//get weather status by search city name

function weatherInCity(cityName) {
  document.querySelector(".content").style.display = "none";
  document.querySelector(".preLoader").style.display = "flex";
  let apiKey = "5fd3056eb5affa9b30928e4047a72otd";
  let apiUrl = "https://api.shecodes.io/weather/v1/current";
  if (cityName) {
    axios
      .get(`${apiUrl}?query=${cityName}&key=${apiKey}&units=metric`)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(function () {
            getDateBasedOnTimestamp(response.data.time);
            document.querySelector(
              ".currentStatusTemperature .temperature"
            ).innerHTML = Math.floor(response.data.temperature.current);
            document.getElementById("cityName").innerHTML = response.data.city;
            document.getElementById("country").innerHTML =
              response.data.country;
            document.querySelector(".weatherDescription").innerHTML =
              response.data.condition.description;
            document.querySelectorAll(".humidity").forEach((item) => {
              item.innerHTML = `${response.data.temperature.humidity}%`;
            });
            document.querySelectorAll(".wind").forEach((item) => {
              item.innerHTML = `${response.data.wind.speed}km/h`;
            });
            //set theme
            document.querySelector(".currentStatusLogo img").src = getTheme(
              response.data.condition.description.toLowerCase()
            ).iconSrc;

            document.querySelector(
              ".theme"
            ).style.backgroundImage = `linear-gradient(black, black),${
              getTheme(response.data.condition.description.toLowerCase())
                .backgroundUrl
            }`;
            document.querySelector(".container").style.backgroundImage =
              getTheme(
                response.data.condition.description.toLowerCase()
              ).backgroundUrl;
            dailyForecast(
              response.data.coordinates.latitude,
              response.data.coordinates.longitude,
              apiKey
            );
            document.querySelector(".content").style.display = "flex";
            document.querySelector(".preLoader").style.display = "none";
          }, 3000);
        }
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
    weatherInCity(cityName);
  });

//weather forecast
function dailyForecast(lat, lon, apiKey) {
  axios
    .get(
      `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`
    )
    .then((response) => {
      //set daily icon & temperature
      for (let i = 0; i < 6; i++) {
        document.querySelector(`.nextDay${i + 1} img`).src =
          response.data.daily[i].condition.icon_url;
        document.querySelector(`.nextDay${i + 1} .max`).innerHTML = Math.floor(
          response.data.daily[i].temperature.maximum
        );

        document.querySelector(`.nextDay${i + 1} .min`).innerHTML = Math.floor(
          response.data.daily[i].temperature.minimum
        );
      }
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
