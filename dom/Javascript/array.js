var list=["car", "moto", "bus","truck"]
console.log(list)
console.log("Another method")
console.log(list[0])
console.log(list[1])
console.log(list[2])
console.log(list)

var obj={
	name:"aman",
	age:29
}
document.write(list ," <br>")
var btn = function call_me(){
	
document.write("<br>Object:<br>")
document.write("Name:",obj.name, "<br> Age:",obj.age)
document.write("<br>");
}

// // testing 
//  var newsFeed = [{ username:'john', timeline:'Yeah i am so exited' },//object 
// //2nd news 
// {username:'Tommy', timeline:'Yeah i am so tired' }]; //2nd object &  list 
//   document.write(newsFeed[0].username);

var pree=["aman","preet"];
document.write("<h1 style='color:red;'>before: ",pree,"</h1>")
document.write();
function pr(){
	var a = prompt("enter value")
	pree.push(a);
	add();
	function add(){
document.getElementById("demo").innerHTML="<h2 style='color:red;'>After: "+pree+"</h2>";
}

}

