let data = [
	{quest: "Ввиде какой фигуры сердце у рака", ans: "пятиугольник"},
	{quest: "Назовите самый известный опасный гриб", ans: "мухомор"},
	{quest: "Какое растение дает лучший мед", ans: "липа"},
	{quest: "Название какого растения связано со звоном", ans: "колокольчик"},
	{quest: "Какая нить в природе самая тонкая", ans: "паутина"},
	{quest: "Где у кузнечика ухо", ans: "на ноге"},
	{quest: "Какая самая мелкая птица", ans: "колибри"},
	{quest: "Самое быстрое животное суше", ans: "гепард"},
	{quest: "У кого самый большой язык", ans: "муравьед"},
	{quest: "Какие ноги жирафа длиннее", ans: "передние"}

];

let score = 0;
let name = "";
const len = data.length;


function question(a) {
	$('#info').append('<h1>' + data[0].quest + '</h1>')
	$('#info').append('<input type="text" id="answer" autofocus="true"><input type="submit" onclick="check()">')
			
}

function check() {

	let answer = $('#answer').val().toLowerCase();
	if(answer == data[0].ans) {
		score++;
	}

	// Удаляем использованый вопрос
	data.shift()

	// Удаляем вопрос
	$('#info').empty();
	if(data.length != 0) {
		// Выводим новый вопрос
		question();
	}
	else theEnd();
}

function theEnd(){
	$('#info').append('<h1> Ты набрал '+ score +'/'+ len +' баллов,</h1>');
	if(score <= len/5){
		$('#info').append('<h1>'+ name +', Ты чего? Это же слабый результат. Давай заново.</h1>');
	}
	else if(score <= len/2){
		$('#info').append('<h1>'+ name +', хороший результат, но можно и лучше.</h1>');
	}
	else {
		$('#info').append('<h1>'+ name +', Отличный результат!Ты превзашёл мои ожидания!</h1>');
	}
}

function start() {

	// Получаем и устанавливаем имя
	name = $('#name').val();
	if(name == '') name = 'Инкогнито';

	// Удалить все со страницы

	$('#info').empty();
	//  запуск функции с вопросами 
	question(data[0].quest);	
}
