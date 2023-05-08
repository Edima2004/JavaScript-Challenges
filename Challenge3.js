//! Challenge 3
//* Title - Days Between

console.log(Date.now());
console.log(new Date());

const date1 = new Date('May 27, 2021');
const date2 = new Date('5, June 2023');
//console.log(date1);

function dateDiff(d1, d2) {
	const new_d1 = new Date(d1).getTime();
	const new_d2 = new Date(d2).getTime();
	const one_day = 1000 * 60 * 60 * 24;

	let timeDiff = new_d2 - new_d1;

	/*For negative and decimal values */
	timeDiff = Math.round(Math.abs(timeDiff));
	const days = timeDiff / one_day;

	return days;
	//console.log(new_d1);
}

//OR
const dateDiff2 = (d1, d2) => { return Math.round(Math.abs(( d2 - d1 ))) / (1000 * 60 * 60 * 24) }


console.log(dateDiff(date1, date2) + ' days');
console.log(dateDiff2(date1, date2) + ' days');
