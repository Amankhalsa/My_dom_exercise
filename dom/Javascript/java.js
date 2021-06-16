

// function table(a,b) {
// 	if (a > 10  || b > 10) {
// 		return "A or b is higher than 10"
// 	} else { 
// 		return (a*b);
// 	}
// }


// table(2,3)

// parameter vs argument

var list = ["item1","item2", "item3", "item4"]

console.log(list[0])

console.log(list[1])

console.log(list[2])

console.log(list[3])


var num = [1,2,3,4,5]
var fun = [ function bye() {console.log('Apple bye')}, function chao() {console.log('Apple chao')}]
var boolean = [true,false,false, true]

var mixed_list = [2,'string',false,function bye() {console.log('Apple bye')} ]


var list_holder = [num,fun,boolean,mixed_list]
