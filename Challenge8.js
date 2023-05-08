//! Challenge 8
//* Capitalize all first Letters

const Capitalize = (args) => {
	const new_args = args.split(' ').map((item) => {
		const new_item = item[0].toUpperCase().concat(item.slice(1));

      return item.charAt(0).toUpperCase().concat(item.slice(1));
      //OR
		//return new_item;
	});
	return new_args.join(' ');
};

console.log(Capitalize('i got home early'));
console.log(Capitalize('i arrived rather early to the venue'));
