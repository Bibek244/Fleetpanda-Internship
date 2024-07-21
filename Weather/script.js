const locations = document.querySelector("#location");
const btnSearch = document.querySelector('#search');
const weatherIcon = document.querySelector('#weatherIcon');
function  getData (city) {
  const apikey = "d443a2d814371c304e840b737e774edb";
//  let city = "bhaktapur"
  let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
  fetch(url + `&q=${city}&appid=${apikey}`).then((response) => {
      if (response.status !== 200) {
        throw new Error('Error: please ensure you entered city name correctly');
      }
      document.querySelector('.error').style.display = "none";
      return response.json();
    })
    .then((data) => {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      document.querySelector(".temp").innerHTML = data.main.temp + "°c";
      document.querySelector('.feelsLike').innerHTML = data.main.feels_like + "°c";
      console.log(data.weather[0].main);
      switch(data.weather[0].main){
        case "Clouds": weatherIcon.src = "image/cloud.svg"; break;
        case "Clear": weatherIcon.src = "image/clear.svg"; break;
        case "Drizzel": weatherIcon.src = "image/drizzel.svg"; break;
        case "Rain": weatherIcon.src = "image/rainy.svg"; break;
        case "Mist": weatherIcon.src = "image/mist.svg"; break;
        case "Haze": weatherIcon.src = "image/haze.svg"; break;
      }
      document.querySelector('.weather').style.display = 'flex';
    })
    .catch((error) => {
      document.querySelector('.error').style.display = "block";
      document.querySelector('.error').innerText = error.message;
      // alert(error.message);
    });
}

btnSearch.addEventListener("click", () => getData(locations.value));