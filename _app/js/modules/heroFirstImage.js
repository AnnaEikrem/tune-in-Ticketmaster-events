export default async function renderFirstHeroImage(images) {
	const firstHeroContainer = document.querySelector('.hero__first--visible');
	const heroFirstImage = images.slice(0,1);
	
	const firstImage = heroFirstImage;

	function renderImageCard() {
		const firstImageText = heroFirstImage[0].name;
		const firstImageDate = heroFirstImage[0].day.localDate;
		const firstimageUrl = heroFirstImage.imageUrl;
		// const imagesArray = firstimageUrl.map(image => {
		// 	image.
		// })

		console.log(firstimageUrl);




		const firstImageCardContainer = document.createElement('div');
		const firstImageDateNumber = document.createElement('div');
		const firstImagePhotoElement = document.createElement('img');

		firstImageCardContainer.classList.add('.hero__image--visible');
		firstImageDateNumber.classList.add('hero__image--date');
		firstImagePhotoElement.classList.add('hero__image--visual');

		firstImageCardContainer.innerText = firstImageText;
		firstImageDateNumber.innerText = firstImageDate;
		// firstImagePhotoElement.setAttribute('src', firstimageUrl.find(image => image.width > 600)?.url);


		firstHeroContainer.appendChild(firstImageCardContainer);
		firstImageCardContainer.appendChild(firstImageDateNumber);
		firstImageCardContainer.appendChild(firstImagePhotoElement);


		// const visibleImageElement = document.createElement('div');
		
		// visibleImageContainer.classList.add('hero__image--card');
		// visibleImageElement.classList.add('hero__image--visual');
		// heroFirstVisible.appendChild(visibleImageContainer);
		// visibleImageContainer.appendChild(visibleImageElement);




		// console.log(firstImage);


		// visibleImageElement.setAttribute('src', image.find(heroImage => heroImage.width > 600)?.url);

		// console.log(eventImage);

		// console.log(firstVisibleImage);
		// console.log(slicedEventArray);
	// }
	}





	renderImageCard();



}