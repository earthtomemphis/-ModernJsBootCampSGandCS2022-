// Write a function to find the average val\ue in an array of numbers
//avg([0.50]) //25
//age([75,76,80,95,100]) //85.2

const arr = [0, 25];
const arr2 = [75, 76, 60, 95, 100];
total = 0;

function average(arr) {
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total / arr.length;
}

//Solution
function avg(arr) {
	let total = 0;
	//loop over each num
	for (let num of arr) {
		//add them together
		total += num;
	}
	//divide by number of nums
	return total / arr.length;
}

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!

function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

function isPangramTwo(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}
