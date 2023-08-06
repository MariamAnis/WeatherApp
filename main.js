// var day = document.getElementById('card-head');
// var temp = document.getElementById('temp');
// var city = document.getElementById('city');
// var condition = document.getElementById('condition');
// var icon = document.getElementById('icon');
// var humid = document.getElementById('humid');
// var wind = document.getElementById('wind');
// var direc = document.getElementById('direc');
var Row = document.getElementById('Row');
var search = document.getElementById('search');
var input = document.getElementById('cit');
var array = [];
var box = '';
async function getData() {
    var data = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9110937290824ec7ad9104006230608&q=Cairo&&days=3')
    data = await data.json();
    array = data;
    console.log(array)
    displayForecast(array);

}
getData();


search.addEventListener('click', async function () {
    var searcharr = [];
    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9110937290824ec7ad9104006230608&q=${input.value} &&days=3`)
    data = await data.json();
    searcharr = data;
    displayForecast(searcharr);
    input.value = '';

})

function displayForecast(arr) {
    box = '';
    for (var i = 0; i < 3; i++) {
        var date = new Date(array.forecast.forecastday[i].date).toString();
        console.log(date)
        datearr = date.split(" ");
        box += `<div class="col-md-4">
        <div class="card mt-5">
            <div class="card-header text-center"id="card-head">
              ${datearr[0]}
            </div>
            <div class="card-body">
              <div class="container">
                <h5 class="card-title"id="city">${arr.location.name}</h5>
              <div class="row">
                <div class="col-md-12 text-center">
                  <h1 id="temp" class="current">${arr.forecast.forecastday[i].day.maxtemp_c + `<sup>o</sup>` + `C`}</h1>
                </div>
                <div class="col-md-12 text-center" >
                  <img id="icon" src="${arr.forecast.forecastday[i].day.condition.icon}" class="w-25">
                </div>
              </div>
              
              <span id="condition" class="pt-5 d-block mb-4">${arr.forecast.forecastday[i].day.condition.text}</span>
              <img src="img/icon-umberella.png"><span id="humid" class="m-2">${arr.forecast.forecastday[i].day.avghumidity + " " + `%`}</span>
              <img src="img/icon-wind.png"><span id="wind"class="m-2">${arr.forecast.forecastday[i].day.maxwind_kph + " " + `Km\h`}</span>
              <img src="img/icon-compass.png"><span id="direc"class="m-2">${arr.forecast.forecastday[i].hour[i].wind_dir}</span>
              </div>
              
            </div>
          </div>
    </div>
        `
    }
    Row.innerHTML = box;
}