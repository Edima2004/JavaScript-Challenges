//! Challenge 4
//* Number Sequence

const first = [8, 6, 8, 6, 7, 4, 7];
const second = [4, 5, 5, 7, 5, 5, 9];
const third = [3, 3, 2, 8, 7, 6, 5];

const sequence = (args) => {
	let iterations = 0;
	args.map((item, index) => {
		if (item === args[index + 2] && item !== args[index + 1]) {
			return iterations += 1;
		}
	});
	return iterations;
};

//OR

console.log(1 + true);

const sequence2 = (args) => args.reduce((total, value, index) => 
    total + (value === args[index + 2] && value !== args[index + 1]) , 0)

console.log(sequence(first));
console.log(sequence(second));
console.log(sequence(third));

console.log(sequence2(first));
console.log(sequence2(second));
console.log(sequence2(third));
