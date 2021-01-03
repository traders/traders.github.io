import "./banner.js";
import { importWebElement } from "../js/fetch.js";

importWebElement(`competition`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Handler for photo gallery.
			const galleryImg = this.shadowRoot.querySelector(`[name="gallery"]>img`);
			const photos = [
				`./assets/competition/competition1.jpg`,
				`./assets/competition/competition2.jpg`,
				`./assets/competition/competition3.jpg`,
				`./assets/competition/competition4.jpg`,
				`./assets/competition/competition5.jpg`,
				`./assets/competition/competition6.jpg`,
				`./assets/competition/competition7.jpg`,
				`./assets/competition/competition8.jpg`,
				`./assets/competition/competition9.jpg`,
			];
			galleryImg.src = photos[0];
			galleryImg.setAttribute(`idx`, `0`);
			const intervalMs = 5000;
			let hInterval;

			this.shadowRoot.querySelector(`h3`).innerHTML += ` (${photos.length} photos)`;

			const incrementPhotoGallery = () => {
				const curIdx = Number(galleryImg.getAttribute(`idx`));
				const nextIdx = (curIdx + 1) % photos.length;
				galleryImg.src = photos[nextIdx];
				galleryImg.setAttribute(`idx`, nextIdx.toString());
				window.clearInterval(hInterval);
				hInterval = window.setInterval(incrementPhotoGallery, intervalMs);
			};

			hInterval = window.setInterval(incrementPhotoGallery, intervalMs);
			galleryImg.addEventListener(`click`, incrementPhotoGallery);
		})
	}
});
