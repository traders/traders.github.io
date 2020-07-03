import "./banner.js";
import { importWebElement } from "../js/fetch.js";

importWebElement(`competition`, class extends HTMLElement {
	constructor() {
		super();
		setTimeout(() => {
			// Handler for photo gallery.
			const galleryImg = this.shadowRoot.querySelector(`[name="gallery"]>img`);
			const photos = [
				`./assets/competition/big-room-stata.jpg`,
				`./assets/competition/day-trading-for-dummies.jpg`,
				`./assets/competition/first-place.jpg`,
				`./assets/competition/lots-of-awards.jpg`,
				`./assets/competition/one-person-pool.jpg`,
				`./assets/competition/pool.jpg`,
				`./assets/competition/presentation.jpg`,
				`./assets/competition/sponsors.jpg`,
				`./assets/competition/swapnil-avichal.jpg`,
				`./assets/competition/talking.jpg`,
				`./assets/competition/two-dudes.jpg`,
				`./assets/competition/working.jpg`,
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
