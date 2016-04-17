// ***** String concatenation
var string = "Hello";
string += " World";
console.log(string + "!");

// Regular math operators
console.log(( 5 * 4) / 3);
console.log(undefined / 5);
function test1(a){
	console.log(a/5);
}
test1();

// Equality
var x = 4, y = 4;
if (x == y){
	console.log("x=4 equals to y=4");
}

x = "4";
if(x == y){
	console.log("x='4' is equal to y=4");
}
// strict equality
if (x===y){
	console.log("Strict: x='4' is equal to y=4");
}else{
	console.log("Strict: x='4' is not equal to y=4");
}

// if statement (all false)
if (false || null || undefined || "" || 0 || NaN){
	console.log("This line won't ever execute");
}else{
	console.log("All false");
}

// if statement ( all true)
if (true && "hello" && 1 && -1 && "false"){
	console.log("All true");
}