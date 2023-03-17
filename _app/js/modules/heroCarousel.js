//Vil ikke vise det siste bildet/indeksen i arrayen. 

export default async function heroCarousel(events) {
	const heroContainer = document.querySelector('.hero__section--cards');
	const slicedEventArray = events.slice(0, 6);
	const firstImage = slicedEventArray[0];	
	let heroImages = [];
	let currentIndex = 0;


	if (heroContainer) {
		loadFirstImage();
		slicedEventArray.forEach(image => {
			// autoplayCarousel();
			setInterval(autoplayCarousel, 3000);
			renderCarouselHTML(image);
			// formatNewDate(image);
	})
	}

	function loadFirstImage() {
		const firstImageText = firstImage.name;
		const firstImageDate = firstImage.day.localDate;
		const firstimageUrl = firstImage.imageUrl;

		const firstImageCardContainer = document.createElement('div');
		const firstImagePhotoElement = document.createElement('img');
		const firstImageBottom = document.createElement('div');	
		const firstImageTitle = document.createElement('div');
		const firstImageDateNumber = document.createElement('div');

		firstImageCardContainer.classList.add('hero__first--visible');
		firstImagePhotoElement.classList.add('hero__image--visual');
		firstImageBottom.classList.add('hero__image--text');
		firstImageTitle.classList.add('hero__image--text');
		firstImageDateNumber.classList.add('hero__image--date');

		heroContainer.appendChild(firstImageCardContainer);
		firstImageCardContainer.appendChild(firstImagePhotoElement);
		firstImageCardContainer.appendChild(firstImageBottom);
		firstImageBottom.appendChild(firstImageTitle);
		firstImageBottom.appendChild(firstImageDateNumber);

		firstImagePhotoElement.setAttribute('src',firstimageUrl.find(heroImage => heroImage.width > 600)?.url);
		firstImageTitle.innerText = firstImageText;
		firstImageDateNumber.innerText = firstImageDate;

		setInterval(removeClass, 3000);
		function removeClass() {
			firstImageCardContainer.classList.remove('hero__first--visible');

			firstImageCardContainer.classList.add('hero__first--hidden');
		}
	}

	function autoplayCarousel(image) {
		renderCarousel(image);
		increaseSlideIndex(image);
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
	}

}