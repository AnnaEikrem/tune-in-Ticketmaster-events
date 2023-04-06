export default function filterButtons(genreData) {
	const buttonsContainer = document.querySelector('.genre__buttons--container');
	const eventGenres = genreData
		.filter ( function (data) {
			return data.genre !== 'Undefined'
		})
		.map(event => event.genre);
	const uniqueGenres = [...new Set(eventGenres)].sort();

	if(buttonsContainer) {
			renderButtonHTML();
	}
	console.log(eventGenres)

	function renderButtonHTML() {
		uniqueGenres.forEach(genre => {
			const buttonElement = document.createElement('button');
			buttonElement.classList.add('genre__button');
			buttonElement.textContent = genre;
			buttonsContainer.appendChild(buttonElement);
		})
	}

}
