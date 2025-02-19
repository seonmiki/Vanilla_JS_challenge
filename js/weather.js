const API_KEY = "685f4decf1c9e16791f5c36b1a557129";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json()).then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const temp = document.querySelector("#weather span:nth-child(2)");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name;
		temp.innerText = data.main.temp;
		weather.innerText = data.weather[0].main;
	});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);