export default async function fetchEvents() {
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
			imageUrl: data.images[0].url,
			buyLink: data.url,
		}
	});

	return allData;

	// console.log(allData);
	// console.log(eventResults);
	// console.log(eventResults._embedded.events)
	// console.log(eventResults);
	
}