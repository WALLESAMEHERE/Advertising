window.onload = function() 
{
	(function loader (){
		var preload = document.getElementById('preload');
		setTimeout(function(){ 
			preload.style.display = "none";
			animation();
		}, 4000);
	})();
	function animation (){
		var container = document.getElementById('cont');
	    var front = document.getElementById('front');
	    var location = document.getElementById('location');
	    var develop = document.getElementById('develop');
	    var line = document.getElementById('line');
	    var requir = document.getElementsByClassName('req-box');
	    var write = document.getElementById('write');
	    var home = document.getElementById('home');
	    container.classList.add('animated','bounceInDown');
		front.classList.add('zoomIn','animated');
		location.classList.add('animated','fadeInLeft');
		develop.classList.add('animated','fadeInRight'); 
		line.classList.add('animated','bounceInUp');
		(function(){
			for (var i = 0;i < requir.length;i++){
				
				requir[i].classList.add('animated','flipInX');
			}
		})();
		write.classList.add('animated','slideInUp');
		home.classList.add('animated','flipInY');
	}
};  