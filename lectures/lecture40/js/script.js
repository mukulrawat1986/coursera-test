// Object literals and "this"
var literalCircle = {
	radius: 10,

	getArea: function(){
		var self = this;
		console.log(this);

		// bug using this inside another function
		// when not using self
		var increaseRadius = 
			function(){
				// when used without self, this 
				// will refer to external window
				// object
				// this.radius = 20;
				self.radius = 20;
			};

		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());