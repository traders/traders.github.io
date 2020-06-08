import "./components/menu.js";

window.addEventListener(`load`, () => {
	window.addEventListener(`traders-menu-about`, () => {
		console.log(`about`);
	});
	
	window.addEventListener(`traders-menu-competition`, () => {
		console.log(`competition`);
	});
	
	window.addEventListener(`traders-menu-sponsors`, () => {
		console.log(`sponsors`);
	});
	
	window.addEventListener(`traders-menu-join`, () => {
		console.log(`join`);
	});
});
