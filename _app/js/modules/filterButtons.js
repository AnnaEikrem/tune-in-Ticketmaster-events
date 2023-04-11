import renderEventsList from './renderEventsList.js';

/**
 * @todo Make filterButtons as a select html, with the genres as options in mobile version. 
 * @todo When genre button is re-clicked, add the rest of the events at the top of the events container. 
 */


export default function filterButtons(genreData) {
	let filteredEvents = [];
	const buttonsContainer = document.querySelector('.genre__buttons--container');
	const eventsContainer = document.querySelector('.events__list--cards');
	const eventGenres = genreData
		.filter ( function (data) {
			return data.genre !== 'Undefined'
		})
		.map(event => event.genre);
	const uniqueGenres = [...new Set(eventGenres)].sort();

	if(buttonsContainer) {
			renderButtonHTML();
	}

	function handleFilterButtonClick(event) {
		const currentEvent = event.target.innerText
		const currentFilterButton = event.target;
		const allFilterButtons = event.target.parentElement.querySelectorAll('button');

		toggleClass(allFilterButtons, currentFilterButton);
		// filterEvents(currentEvent);
		if (filteredEvents.length > 0 && filteredEvents[0].genre === currentEvent) {
			filteredEvents = [];
			renderEventsList(genreData);
		 } else {
			filterEvents(currentEvent);
		 }
	}

	function toggleClass(allFilterButtons, currentFilterButton) {
		allFilterButtons.forEach(button => {
			button.classList.remove('filtered__event--active');
		});

		currentFilterButton.classList.add('filtered__event--active');
	}

	function filterEvents(currentFilterButton) {
		switch (currentFilterButton) {
			case 'Alternative':
				filteredEvents = genreData.filter(event => event.genre === 'Alternative');
				break;
			 case 'Blues':
				filteredEvents = genreData.filter(event => event.genre === 'Blues');
				break;
			 case 'Classical':
				filteredEvents = genreData.filter(event => event.genre === 'Classical');
				break;
			 case 'Cultural':
				filteredEvents = genreData.filter(event => event.genre === 'Cultural');
				break;
			 case 'Dance/Electronic':
				filteredEvents = genreData.filter(event => event.genre === 'Dance/Electronic');
				break;
			 case 'Fairs & Festivals':
				filteredEvents = genreData.filter(event => event.genre === 'Fairs & Festivals');
				break;
			 case 'Folk':
				filteredEvents = genreData.filter(event => event.genre === 'Folk');
				break;
			 case 'Hip-Hop/Rap':
				filteredEvents = genreData.filter(event => event.genre === 'Hip-Hop/Rap');
				break;
			 case 'Jazz':
				filteredEvents = genreData.filter(event => event.genre === 'Jazz');
				break;
			 case 'Metal':
				filteredEvents = genreData.filter(event => event.genre === 'Metal');
				break;
			 case 'Music':
				filteredEvents = genreData.filter(event => event.genre === 'Music');
				break;
			 case 'Other':
				filteredEvents = genreData.filter(event => event.genre === 'Other');
				break;
			 case 'Pop':
				filteredEvents = genreData.filter(event => event.genre === 'Pop');
				break;
			 case 'R&B':
				filteredEvents = genreData.filter(event => event.genre === 'R&B');
				break;
			 case 'Reggae':
				filteredEvents = genreData.filter(event => event.genre === 'Reggae');
				break;
			 case 'Rock':
				filteredEvents = genreData.filter(event => event.genre === 'Rock');
				break;
			 case 'Theatre':
				filteredEvents = genreData.filter(event => event.genre === 'Theatre');
				break;
			 case 'World':
				filteredEvents = genreData.filter(event => event.genre === 'World');
				break;
			 default:
				filteredEvents = genreData;
		  }

			eventsContainer.innerText = '';
			renderEventsList(filteredEvents);
	}

		function renderButtonHTML() {
		// const selectElement = document.createElement('select');
		// selectElement.classList.add('genre__select');
		// buttonsContainer.appendChild(selectElement);

		uniqueGenres.forEach(genre => {
			const buttonElement = document.createElement('button');
			buttonElement.classList.add('genre__button');
			buttonElement.textContent = genre;
			buttonsContainer.appendChild(buttonElement);

			buttonElement.addEventListener('click', handleFilterButtonClick);
		})
	}

}