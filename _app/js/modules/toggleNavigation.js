export default function toggleNavigation() {
	let navigationVisible = false;

	const navigationMenu = document.querySelector('.header__menu--container');
	// const menuItems = document.querySelectorAll('.header__menu--item');
	const burgerMenuIcon = document.querySelector('.header__navigation--open');
	const closeMenuIcon = document.querySelector('.header__navigation--close');

	if (burgerMenuIcon !== null) {
		burgerMenuIcon.addEventListener('click', handleBurgerMenuIconClick);
	};

	if (closeMenuIcon !== null) {
		closeMenuIcon.addEventListener('click', handleCloseMenuIconClick);
	}

	function handleBurgerMenuIconClick() {
		toggleNavigation();
	}

	function handleCloseMenuIconClick() {
		toggleNavigation();
	}

	function toggleNavigation() {
		navigationVisible = !navigationVisible;

		if (!navigationVisible) {
			navigationMenu.style.display = 'none';
			burgerMenuIcon.style.display = 'inline';
			closeMenuIcon.style.display = 'none';
		} else {
			navigationMenu.style.display = 'block';
			burgerMenuIcon.style.display = 'none';
			closeMenuIcon.style.display = 'inline';
		}
	}
}	