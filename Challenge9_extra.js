//!Challenge 9
//* Title - Identifying Unique Characters

const Unique = (args) => {
   //? Using lastIndexOf
   for (let i = 0; i < args.length; i++) {
      console.log(args.lastIndexOf(args[i]));
      if(args.lastIndexOf(args[i]) !== i){
         return false
      }
      
   }
   return true

   //? Using For Of Loop
	//let values = {};
	//let excessValues = {};
	//for (const letter of args) {   
	//	if (values[letter]) {
	//		return false;
	//	}
	//		values[letter] = 'exists';
   //   };
   //   return true;

};

console.log(Unique('abcde'));
console.log(Unique('abcacdebf'));
