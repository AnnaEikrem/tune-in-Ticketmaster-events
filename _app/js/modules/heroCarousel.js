export default function heroCarousel(events) {
	const heroContainer = document.querySelector('.hero__section--cards');

	if (heroContainer != null) {

		events.forEach(image => {
			renderCarousel(image);
		})
	}




	function renderCarousel(image) {
		const eventImage = image.imageUrl;
		const eventName = image.name;
		const eventDate = image.date;
		
		const imageCard = document.createElement('div');
		const heroImage = document.createElement('img');
		const imageCardBottom = document.createElement('div');
		const imageCardTitle = document.createElement('div');
		const imageCardDate = document.createElement('div');
		
		imageCard.classList.add('hero__image--card');
		heroImage.classList.add('hero__image--visual');
		imageCardBottom.classList.add('hero__image--text');
		imageCardTitle.classList.add('hero__image--title');
		imageCardDate.classList.add('hero__image--date');
		
		heroContainer.appendChild(imageCard);
		imageCard.appendChild(heroImage);
		imageCard.appendChild(imageCardBottom);
		imageCardBottom.appendChild(imageCardTitle);
		imageCardBottom.append(imageCardDate);
		
		heroImage.setAttribute('src', eventImage);
		imageCardTitle.innerText = eventName;
		imageCardDate.innerText = eventDate;
	}
}