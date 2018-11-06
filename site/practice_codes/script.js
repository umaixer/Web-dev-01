/*

var message="in global"
console.log("global message = " + message)
var a =function(){
	var message="inside a"
console.log(" a:message " + message) 
b();
}

function b(){
	console.log(" b:message " + message)
}
a();


*/

// var x=5;
// x=6;
// console.log(x);

// function order(sidedish){
// 	sidedish= sidedish || "whatever";
// }

// var company = new Object();
// company.name="Trugreen";
// company.ceo=new Object();
// company.ceo.firstname="Mig"
// company.ceo.car="Ram"
// company["VP sales"]="pat";

// console.log("first name is " + company.ceo.firstname);
// console.log("compan name is " + company["name"]);
// console.log("VP sales is " + company["VP sales"]);

// var trugreen = {
// 	name: "Trugreen",
// 	ceo:{
// 		firstname: "Mig",
// 		lastname: "Cat"
// 	},
// 	"stock of company": 100
// };

// console.log(trugreen);



// function multiply(x, y) {
// 	// body...
// 	z=x*y;
// 	return z;
// }

// var a=multiply(5, 3);
// // console.log(a);
// multiply.version="v1.1.1";
// console.log(multiply.version);

// function makemultiplier(multiplier) {
// 	// body...
// 	var myfunc = function(x){
// 		return multiplier*x;
// 	};
// 	return myfunc;
// }

// var b = makemultiplier(3);
// console.log(b(10));

// function dooper(x, oper){
// 	return oper(x);
// }

// var result = dooper(5, b);
// console.log(result);

// var a={x:7};
// var b= a;
// b.x=5;
// console.log(b);
// console.log(a);

// function a(objval) {
// 	console.log("before: ")
// 	console.log(objval);

// 	objval.x=5;
// 	console.log("after: ");
// 	console.log(objval);

// }

// val={x:7};
// a(val)
// console.log(val);

// function test() {
// 	// body...
// 	console.log("Hello");
// }
// test();


//function constructor

// function Circle(rad) {
// 	// body...
// 	this.radius=rad;
// }
// 	Circle.prototype.getarea= function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}


// var mycircle=new Circle(10);
// console.log(mycircle.getarea());

// var mycircle2=new Circle(20);
// console.log(mycircle2.getarea());

//Object Literals

// var literalCircle = {
// 	radius: 10,

// 	getarea: function () {
// 		console.log(this);
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getarea());
// console.log(this);



//Arrays
// var arr= new Array();
// arr[0]="Umair";
// arr[1]=1;
// arr[2]=function (name) {
// 	console.log("Name is: " + name);
// 	// body...
// };
// arr[3]= {Company: "Trugreen"};

// console.log(arr);
// console.log(arr[3].Company);



//Short Hand Array Creation

// var names = ["Umair", "Pat", "Mig"];

// for (var i = 0; i < names.length; i++){
// 	console.log(names[i]);
// }

// var obj={
// 	name:"Umair",
// 	Co:"Trugreen"
// };

// for (var prop in obj) {
// 	console.log(prop + ": " + obj[prop])
// }

var namegreeter={};
namegreeter.name="Umair";
namegreeter.sayhi=function () {
	// body...
	console.log("Say Hi: " + namegreeter.name);
};

namegreeter.sayhi();
