// var age = prompt("Enter you age");
// if(Number(age)>=18){
// 	alert("You are welcome");
// }
// else{
// 	alert("You are too young to enter");
// }


// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter", function(){
// 	console.log("clicked");
// })


var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
	console.log("click is working");
	if (input.value.length > 0) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
else{
	alert("Please enter note");
}
}
)


input.addEventListener("keypress", function(event){
	console.log("click is working");
	if (input.value.length > 0 && event.keyCode === 13) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
}
)