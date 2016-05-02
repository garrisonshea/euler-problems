var number = document.getElementById("problem-input3").value;

//Problem 1
var sum = function() {
	var total = 0;
	var upperLimit = document.getElementById("problem-input1").value;
	for (var i = 0; i < upperLimit; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			total += i;
		} 
	}
	document.getElementById("answer1").innerHTML = total;
}

//Problem 2
var fibonacci = function() {
	//initializing sum to 2 makes sure to count the second term
	var upperLimit = document.getElementById("problem-input2").value;
	var sum = 2;
	var lower = 1;
	var upper = 2;
	while (upper < upperLimit) {
		var newTerm = lower + upper;
		lower = upper;
		upper = newTerm;
		if (upper % 2 === 0) {
			sum += upper;
		}
	}
	document.getElementById("answer2").innerHTML = sum;
}

//Problem 3
var findHighestPrimeFactor = function(number) {
	var max = Math.round(Math.sqrt(number));
	for (var i = max; i >= 2; i--) {
		if (number % i === 0 && findHighestPrimeFactor(i) === 1) {
			document.getElementById("answer3").innerHTML = i;
			return i;
		}
	}
	return i;
}

findHighestPrimeFactor();