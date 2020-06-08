import { importWebElement } from "../js/fetch.js";

importWebElement(`banner`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Ingest banner background.
			this.shadowRoot.querySelector(`.background`).style.backgroundImage =
				`url('${this.shadowRoot.host.getAttribute(`image`)}')`;
		})
	}
});
