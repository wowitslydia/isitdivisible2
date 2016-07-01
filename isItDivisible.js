var isItDivisible = function() {

	var a = prompt("What are you dividing into?");
	var b = prompt("What are you dividing by?");

	if (a % b === 0) {
		var result = console.log("Those 2 numbers divide evenly!")
	} else {
		var result = console.log("Those 2 numbers do not divide evenly.")
	}
	alert(result)
}

isItDivisible()
