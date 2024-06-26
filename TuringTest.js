//still a wrong code output should be 10 combinations for [5,10,15,20]

/* ChatGpt prompt
   Create a function that takes 3 parameters: an array(arr), limit of combinations(limit) and a divisor.  the limit is the largest number of combinations. the function should return the list and number of possible combinations divisible by the divisor. example: arr= [5, 10, 15, 20], limit = 4, divisor = 5. the no of possible combinations should be 10, and the list goes like this: [5], [10], [15], [20], [5,10], [5,15], ..... [ 5,10,15], [10,15,20], [5,10,15,20]

   We are not checking which combinations are divisible by the divisor, we are checking if each element is divisible by the divisor  
 */

function getCombinations(arr, limit, divisor) {
	let combinations = [];
	let count = 0;

	// Helper function to generate combinations
	function generateCombos(start, combo) {
		if (combo.length === limit) {
			combinations.push(combo);
			if (combo.every((num) => num % divisor === 0)) {
				count++;
			}
			return;
		}
		for (let i = start; i < arr.length; i++) {
			generateCombos(i + 1, combo.concat(arr[i]));
		}
	}

	// Generate combinations starting from each element
	for (let i = 0; i < arr.length; i++) {
		generateCombos(i, [arr[i]]);
	}

	return { combinations, count };
}

// Example usage
let arr = [5, 10, 15, 20];
let limit = 4;
let divisor = 5;

let { combinations, count } = getCombinations(arr, limit, divisor);

console.log('Number of possible combinations divisible by divisor:', count);
console.log(
	'List of combinations:',
	combinations.map((combo) => `[${combo.join(', ')}]`)
);
