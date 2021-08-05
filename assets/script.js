// navbar mobile
const menuToggle = document.querySelector('.menu-toggle input');
const ul = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(event) {
	ul.classList.toggle('slide');
});

// progres bar
window.onscroll = function() {myFunction()};

function myFunction() {
	var scroll = document.body.scrollTop || 
	document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (scroll / height) * 100;
	document.getElementById('redBar').style.width = scrolled + "%";
}

// smooth scroll
$(document).ready(function() {
	$('a').on('click', function(e) {
		if (this.hash !== "") {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'swing', function() {
				window.location.hash = hash;
			});
		}
	});
});

// Reveal elements on scroll
window.addEventListener('scroll', reveal);

function reveal() {
	var reveals = document.querySelectorAll('.reveal');

	for (var i = 0; i < reveals.length; i++){

		var winHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 250;

		if(revealTop < winHeight - revealPoint) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
}