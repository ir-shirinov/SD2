// Открытие/закрытие меню и прячем меню, если работает js
var btn = document.querySelector('.page-header__btn');
var menu = document.querySelector('.main-nav');

menu.classList.add('close');
btn.classList.remove('close');
btn.classList.remove('page-header__btn--open');

btn.addEventListener('click', function(){
	menu.classList.toggle('close');
	btn.classList.toggle('page-header__btn--open');
}); 
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