import { importWebElement } from "../js/fetch.js";

importWebElement(`profile`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Ingest parameters.
			const imageAttribute = this.shadowRoot.host.getAttribute(`image`);
			this.shadowRoot.querySelectorAll(`img`).forEach((element) => {
				element.src = imageAttribute || `./assets/profiles/default.png`;

				// Make image green if it's the default. TODO: hack.
				if (!imageAttribute) {
					element.style = `filter: invert(58%) sepia(23%) saturate(6270%) hue-rotate(118deg) brightness(95%) contrast(101%);`;
				}
			});

			// Open profiles.
			// this.shadowRoot.querySelector(`img`).addEventListener(`click`, () => {
			// 	this.shadowRoot.host.setAttribute(`open`, ``);
			// });
			// this.shadowRoot.querySelector(`[name="modal"]`).addEventListener(`click`, () => {
			// 	this.shadowRoot.host.removeAttribute(`open`);
			// });
		})
	}
});
