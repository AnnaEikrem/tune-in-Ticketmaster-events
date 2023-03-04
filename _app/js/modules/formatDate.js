export default function formatDate(events) {
	events.forEach (event => {
		formatNewDate(event)
	});

	function formatNewDate(event) {
		const getDate = event.date.split('-');

		const timeStamp = event.timeStamp;
		console.log(timeStamp);
		// console.log(event);

		const formattedDate = new Date(timeStamp);

		const days = [
			'Søndag',
			'Mandag',
			'Tirsdag',
			'Onsdag',
			'Torsdag',
			'Fredag',
			'Lørdag',
		];

		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'Mai',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Okt',
			'Nov',
			'Des',
		];

		const daysString = days[formattedDate.getDay()];
		const currentMonth = months[formattedDate.getMonth()];

		const eventDate = getDate[2];
		const eventDay = daysString;
		const eventMonth = currentMonth;

		// console.log( `${eventDate}. ${eventMonth}.${eventDay}`);

	}
}