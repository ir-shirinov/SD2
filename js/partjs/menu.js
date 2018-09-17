var btn = document.querySelector('.page-header__btn');
var menu = document.querySelector('.main-nav');

menu.classList.add('close');
btn.classList.remove('close');
btn.classList.remove('page-header__btn--open');

btn.addEventListener('click', function(){
	menu.classList.toggle('close');
	btn.classList.toggle('page-header__btn--open');
})