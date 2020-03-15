window.onload = function() {
	function getRandomNumber(size) {
		return Math.floor(Math.random()*size)
	}

	function getDistance(event, target) {
		let difX = event.offsetX - target.x;
		let difY = event.offsetY - target.y;
		return Math.sqrt((difX*difX)+(difY*difY))
	}

	let width = $('#map').width();
	let height = $('#map').height();
	let clicks = 0;
	let popitki = 50;

	// Coздайм клад со случайными координатами
	let target = {
		x:getRandomNumber(width),
		y:getRandomNumber(height),
	};

	

	function getHint(distance) {
		if(distance <= 20 )
			return 'Ты нашел клад!'
		if(distance < 40 ){
			return 'ОЧЕНЬ ГОРЯЧО!!!'
		}
		if(distance < 70 ){
			return 'Горячо'
		}
		if(distance < 100 ){
			return  'Жарко'
		}
		if(distance < 150 ){
			return 'Не холодно не горячо'
		}
		if(distance < 200 ){
			return 'Холодновато'
		}
		if(distance < 300 ){
			return 'Холодно'
		}
		if(distance >= 300 ){
			return 'ЛЕДНИКОВЫЙ ПЕРИОД!!!'

		}
	}
	// Устанавливаем курсор при наведении на картинку
	$('#map').css('cursor', 'pointer');
	// Добавляем картинке обработчик кликов
	$('#map').click(function(event) {
		// Увеличиваем счётчик кликов
		popitki--
		clicks++
		$('#clicks').text('Вы кликнули '+ clicks)
		$('#popitki').text('У вас осталось '+ popitki +' кликов')
		// Получаем раастояние до места клика
		let distance = getDistance(event, target)
		let hint = getHint(distance);
		$('#heading').text(hint)
		if (distance <= 20) {
			$('body').empty()
			$('body').append('<div class="KonecW"><h1>Ты выйграл!!! Поздравляю</h1></div>')
			$('body').append('<button onclick="location.reload()>" Начать заново</button>')
		}
		if (popitki <= 0) {
			$('body').empty()
			$('body').append('<div class="KonecP"><h1>Ты проиграл((</h1></div>')
			$('body').append('<button onclick="location.reload()>" Начать заново</button>')
		}
	});
}