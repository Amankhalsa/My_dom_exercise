function table(num){
	if(num<=10){
		//if true
	console.log("table of ",2*Number(num))	
	}
	else {
		// if false 
		console.log("Out of range")
	} 
}
function hello(a,b){
	//peramiter
	// return function of java script 
	console.log("code before run ")
	return console.log("result of", a,"x",b,"=",a*b);
	// Terminated after return 
	//function always exit after return 
	console.log("code after run ")

}
// call to function 
table(1)
table(2)
table(3)
table(4)
table(5)
table(6)
table(7)
table(8)
table(9)
table(10)
// 2nd function calling 
console.log("another table")
//2 arguments 
hello(4,5)




