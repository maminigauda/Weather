async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5870b796a3d3532ed26c5991f2c21c0d`;
	let response = await fetch(url);
	const data = await response.json();
	// console.log(data);
	let city = document.getElementById("city");
	city.innerHTML = data.name;
	let windSpeed = document.getElementById("windspeed");
	windSpeed.innerHTML = data.wind.speed + "km/hr";
	let humidity = document.getElementById("humidity");
	humidity.innerHTML = data.main.humidity + "g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp) - 273.15) + "°C";
	console.log(data);


}
// fetchWeatherData();


function fetchCity() {
	let cityName = document.getElementById("cityname");
	if(cityName.value == "")
	{
		alert("Enter a City Name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}

	
}