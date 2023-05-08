//! Challenge 6
//* Find the longest word(s)

const findLongestWord = (args) => {
	//console.log(args.split(' '));
	let pseudoItem = [''];
   let length = 0;
	args.split(' ').map((item, index) => {
		if (item.length >= length ) {
         length = item.length
         if (pseudoItem[pseudoItem.length -1].length < item.length){
            pseudoItem = [];
            pseudoItem.push(item)

         }
         else{
            pseudoItem= [...pseudoItem , item]
         }
		}
		
	});
	return [`length: ${length} , Item: ${pseudoItem} `];
};

console.log(findLongestWord('i woke  up grigtsh this morning buy afteron'));
console.log(findLongestWord('i went straight to the market'));
