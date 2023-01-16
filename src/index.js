let theme = {};
//get current Date and Time
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
      document.querySelector(".currentStatusTemperature .celsius").innerHTML =
        Math.floor(response.data.main.temp);
      document.getElementById("cityName").innerHTML = response.data.name;
      document.getElementById("country").innerHTML = response.data.sys.country;
    });
}

document
  .querySelector(".fa-location-dot")
  .addEventListener("click", getLocation);

//get weather forcast by search city name
https: document
  .getElementById("searchCityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let apiKey = "30a656996750d42d88b01c05992431b9";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    let cityName = document.getElementById("searchCityInp").value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    let country = "";
    if (cityName) {
      axios
        .get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((response) => {
          document.querySelector(
            ".currentStatusTemperature .celsius"
          ).innerHTML = Math.floor(response.data.main.temp);
          document.getElementById("cityName").innerHTML = response.data.name;
          document.getElementById("country").innerHTML =
            response.data.sys.country;
        });
    } else {
      alert("City not found,Please try again!");
    }
  });

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

//change temp from celsius to fahrenheit
let tempList = document.querySelectorAll(".convertTemp");
tempList.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    if (e.target.innerHTML === "°C") {
      e.target.previousElementSibling.innerHTML = cToF(
        e.target.previousElementSibling.innerHTML
      );
      e.target.innerHTML = "°F";
    } else if (e.target.innerHTML === "°F") {
      e.target.previousElementSibling.innerHTML = fToC(
        e.target.previousElementSibling.innerHTML
      );
      e.target.innerHTML = "°C";
    }
  });
});
