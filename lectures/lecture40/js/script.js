// function constructors
function Circle(radius){
	//console.log(this);
	this.radius = radius;

	// this.getArea = 
	// 	function(){
	// 		return Math.Pi * Math.Pow(this.radius, 2);
	// 	};
}

Circle.prototype.getArea = 
	function(){
		return Math.Pi * Math.Pow(this.radius, 2);
	};


var myCircle = new Circle(10); // new Object();
console.log(myCircle);

var myNewCircle = new Circle(20);
console.log(myNewCircle);

