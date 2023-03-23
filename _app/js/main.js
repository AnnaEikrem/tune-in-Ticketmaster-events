import toggleNavigation from './modules/toggleNavigation.js';
import fetchEvents from './modules/fetchEvents.js';
import renderEventsList from './modules/renderEventsList.js';
import heroCarousel from './modules/heroCarousel.js';
import filterButtons from './modules/filterButtons.js';

// Fetch data from Ticketmaster;
const fetchedData = await fetchEvents();

toggleNavigation();
renderEventsList(fetchedData);
heroCarousel(fetchedData);
filterButtons(fetchedData);


