// import { tm_token } from "../env.js";

export default async function fetchEvents() {
	// const i = tm_token; // Får blokkert pga. CORS policy error
	// const eventSize = '200'

	const endpointEventsOslo = 'https://app.ticketmaster.com/discovery/v2/events?apikey=X8qgmCZMjDFoChlGd2mZXPbwpVSTvH9A&locale=*&size=200&city=Oslo&countryCode=NO&segmentName=Music';

	const response = await fetch(endpointEventsOslo);
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
			timeStamp: data.dates.start.dateTime
		}
	});

	return allData;
}