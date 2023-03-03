import toggleNavigation from './modules/toggleNavigation.js';
import fetchEvents from './modules/fetchEvents.js';
import renderEventsList from './modules/renderEventsList.js';
// import formatDate from './modules/formatDate.js';
import heroCarousel from './modules/heroCarousel.js';

// Fetch data from Ticketmaster;
const fetchedData = await fetchEvents()
;


toggleNavigation();
renderEventsList(fetchedData);
// formatDate();
heroCarousel(fetchedData);


