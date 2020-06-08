import { importWebElement } from "../js/fetch.js";

importWebElement(`profile`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Ingest profile picture.
			this.shadowRoot.querySelector(`img`).src =
				this.shadowRoot.host.getAttribute(`image`);
		})
	}
});
