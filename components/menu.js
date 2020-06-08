import "./menu-item.js";
import * as fetch from "../js/fetch.js";

export function importWebElement() {
	return fetch.importWebElement(`menu`, class extends HTMLElement {
		constructor() {
			super();
			setTimeout(() => {
				// Select about by default.
				this.updateSelection(`about`);
	
				// Create click handlers for all menu items.	
				this.shadowRoot.querySelectorAll(`traders-menu-item`)
					.forEach((element) => {
						const name = element.getAttribute(`name`);
	
						element.addEventListener(`click`, () => {
							this.dispatchEvent(
								new CustomEvent(`traders-menu-update`, {
									bubbles: true,
									detail: {
										name: name
									}
								}));
	
							// Update menu selection.
							this.updateSelection(name);
						});
					});
			})
		}
	
		updateSelection(name) {
			this.shadowRoot.querySelectorAll(`traders-menu-item`)
				.forEach((element) => {
					element.classList.remove(`selected`);
				});
			this.shadowRoot
				.querySelector(`*[name="${name}"]`)
				.classList.add(`selected`);
		}
	});
}

