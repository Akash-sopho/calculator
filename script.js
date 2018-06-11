function init() {
	var operations = document.querySelector(".operations");
	var calculations = document.querySelector(".calculations");
	var numbers = document.querySelector(".numbers");

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
		twelve[i].addEventListener('click',changebg);
		twelve[i].innerText = numpad[i];
	}
}

function createDiv (parentClass, num, divClass) {
	for (var i = 0;i < num;i++) {
		var newDiv = document.createElement('div');
		newDiv.id = i;
		newDiv.className = divClass;
		parentClass.appendChild(newDiv);
	}
}
function changebg(event) {

	event.target.style.backgroundColor = 'gray';
}
init();