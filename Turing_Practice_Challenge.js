//Check the Readme for code explanation and details

const ops = ['x', '+', 'D', 'C'];
const opsObj = {
	x: 'new score',
	'+': 'sum of previous two scores',
	D: 'double the previous score',
	C: 'remove the previous score',
};

const baseBallG = (...args) => {
	const newArray = args.map((arg, index) => {
		if (arg === 'C') {
			const new_args = args.slice(0, index - 1).concat(args.slice(index + 1));
			args = new_args;
			return args;
		}

		if (arg === 'D') {
			const new_index = args.indexOf('D');
			const newValue = args[new_index - 1] * 2;
			args.splice(new_index, 1, newValue);
			return args;
		}

		if (arg === '+') {
			const new_index = args.indexOf('+');
			const newValue2 = args[new_index - 1] * 1 + args[new_index - 2] * 1;
			args.splice(new_index, 1, newValue2);
			return args;
		} else {
			return args;
		}
	});
	return sum(args);
};

const sum = (new_args) => {
	const final = new_args.reduce((total, num, index) => {
		console.log(num);
		return num++ + total;
	}, 0);
	return final;
};

console.log(baseBallG('5', '2', 'C', 'D', '+'));
console.log(baseBallG('5', '-2', '4', 'C', 'D', '9', '+', '+'));
console.log(baseBallG('1'));

console.log(baseBallG('5', '2', '3', 'C', '+'));
console.log(baseBallG('5', '2', 'C', 'D', '5'));
console.log(baseBallG('5', '2', 'D', 'C'));

console.log('Turing');
