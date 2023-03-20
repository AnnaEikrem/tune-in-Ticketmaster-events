export default function filterButtons(genres) {
	const allData = genres;
	const buttonsContainer = document.querySelector('.genre__buttons--container');

	if(buttonsContainer) {
		allData.forEach(genre => {
			renderButtonHTML(genre);
		})
	}

		function renderButtonHTML(genre) {
			const genreName = genre.genre;
			const genreID = genre.genreID;
			const genreButton = document.createElement('button');

			genreButton.innerText = genreName;
			genreButton.classList.add('genre__button')
			genreButton.dataset.id = genreID;
			genreButton.addEventListener('click', () => {
				getEventsByGenre(genreID);
			});

			buttonsContainer.appendChild(genreButton);
		}

		function getEventsByGenre(genreID) {
			console.log(allData)
		}

}