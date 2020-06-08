import * as Menu from "./components/menu.js";
import "./components/about.js";
import "./components/competition.js";
import "./components/sponsors.js";
import "./components/join.js";

window.addEventListener(`load`, () => {
	const selectMenuItem = (name) => {
		document.querySelectorAll(`body>div>*`).forEach((element) => {
			element.classList.add(`no-display`);
		});
		document.querySelector(`body>div>traders-${name}`)
			.classList.remove(`no-display`);
		document.querySelector(`traders-menu`).updateSelection(name);
	};

	window.addEventListener(`traders-menu-update`, (event) => {
		selectMenuItem(event.detail.name);
	});

	// Select About by default.
	Menu.importWebElement().then(() => {
		selectMenuItem(`about`);
	});
});
