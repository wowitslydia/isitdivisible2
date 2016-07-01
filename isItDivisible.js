var isItDivisible = function() {

	var a = prompt("What are you dividing into?");
	var b = prompt("What are you dividing by?");

	if (a % b === 0) {
		console.log("Those 2 numbers divide evenly!")
	} else {
		console.log("Those 2 numbers do not divide evenly.")
	}
}

isItDivisible()