var currentLang = 1;
var minLang = 1;
var maxLang = 2;
var themes = ["html", "cpp"];
var names = ["HTML5", "C++"];
function switchLang(direction,lang) {
	if (!direction) { // Previous language
		if (lang < minLang)
			lang = maxLang;
	} else { // Next language
		if (lang > maxLang)
			lang = minLang;
	}
	$('#lang').fadeOut({
		duration: 250,
		done: function(){$('#lang').fadeIn({
			duration: 250,
			start: function(){switchTheme(lang);}
		});}
	});
	currentLang = lang;
	return false;
}
function switchTheme(index) {
	console.log(index-1);
	$('html').attr('class', themes[index-1]);
	$('#lang').attr('src', 'assets/img/'+themes[index-1]+'.png');
	$('#langpath').attr('href',themes[index-1]);
	$('#langname').html(names[index-1]);
	return;
}

// Preload language images in background
function preload(){
	for (var i = 0; i < themes.length; i++) {
		var img = document.createElement('img');
		img.setAttribute('src','assets/img/'+themes[i]+'.png');
		img.className = 'preload';
		$('body').append(img);
	}
}

window.onload = function(){
	$('#left').click(function(){switchLang(0,currentLang-1);return false;});
	$('#right').click(function(){switchLang(1,currentLang+1);return false;});
	preload();
}
