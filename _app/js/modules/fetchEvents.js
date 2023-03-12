import { tm_token } from "../env.js";

export default async function fetchEvents() {
	const i = tm_token;
	const eventSize = 200;
	const city = 'Oslo'

	const endpointEventsOslo = `https://app.ticketmaster.com/discovery/v2/events?apikey=${i}&locale=*&size=${eventSize}&city=${city}&countryCode=NO&segmentName=Music`;


	const response = await fetch(endpointEventsOslo);
	const eventResults = await response.json();
	
	// if (eventResults === response.ok) {

	// }
	// Legg til try/catch
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
			subGenre: data.classifications[0].subGenre.name,
			id: data.classifications[0].subGenre.id
		}
	});

	return allData;
}