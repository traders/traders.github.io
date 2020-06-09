import { importWebElement } from "../js/fetch.js";

importWebElement(`profile`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Ingest parameters.
			this.shadowRoot.querySelectorAll(`img`).forEach((element) => {
				element.src = this.shadowRoot.host.getAttribute(`image`);
			});

			// Open profiles.
			this.shadowRoot.querySelector(`img`).addEventListener(`click`, () => {
				this.shadowRoot.host.setAttribute(`open`, ``);
			});
			this.shadowRoot.querySelector(`[name="modal"]`).addEventListener(`click`, () => {
				this.shadowRoot.host.removeAttribute(`open`);
			});
		})
	}
});
