export default async function fetchEvents() {
	const endpointEventsOslo = 'https://app.ticketmaster.com/discovery/v2/events?apikey=X8qgmCZMjDFoChlGd2mZXPbwpVSTvH9A&locale=*&size=200&city=Oslo&countryCode=NO&segmentName=Music';

	const response = await fetch(endpointEventsOslo);
	const results = await response.json();

	console.log(results);
}