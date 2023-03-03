export default function renderEventsList(events) {
	const eventsContainer = document.querySelector('.events__list--cards');

	events.forEach(event => {
		renderHTML(event);
	});

	function renderHTML(event) {
		const eventImage = event.imageUrl;
		const eventName = event.name;
		const eventLocation = event.location;
		const eventCity = event.city;
		const eventDate = event.date;
		const eventTime = event.time;
		const eventBuyTicket = event.buyLink;
		const eventTimeIcon = ("../assets/icons/Clock-icon.png");
		const eventLocationPath = ("../assets/icons/Location-icon.png")
	
		const eventCard = document.createElement('div');
		const eventImageElement = document.createElement('img');
		const eventInformation = document.createElement('div');
		const eventInformationLeft = document.createElement('div');
		const eventInformationDate = document.createElement('div');
		const eventInformationIcon = document.createElement('img');
		const eventInformationTime = document.createElement('div');
		const eventInformationCenter = document.createElement('div');
		const eventCenterTitle = document.createElement('div');
		const eventCenterLocation = document.createElement('div');
		const eventLocationIcon = document.createElement('img');
		const eventLocationPlace = document.createElement('div');
		eventLocationPlace.classList.add('event__location--place');
		eventLocationPlace.innerText = eventLocation;
		eventCenterLocation.appendChild(eventLocationPlace);
	
	
		
		eventImageElement.setAttribute('src', eventImage);
		eventInformationDate.innerText = eventDate;
		eventInformationIcon.setAttribute('src', eventTimeIcon);
		eventInformationTime.innerText = eventTime;
		eventCenterTitle.innerText = eventName;
		eventLocationIcon.setAttribute('src', eventLocationPath);
		
		eventCard.classList.add('event__item--card');
		eventImageElement.classList.add('event__item--picture');
		eventInformation.classList.add('event__item--information');
		eventInformationDate.classList.add('event__left--date');
		eventInformationIcon.classList.add('event__time--icon');
		eventInformationTime.classList.add('event__left--time');
		eventInformationCenter.classList.add('event__information--center');
		eventCenterTitle.classList.add('event__center--title');
		eventCenterLocation.classList.add('event__center--location');
		eventLocationIcon.classList.add('event__location--icon');
		
		eventCard.appendChild(eventImageElement);
		eventsContainer.appendChild(eventCard);
		eventsContainer.appendChild(eventInformation);
		eventInformation.appendChild(eventInformationLeft);
		eventInformationLeft.appendChild(eventInformationDate);
		eventInformationTime.appendChild(eventInformationIcon);
		eventInformationLeft.appendChild(eventInformationTime);
		
		eventInformation.appendChild(eventInformationCenter);
		eventInformation.appendChild(eventCenterTitle);
		eventInformation.appendChild(eventCenterLocation);
		eventCenterLocation.appendChild(eventLocationIcon);

	}
}