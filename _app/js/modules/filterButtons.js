export default function filterButtons(genreData) {
	const buttonsContainer = document.querySelector('.genre__buttons--container');
	const eventGenres = genreData.map(event => event.genre)

	const uniqueGenres = [...new Set(eventGenres)]

	if(buttonsContainer) {
		for (let i = 0; i < uniqueGenres.length; i++)
			renderButtonHTML();
	}

	// console.log(genreData.genre)
	function renderButtonHTML() {
		const genreText = uniqueGenres;
		const buttonElement = document.createElement('button');

		buttonElement.classList.add('genre__button');

		buttonElement.textContent = genreText

		buttonsContainer.appendChild(buttonElement);
		console.log(uniqueGenres)
	}

		// function renderButtonHTML(genre) {
		// 	const genreName = genre.genre;
		// 	const genreID = genre.genreID;
		// 	const genreButton = document.createElement('button');

		// 	genreButton.innerText = genreName;
		// 	genreButton.classList.add('genre__button')
		// 	genreButton.dataset.id = genreID;
		// 	genreButton.addEventListener('click', () => {
		// 		getEventsByGenre(genreID);
		// 	});

		// 	buttonsContainer.appendChild(genreButton);
		// }

		// function getEventsByGenre() {
		// 	this.target.genreID
		// }

}