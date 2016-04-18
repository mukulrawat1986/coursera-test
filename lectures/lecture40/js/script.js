// this points to the global window object

function test(){
	console.log(this);
	// added a property to the global window object
	this.myName = "Mukul";
}
test();
console.log(window.myName);