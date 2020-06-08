import { fetch } from "./api/fetch.js";

fetch({
	url: `./components/menu.html`,
	responseType: `document`
}).then((xhr) => {
	document.body.appendChild(xhr.responseXML.querySelector(`template`).content.cloneNode(true));
	document.body.appendChild(xhr.responseXML.querySelector(`template`).content.cloneNode(true));
});
