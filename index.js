import * as Menu from "./components/menu.js";
import "./components/about.js";
import "./components/competition.js";
import "./components/sponsors.js";
import "./components/join.js";
import "./components/footer.js";

window.addEventListener(`load`, () => {
	// Load fonts synchronously.
  WebFont.load({
    google: {
      families: ['Fjalla One', `Open Sans`]
    }
  });
});

// This event is fired when all components and CSS pages have been loaded.
window.addEventListener(`fouc-load`, () => {
	// Shorthand for selecting a menu item.
	const selectMenuItem = (name) => {
		document.querySelectorAll(`body>div>:not(traders-footer)`).forEach((element) => {
			element.classList.add(`no-display`);
		});
		document.querySelector(`body>div>traders-${name}`)
			.classList.remove(`no-display`);
		document.querySelector(`traders-menu`).updateSelection(name);
		window.location.hash = `#${name}`;
	
		// Clear scrolling
		document.querySelector(`body>[name="main"]`).scrollTo(0, 0);
	};

	window.addEventListener(`traders-menu-update`, (event) => {
		selectMenuItem(event.detail.name);
	});

	// Select About by default, or interpret fragment.
	if (window.location.hash) {
		selectMenuItem(window.location.hash.slice(1));
	} else {
		selectMenuItem(`about`);
	}
	
	// No more FOUC.
	console.log(`Page load complete.`);
	document.body.classList.remove(`loading`);
});
