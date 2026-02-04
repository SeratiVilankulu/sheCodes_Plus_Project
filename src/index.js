function updateWeather(response) {
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = Math.round(response.data.temperature.current);
	let city = document.querySelector("#city");
	let description = document.querySelector("#description");
	let humidity = document.querySelector("#humidity");
	let windSpeed = document.querySelector("#wind-speed");
	let currentDate = document.querySelector("#date-time");
	let date = new Date(response.data.time * 1000);
	let icon = document.querySelector("#weather-icon");

	city.innerHTML = response.data.city;
	currentDate.innerHTML = formatDate(date);
	description.innerHTML = response.data.condition.description;
	humidity.innerHTML = `${response.data.temperature.humidity}%`;
	windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
	icon.setAttribute("src", response.data.condition.icon_url);
}

function formatDate(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (hours < 10) {
		hours = `0${hours}`;
	}

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	let daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let day = daysOfWeek[date.getDay()];

	return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
	let apiKey = "c42btd9a6f7of80d48aa81b1c6310a37";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

	axios.get(apiUrl).then(updateWeather);
}

function handleSubmitForm(event) {
	event.preventDefault();
	let search = document.querySelector("#search-form-input");

	searchCity(search.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmitForm);

searchCity("Pretoria");
