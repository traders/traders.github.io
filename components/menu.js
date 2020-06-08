import "./menu-item.js";
import { importWebElement } from "../js/fetch.js";

importWebElement(`menu`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Select menu item.
			this.shadowRoot
				.querySelector(`*[name="${this.shadowRoot.host.getAttribute("selection")}"]`)
				.classList.add(`selected`);

			// Remove menu item selection.
			const removeMenuSelection = () => {
				this.shadowRoot.querySelectorAll(`traders-menu-item`).forEach((element) => {
					element.classList.remove(`selected`);
				});
			};
			
			// Create click handlers for all menu items.	
			this.shadowRoot.querySelectorAll(`traders-menu-item`).forEach((element) => {
				element.addEventListener(`click`, () => {
					this.dispatchEvent(new CustomEvent(`traders-menu-${element.getAttribute(`name`)}`, {
						bubbles: true
					}));

					// Update menu selection.
					removeMenuSelection();
					element.classList.add(`selected`);
				});
			});
		})
	}
})
