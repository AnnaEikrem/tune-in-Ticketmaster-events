export default function renderEventsList(events) {
	const eventsContainer = document.querySelector('.events__list--cards');

	if (eventsContainer != null) {
		events.forEach(event => {
			renderHTML(event);
		});
	}


	function renderHTML(event) {
		const eventImage = event.imageUrl;
		const eventName = event.name;
		const eventLocation = event.location;
		const eventDate = event.date;
		const eventTime = event.time;
		const eventBuyTicket = event.buyLink;
		const eventTimeIcon = ("../assets/icons/Clock-icon.png");
		const eventLocationPath = ("../assets/icons/Location-icon.png")
		const buyLink = eventBuyTicket;
	

		const eventCard = document.createElement('div');
		const eventImageElement = document.createElement('img');
		const eventInformation = document.createElement('div');
		const eventInformationLeft = document.createElement('div');
		const eventInformationDate = document.createElement('div');
		const eventInformationTime = document.createElement('div');
		const eventInformationIcon = document.createElement('img');
		const eventTimeNumber = document.createElement('div');
		const eventInformationCenter = document.createElement('div');
		const eventCenterTitle = document.createElement('div');
		const eventCenterLocation = document.createElement('div');
		const eventLocationIcon = document.createElement('img');
		const eventLocationPlace = document.createElement('div');
		const eventInformationRight = document.createElement('div');
		const buyButton = document.createElement('button');
		const buyTicketmasterLink = document.createElement('a');
		
	
		eventImageElement.setAttribute('src', eventImage);
		eventInformationDate.innerText = eventDate;
		eventTimeNumber.innerText = eventTime;
		eventInformationIcon.setAttribute('src', eventTimeIcon);
		eventCenterTitle.innerText = eventName;
		eventLocationIcon.setAttribute('src', eventLocationPath);
		eventLocationPlace.innerText = eventLocation;
		buyTicketmasterLink.innerText = 'Kjøp';
		buyTicketmasterLink.setAttribute('href', buyLink)

		eventCard.classList.add('event__item--card');
		eventImageElement.classList.add('event__item--picture');
		eventInformation.classList.add('event__item--information');
		eventInformationLeft.classList.add('event__information--left');
		eventInformationDate.classList.add('event__left--date');
		eventInformationTime.classList.add('event__left--time');
		eventInformationIcon.classList.add('event__time--icon');
		eventTimeNumber.classList.add('event__time--number');
		eventInformationCenter.classList.add('event__information--center');
		eventCenterTitle.classList.add('event__center--title');
		eventCenterLocation.classList.add('event__center--location');
		eventLocationIcon.classList.add('event__location--icon');
		eventLocationPlace.classList.add('event__location--place');
		eventInformationRight.classList.add('event__information--right');
		buyButton.classList.add('event__right--button');
		buyTicketmasterLink.classList.add('buy__button');
		
		
		eventCard.appendChild(eventImageElement);
		eventsContainer.appendChild(eventCard);
		eventCard.appendChild(eventInformation);
		eventInformation.appendChild(eventInformationLeft);
		eventInformationLeft.appendChild(eventInformationDate);
		eventInformationLeft.appendChild(eventInformationTime);
		eventInformationTime.appendChild(eventInformationIcon);
		eventInformationTime.appendChild(eventTimeNumber);
		eventInformation.appendChild(eventInformationCenter);
		eventInformationCenter.appendChild(eventCenterTitle);
		eventInformationCenter.appendChild(eventCenterLocation);
		eventCenterLocation.appendChild(eventLocationIcon);
		eventCenterLocation.appendChild(eventLocationPlace);
		eventInformation.appendChild(eventInformationRight);
		eventInformationRight.appendChild(buyButton);
		buyButton.appendChild(buyTicketmasterLink);

	}
}