console.log('Testing Quokka');

//!Challenge 1
//* Title - Multiply Arguments

function multiply() {
	const args = [...arguments];
	const final = args.reduce((total, num) => {
		if (num > 0) {
			return (total *= num);
		} else {
			return (total += num);
		}
	}, 1);
	return final;
}

//OR

const multiply2 = (...args) => {
	const final = args.reduce((total, num) => {
		return num ? num * total : num + total;
	}, 1);
	return final;
};

console.log(multiply(4, 5));
console.log(multiply(2, 0, 4, 2));
console.log(multiply2(4, 5));
console.log(multiply2(2, 0, 4, 2));
