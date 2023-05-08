//! Challenge 2
//* Title - Return 3 Times

function example(a, b) {
	return function (c, d) {
		return function (e, f) {
			return a * c * e + b * d * f;
		};
	};
}

//OR

const example2 = (a, b) => (c, d) => (e, f) => {
	return a * c * e + b * d * f;
};

console.log(example(1, 2)(1, 2)(3, 4));
console.log(example(1, 2)(0, 1)(0, 5));
console.log(example2(1, 2)(1, 2)(3, 4));
console.log(example2(1, 2)(0, 1)(0, 5));
