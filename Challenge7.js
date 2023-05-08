//! Challenge 7
//* Math Sequence, Geometric & Arithmetic

const findSequence = (array) => {
	let Answer = '';
	if (array[0] - array[1] === array[1] - array[2]) {
		Answer = 'Arithmetic';
	}
	else if (array[0] / array[1] === array[1] / array[2]) {
		Answer = 'Geometric';
	} 
   else {
		Answer = -1;
	}

	return Answer;
};

console.log(findSequence([2, 4, 6]));
console.log(findSequence([3, 9, 27]));
console.log(findSequence([5, 7, 10]));
