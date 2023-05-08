//! Challenge 5
//* Even or Odd

const sum = (num) => {
	let newNum = num.toString().split('');
	//let newNum = [...num + '']

	const finalNum = newNum.reduce((total, value) => {
		return (total += Number(value));
	}, 0);
	console.log(finalNum);
	return finalNum % 2 == 0 ? 'EVEN NUMBER' : 'ODD NUMBER';
	//return finalNum % 2 ? 'ODD NUMBER' : 'EVEN NUMBER';
};

console.log(sum(745));
console.log(sum(56));
