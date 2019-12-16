var butMod = document.querySelector('.adress-button');
var showMod = document.querySelector('.modal-contact');
var showClose = showMod.querySelector('.modal-close');

butMod.addEventListener('click', function (evt) {
	evt.preventDefault();
	showMod.classList.add('modal-show');
});

showClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	showMod.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (showMod.classList.contains('modal-show')) {
			evt.preventDefault();
			showMod.classList.remove('modal-show');
		}	
	}
});