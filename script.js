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

	var numpad = ["1","2","3","4","5","6","7","8","9",".","0","00"];
	var calculationpad = ["+","-","*","/"];
	var operationpad = ["CLEAR","BACK","="];

	for (i in three) {
		three[i].addEventListener('click',changebg);
		three[i].innerText = operationpad[i];
	}
	for (i in four) {
		four[i].addEventListener('click',changebg);
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
var input = "0";
var screen = document.querySelector('#screen');
function changebg(event) {
	event.target.style.backgroundColor = 'gray';
	screen.innerText = input;
}
function enterNum(e) {
	var id = e.target.id;
	if (input.includes(".") == true && (id == "10" || id == "11" || id == "12")) {
		if (id == "10")
			return;
		else if (id == "11")
			input = input + "0";
		else if (id == "12")
			input = input + "00";
	}
	else if (id == "10"){
		input = input + ".";
		console.log(input);
	}
	else if (id == "11"){
		input = parseFloat(input + "0");
	}
	else if (id == "12"){
		input = parseFloat(input + "00");
	}
	else{ 
		input = parseFloat(input + id);
	}
	input = input.toString();
	screen.innerText = input;
}
init();