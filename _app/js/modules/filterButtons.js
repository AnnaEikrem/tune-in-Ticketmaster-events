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
		const genreID = genre.genreID
		// console.log(genreName)
		console.log(genreID)
	}

}