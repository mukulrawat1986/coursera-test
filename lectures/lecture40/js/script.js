// object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " 
	+ company.ceo.firstName);

console.log(company["name"]);

company["stock of company"] = 110;

console.log(company);

var temp = "this is a big property name";
company[temp] = 110;

console.log("big property name is " 
	+ company[temp]);