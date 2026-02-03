function handleSearchCity(event) {
	event.preventDefault();
	let search = document.querySelector("#search-form-input");
	let city = document.querySelector("#city");
	city.innerHTML = search.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchCity);
