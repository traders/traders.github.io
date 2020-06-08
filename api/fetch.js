/*
* opts: dictionary of request configurations.
	* method: string (`GET`, `POST`, etc.).
	* url: string.
	* headers: mapping from string to string.
	* params: mapping from string to string.
	* responseType: specify `document` to return a document.

Returns a promise which resolves when the XHR finishes.
*/
export function fetch(opts) {
	return new Promise(function (resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open(opts.method || `GET`, opts.url);
		xhr.responseType = opts.responseType || ``;
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(this);
			} else {
				reject({
					status: this.status,
					statusText: this.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: this.statusText
			});
		};
		if (opts.headers) {
			Object.keys(opts.headers).forEach(function (key) {
				xhr.setRequestHeader(key, opts.headers[key]);
			});
		}
		xhr.send(opts.params ? Object.keys(opts.params).map(function (key) {
			return encodeURIComponent(key) + `=` + encodeURIComponent(opts.params[key]);
		}).join(`&`) : ``);
	});
}
