import toggleNavigation from './modules/toggleNavigation.js';
import fetchEvents from './modules/fetchEvents.js';
import renderEventsList from './modules/renderEventsList.js';
import heroCarousel from './modules/heroCarousel.js';
// import getGenres from './modules/getGenres.js';
import filterButtons from './modules/filterButtons.js';

// Fetch data from Ticketmaster;
const fetchedData = await fetchEvents();
// const allGenres = getGenres();

toggleNavigation();
renderEventsList(fetchedData);
heroCarousel(fetchedData);
// getGenres(fetchedData);
filterButtons(fetchedData);


