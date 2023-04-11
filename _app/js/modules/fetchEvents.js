import { tm_token } from '../env.js';

export default async function fetchEvents() {
	const i = tm_token;
	const eventSize = 100;
	const city = 'Oslo'
	const endpointEventsOslo = `https://app.ticketmaster.com/discovery/v2/events?apikey=${i}&locale=*&size=${eventSize}&city=${city}&countryCode=NO&segmentName=Music`;

	
/*Try/catch funker ikke, viser ikke 'else if' error meldinger. Problem med selve Ticketmaster API. */
	
	const response = await fetch(endpointEventsOslo);
	
	try {
		return await handleResponse(response);
	} catch (error) {
		handleError(error);
	}
}

// Response is a success...
async function handleResponse(response) {
	if(response.ok) {
		const eventResults = await response.json();
		const allData = eventResults._embedded.events.map(data => {
			return {
				name: data.name,
				date: data.dates.start.localDate,
				day: data.dates.start,
				time: data.dates.start.localTime,
				city: data._embedded.venues[0].city,
				location: data._embedded.venues[0].name,
				imageUrl: data.images,
				buyLink: data.url,
				timeStamp: data.dates.start.dateTime,
				segment: data.classifications[0].segment.name,
				genre: data.classifications[0].genre.name,
				genreID: data.classifications[0].genre.id
			}
		});

		return allData;

	} else if(response.status === 404) {
		throw new Error('Url not existing');
	} else if(response.status === 401) {
		throw new Error('Not authorized user');
	} else if(response.status >= 500) {
		throw new Error('Server not responding');
	} else {
		throw new Error('Something went wrong');
	}
};

function handleError() {
	console.log('Something went wrong');
}

