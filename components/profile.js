import { importWebElement } from "../js/fetch.js";

importWebElement(`profile`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Ingest parameters.
			this.shadowRoot.querySelector(`img`).src =
				this.shadowRoot.host.getAttribute(`image`);
		})
	}
});
