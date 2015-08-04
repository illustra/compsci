window.onload = function(){
	// Set nav title to lesson name
	var navTitle = document.getElementById('title');
	navTitle.innerHTML = $('title').html();
	$('.content h1').html($('title').html());

	// Restore theme
	if (typeof(Storage) !== "undefined")
		switchTheme(mem.lessonTheme);

	// Set all links with class 'extlink' to open in new tab
	var externalLinks = document.getElementsByClassName('extlink');
	for (var i = 0; i < externalLinks.length; i++) {
		var currentContent = externalLinks[i].innerHTML;
		externalLinks[i].setAttribute('target', '_blank');
		// Give them a special icon
		//externalLinks[i].innerHTML = currentContent + ' <i class="fa fa-external-link"></i>';
	}

	// Add an ending
	var endDiv = document.createElement('div');
	endDiv.className = 'end';
	endDiv.innerHTML = "<h3>Hooray! You've finished this lesson.</h3>"
	$('.content').append(endDiv);
}

var mem = localStorage;
function togglePrefs(){
	$('#prefs').fadeToggle(300);
	setTimeout(function(){
		if (!$('#prefs').is(':hover') && !$('#prefs').is(':hidden'))
			togglePrefs();
	}, 5000);
}
function switchTheme(themeNo){
	if (!themeNo){
		$('html').removeClass('sepia night');
		$('#shCore').attr('href','../../assets/css/shCoreDefault.css');
		$('#shTheme').attr('href','../../assets/css/shThemeDefault.css');
	} else if (themeNo == 1) {
		$('html').attr('class','sepia');
		$('#shCore').attr('href','../../assets/css/shCoreDefault.css');
		$('#shTheme').attr('href','../../assets/css/shThemeDefault.css');
	} else if (themeNo == 2) {
		$('html').attr('class','night');
		$('#shCore').attr('href','../../assets/css/shCoreFadeToGrey.css');
		$('#shTheme').attr('href','../../assets/css/shThemeFadeToGrey.css');
	}
	mem.lessonTheme = themeNo;
	return false;
}
function switchLessons(direction){
	var lesson = eval($('.title h3').html().split(' ')[1]);
	if (direction)
		window.location.href = '../0' + (lesson+1) + '/';
	else
		window.location.href = '../0' + (lesson-1) + '/';
}