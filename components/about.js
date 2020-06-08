import "./banner.js";
import "./profile.js";
import { importWebElement } from "../js/fetch.js";

importWebElement(`about`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Create handlers for buttons.
			new Map([
				[`compete`, `competition`],
				[`sponsor`, `sponsors`],
				[`join`, `join`]
			]).forEach((menuName, buttonName) => {
				this.shadowRoot.querySelector(`traders-banner[name="${buttonName}"] button`)
				.addEventListener(`click`, () => {
					this.dispatchEvent(
						new CustomEvent(`traders-menu-update`, {
							bubbles: true,
							detail: {
								name: menuName
							}
						}));
				});
			});
		})
	}
});
