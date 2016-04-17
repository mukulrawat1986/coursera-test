// functions are first class data types
// functions are objects
// whatever you can do with a variable or an 
// object can be done with the functions.
function multiply(x, y){
	return x * y;
}

console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply);

// every object has a inherent method to it called
// toString() which helps in printing out the object
// as a string
console.log(multiply.toString);
console.log(multiply.toString());
console.log(multiply.version);

// function factory
function makeMultiplier(multiplier){
	var myFunc = function(x){
		return multiplier * x;
	};

	return myFunc;
}

// 
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// passing function as arguments
function doOperationOn(x, operation){
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(100, doubleAll);
console.log(result);