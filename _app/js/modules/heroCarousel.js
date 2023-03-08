export default async function heroCarousel(events) {
	const heroContainer = document.querySelector('.hero__section--cards');
	let heroImages = [];
	
	const slicedEventArray = events.slice(0, 5);
	let currentIndex = 0;

	if (heroContainer != null) {
		slicedEventArray.forEach(image => {
			renderCarouselHTML(image);
			// formatNewDate(image);
		})
	}

	if(heroContainer) {
		// loadFirstImage();
		setInterval(autoplayCarousel, 3000);
	}

	function autoplayCarousel(image) {
		increaseSlideIndex(image);
		renderCarousel(image);
	}

	function increaseSlideIndex() {
		if (currentIndex < heroImages.length -1) {
			currentIndex += 1;
		} else {
			currentIndex = 0;
		}
	}

	function renderCarousel() {
		for (const card of heroImages) {
			card.classList.remove('hero__image--visible');
		}

		heroImages[currentIndex].classList.add('hero__image--visible');
	}

	function renderCarouselHTML(image) {
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

		heroImages = document.querySelectorAll('.hero__image--card');
		
		heroContainer.appendChild(imageCard);
		imageCard.appendChild(heroImage);
		imageCard.appendChild(imageCardBottom);
		imageCardBottom.appendChild(imageCardTitle);
		imageCardBottom.append(imageCardDate);
		
		heroImage.setAttribute('src', eventImage.find(heroImage => heroImage.width > 600)?.url);
		imageCardTitle.innerText = eventName;
		imageCardDate.innerText = eventDate;


		// console.log(eventImage);

	}
}