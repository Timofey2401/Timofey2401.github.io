function theme() {
	let color = $('#color option:selected').text();


	if (color == 'Светлая тема' ) {
		$('body').css('background', 'white');
		$('body').css('color', 'black');
	}
	if (color == 'Норм тема' ) {
		$('body').css('background', '#FA18FF)');
		$('body').css('color', 'blue');
	}	
	if (color == 'МЕМ тем' ) {
		$('body').css('background', 'url(img/гиф.gif)');
		$('body').css('color', 'blue');
	}
	else if (color == 'Тёмная тема') {
		$('body').css('background', 'black');
		$('body').css('color', 'white');
	}
	else {
		$('body').css('background', '#00897b');
		$('body').css('color', 'aqua');
	}


}
