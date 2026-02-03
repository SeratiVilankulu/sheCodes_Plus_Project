function updateWeather(response) {
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = Math.round(response.data.temperature.current);

	let city = document.querySelector("#city");
	city.innerHTML = response.data.city;
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
