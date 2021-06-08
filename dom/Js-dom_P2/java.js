// example 1
// var button = document.getElementsByTagName('button')[0]
// button.addEventListener("click",function(){
// 	console.log("clicked")
// })
// example 2
// var button = document.getElementsByTagName('button')[0]
// button.addEventListener("mouseenter",function(){
// 	console.log("clicked")
// })
// example3
// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });
// example 4
// var button = document.getElementsByTagName('button')[0]
// button.addEventListener("mouseleave",function(){
// 	console.log("clicked")
// })

// example5
var button = document.getElementById('enter');
var input= document.getElementById("userinput");
var ul= document.querySelector("ul");

button.addEventListener("click",function(){
if(input.value.length > 0){

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);

	console.log(input.value)
	input.value=""


}else {
	if (true) {
	document.getElementById("demo").innerHTML="<span style='color:red; font-weight:bolder; font-size:2em;'>Please enter value</span>";

	
}



}	
})




var button2 = document.querySelector('li')
button2.addEventListener("mouseleave",function(){
	document.getElementById("demo").remove();

	
})




// U web code

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");


// function inputLength(){
// 	return input.value.length;
// }

// function ListElement(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = ""
// }


// button.addEventListener("click",function(){
// 	if (inputLength() >0 ) 
// 		ListElement()
// })

// input.addEventListener("keypress",function(event){
// 	if (inputLength() >0 && event.keyCode ===13) 
// 	ListElement()
// })