var css = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient")
var para= document.getElementById("paraWell")
var color3=document.getElementById("colorWell")



function colorchanger() {
	body.style.background = 
	"linear-gradient(to right,"+color1.value+","+color2.value+")";
// console.log(color1.value)

document.getElementById("aman").innerHTML="<span style='font-size:2em; font-weight:bolder;'>Color 1 is:"+color1.value+"</span>";
document.getElementById("aman2").innerHTML="<span style='font-size:2em; font-weight:bolder;'>Color 2 is:"+color2.value+"</span>";

}

function paracolor(){
	para.style.color = color3.value;
	para.style.background = "lightyellow";
	para.style.fontWeight = "bolder";
	para.style.width = "0 auto";
	para.style.marginTop = "250px";

	para.style.marginBottom = "0px";


	


// console.log(color1.value)


}
color3.addEventListener("input",paracolor)
color1.addEventListener("input",colorchanger)
color2.addEventListener("input",colorchanger)


