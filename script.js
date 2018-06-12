function init() {
	var operations = document.querySelector(".operations");
	var calculations = document.querySelector(".calculations");
	var numbers = document.querySelector(".numbers");
	screen.innerText = input;

	createDiv(operations, 3, "three");
	createDiv(calculations, 4, "four");
	createDiv(numbers, 12, "twelve");
	
	var three = Array.from(document.querySelectorAll(".three"));
	var four = Array.from(document.querySelectorAll(".four"));
	var twelve = Array.from(document.querySelectorAll(".twelve"));
	var divs = three.concat(four,twelve);

	for (i in divs) divs[i].addEventListener('mouseover',function(e) {
		e.target.classList.add('mouse');
		setTimeout(function() {
			e.target.classList.remove('mouse');
		},300);
	});

	var numpad = ["1","2","3","4","5","6","7","8","9",".","0","-/+"];
	var calculationpad = ["+","-","*","/"];
	var operationpad = ["C","<-","="];

	three[1].classList.add("bg");

	for (i in three) {
		three[i].addEventListener('click',changeNum);
		three[i].innerText = operationpad[i];
	}
	for (i in four) {
		four[i].addEventListener('click',calculate);
		four[i].innerText = calculationpad[i];
	}
	for (i in twelve) {
		twelve[i].addEventListener('click',enterNum);
		twelve[i].innerText = numpad[i];
	}
}
function createDiv (parentClass, num, divClass) {
	for (var i = 0;i < num;i++) {
		var newDiv = document.createElement('div');
		newDiv.id = i + 1;
		newDiv.className = divClass;
		parentClass.appendChild(newDiv);
	}
}
var values = [0,0];
var operator = "0";
var input = "0";
var screen = document.querySelector('#screen');
function changeNum(e) {
	id  = e.target.id;
	if (id == "1") {
		values = [0,0];
		input = "0";
		operator = "0";
	}
	else if (id == "2") {
		if (input.length == 1)
			input = "0";
		else
			input = input.slice(0,input.length - 1);
	}
	else if (id == "3") {
		var res = 0;
		values[1] = parseFloat(input);
		switch (operator) {
			case "0":
			e.target.classList.add('playing');
			setTimeout(function() {
				e.target.classList.remove('playing');
			},300);
			return;
			case "1":
			res = values[0] + values[1];
			break;
			case "2":
			res = values[0] - values[1];
			break;
			case "3":
			res = values[0] * values[1];
			break;
			case "4":
			res = values[0] / values[1];
			break;
		}
		values[0] = res;
		values[1] = 0;
		operator = "0";
		input = res.toString();
	}
	screen.innerText = input;
	e.target.classList.add('playing');
	setTimeout(function() {
		e.target.classList.remove('playing');
	},300);
}
function calculate(e) {
	operator = e.target.id;
	values[0] = parseFloat(input);
	input = "0";
	e.target.classList.add('playing');
	setTimeout(function() {
		e.target.classList.remove('playing');
	},300);
}
function enterNum(e) {
	var id = e.target.id;
	if (input.includes(".") == true && (id == "10" || id == "11" || id == "12")) {
		if (id == "10"){
			e.target.classList.add('playing');
			setTimeout(function() {
				e.target.classList.remove('playing');
			},300);
			return;
		}
		else if (id == "11")
			input = input + "0";
		else if (id == "12")
			input = input + "00";
	}
	else if (id == "10"){
		input = input + ".";
	}
	else if (id == "11"){
		input = parseFloat(input + "0");
	}
	else if (id == "12"){
		if (input.charAt(0) == "-")
			input.slice(1,input.length);
		else
			input = "-" + input;
	}
	else{ 
		input = parseFloat(input + id);
	}
	input = input.toString();
	screen.innerText = input;
	e.target.classList.add('playing');
	setTimeout(function() {
		e.target.classList.remove('playing');
	},300);
}
init();