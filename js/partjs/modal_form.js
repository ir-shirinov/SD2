var formSubmit = document.querySelector('.form__btn');
var modalError = document.querySelector('.modal--error');
var modalSend = document.querySelector('.modal--send');
var modalClose = document.querySelector('.modal__close');
var name = document.querySelector('#name');
var surname = document.querySelector('#surname');
var tel = document.querySelector('#tel');
var email = document.querySelector('#email');

formSubmit.addEventListener('click', function(evt){
	modalSend.classList.add('modal--open');
});

modalClose.addEventListener('click', function(evt){
	modalSend.classList.remove('modal--open');
});